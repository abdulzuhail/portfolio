from fastapi import FastAPI, APIRouter, HTTPException, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import (
    ContactMessage, 
    ContactMessageCreate, 
    NewsletterSubscription, 
    NewsletterSubscriptionCreate,
    PortfolioData
)
from email_service import email_service
from portfolio_data import PORTFOLIO_DATA
from datetime import datetime, timedelta
import asyncio
from collections import defaultdict

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Abdul Zuhail Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Rate limiting storage
rate_limit_storage = defaultdict(list)
RATE_LIMIT_WINDOW = 3600  # 1 hour in seconds
MAX_REQUESTS_PER_HOUR = 10  # Maximum requests per IP per hour

def get_client_ip(request: Request) -> str:
    """Get client IP address"""
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host

def check_rate_limit(ip: str) -> bool:
    """Check if IP is within rate limits"""
    now = datetime.utcnow()
    cutoff = now - timedelta(seconds=RATE_LIMIT_WINDOW)
    
    # Clean old entries
    rate_limit_storage[ip] = [
        timestamp for timestamp in rate_limit_storage[ip] 
        if timestamp > cutoff
    ]
    
    # Check if under limit
    if len(rate_limit_storage[ip]) >= MAX_REQUESTS_PER_HOUR:
        return False
    
    # Add current request
    rate_limit_storage[ip].append(now)
    return True

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Abdul Zuhail Portfolio API", "status": "active", "version": "1.0.0"}

@api_router.get("/portfolio", response_model=PortfolioData)
async def get_portfolio_data():
    """Get complete portfolio data"""
    return PORTFOLIO_DATA

@api_router.post("/contact")
async def submit_contact_form(
    contact_data: ContactMessageCreate, 
    request: Request,
    background_tasks: BackgroundTasks
):
    """Handle contact form submissions"""
    try:
        # Get client IP
        client_ip = get_client_ip(request)
        
        # Check rate limiting
        if not check_rate_limit(client_ip):
            raise HTTPException(
                status_code=429, 
                detail="Too many requests. Please try again later."
            )
        
        # Create contact message
        contact_message = ContactMessage(
            **contact_data.dict(),
            ip_address=client_ip
        )
        
        # Save to database
        await db.contact_messages.insert_one(contact_message.dict())
        
        # Send email notification in background
        background_tasks.add_task(
            email_service.send_contact_notification,
            contact_message.dict()
        )
        
        logging.info(f"Contact form submitted by {contact_data.name} ({contact_data.email})")
        
        return {
            "success": True,
            "message": "Thank you for your message! I'll get back to you soon.",
            "id": contact_message.id
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again."
        )

@api_router.post("/newsletter/subscribe")
async def subscribe_newsletter(
    subscription_data: NewsletterSubscriptionCreate,
    request: Request,
    background_tasks: BackgroundTasks
):
    """Handle newsletter subscriptions"""
    try:
        # Get client IP
        client_ip = get_client_ip(request)
        
        # Check if email already exists
        existing = await db.newsletter_subscriptions.find_one(
            {"email": subscription_data.email, "is_active": True}
        )
        
        if existing:
            return {
                "success": True,
                "message": "You're already subscribed to the newsletter!",
                "already_subscribed": True
            }
        
        # Create subscription
        subscription = NewsletterSubscription(
            **subscription_data.dict(),
            ip_address=client_ip
        )
        
        # Save to database
        await db.newsletter_subscriptions.insert_one(subscription.dict())
        
        # Send confirmation email in background
        background_tasks.add_task(
            email_service.send_newsletter_confirmation,
            subscription_data.email
        )
        
        logging.info(f"Newsletter subscription: {subscription_data.email}")
        
        return {
            "success": True,
            "message": "Successfully subscribed! Check your email for confirmation.",
            "id": subscription.id
        }
        
    except Exception as e:
        logging.error(f"Error processing newsletter subscription: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your subscription. Please try again."
        )

@api_router.get("/contact/messages")
async def get_contact_messages(skip: int = 0, limit: int = 50):
    """Get contact messages (admin endpoint)"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        total = await db.contact_messages.count_documents({})
        
        return {
            "messages": messages,
            "total": total,
            "skip": skip,
            "limit": limit
        }
    except Exception as e:
        logging.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching messages")

@api_router.get("/newsletter/subscribers")
async def get_newsletter_subscribers(skip: int = 0, limit: int = 50):
    """Get newsletter subscribers (admin endpoint)"""
    try:
        subscribers = await db.newsletter_subscriptions.find(
            {"is_active": True}
        ).sort("subscribed_at", -1).skip(skip).limit(limit).to_list(limit)
        total = await db.newsletter_subscriptions.count_documents({"is_active": True})
        
        return {
            "subscribers": subscribers,
            "total": total,
            "skip": skip,
            "limit": limit
        }
    except Exception as e:
        logging.error(f"Error fetching newsletter subscribers: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching subscribers")

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Test database connection
        await db.admin.command('ping')
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow()
        }
    except Exception as e:
        logging.error(f"Health check failed: {str(e)}")
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e),
            "timestamp": datetime.utcnow()
        }

# Include the router in the main app
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    logger.info("Abdul Zuhail Portfolio API starting up...")
    
    # Create indexes for better performance
    try:
        await db.contact_messages.create_index("created_at")
        await db.contact_messages.create_index("email")
        await db.newsletter_subscriptions.create_index("email")
        await db.newsletter_subscriptions.create_index("subscribed_at")
        logger.info("Database indexes created successfully")
    except Exception as e:
        logger.error(f"Error creating indexes: {str(e)}")

@app.on_event("shutdown")
async def shutdown_db_client():
    logger.info("Shutting down Abdul Zuhail Portfolio API...")
    client.close()