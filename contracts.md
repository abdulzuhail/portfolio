# Portfolio API Contracts

## Overview
This document outlines the API contracts for integrating the frontend portfolio website with the backend FastAPI server. The portfolio showcases Abdul Zuhail's data science and analytics expertise.

## Current Mock Data Sources
- `/app/frontend/src/data/mock.js` - Contains all mock data for frontend display
- Mock data includes: personal info, skills, projects, experience, testimonials, blog posts

## Backend API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions and send email notifications

**Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### 2. Newsletter Subscription  
**Endpoint**: `POST /api/newsletter/subscribe`
**Purpose**: Store newsletter subscription emails

**Request Body**:
```json
{
  "email": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

### 3. Portfolio Data Management
**Endpoint**: `GET /api/portfolio`
**Purpose**: Fetch complete portfolio data (projects, skills, experience, etc.)

**Response**:
```json
{
  "personalInfo": {...},
  "skills": {...},
  "projects": [...],
  "experience": [...],
  "testimonials": [...],
  "blogPosts": [...]
}
```

### 4. Project Analytics (Optional)
**Endpoint**: `POST /api/analytics/project-view`
**Purpose**: Track project views for analytics

**Request Body**:
```json
{
  "projectId": "number",
  "timestamp": "datetime"
}
```

## Database Models Required

### ContactMessage Model
```python
class ContactMessage(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime
    status: str = "new"  # new, read, replied
```

### NewsletterSubscription Model
```python
class NewsletterSubscription(BaseModel):
    id: str
    email: str
    subscribed_at: datetime
    is_active: bool = True
```

### ProjectView Model (Optional)
```python
class ProjectView(BaseModel):
    id: str
    project_id: int
    viewed_at: datetime
    ip_address: str = None
```

## Frontend Integration Points

### Components to Update
1. **Contact.jsx**: Replace form submission mock with actual API call
2. **Blog.jsx**: Update newsletter subscription to use API
3. **Projects.jsx**: Add analytics tracking (optional)

### Mock Data Migration
- Move static data from `mock.js` to database or keep as static content
- Contact form submissions will be stored in database
- Newsletter subscriptions will be stored in database

## Environment Variables Needed
```bash
# Email service configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Admin email for receiving contact form submissions
ADMIN_EMAIL=abdulzuhail@email.com
```

## Implementation Priority
1. **High Priority**: Contact form API - Essential for user communication
2. **Medium Priority**: Newsletter subscription API - Good for engagement
3. **Low Priority**: Analytics tracking - Nice to have for insights

## Error Handling
- Form validation on both frontend and backend
- Email delivery failure handling
- Rate limiting for form submissions
- Spam protection measures

## Testing Requirements
- Test contact form submission with valid/invalid data
- Test email delivery functionality
- Test newsletter subscription with duplicate emails
- Test form validation and error messages

## Notes
- The portfolio is currently fully functional with mock data
- All UI components are complete and responsive
- Social media links point to real profiles
- Resume PDF and profile image are properly integrated
- Professional corporate design is implemented as requested