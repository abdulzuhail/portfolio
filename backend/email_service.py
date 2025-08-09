import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_host = os.getenv('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('SMTP_PORT', '587'))
        self.smtp_username = os.getenv('SMTP_USERNAME')
        self.smtp_password = os.getenv('SMTP_PASSWORD')
        self.admin_email = os.getenv('ADMIN_EMAIL', 'abdulzuhail18@gmail.com')
        
    async def send_contact_notification(self, contact_data: dict) -> bool:
        """Send email notification when contact form is submitted"""
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.smtp_username
            msg['To'] = self.admin_email
            msg['Subject'] = f"New Contact Form Submission: {contact_data['subject']}"
            
            # Email body
            body = f"""
            New contact form submission received:
            
            Name: {contact_data['name']}
            Email: {contact_data['email']}
            Subject: {contact_data['subject']}
            
            Message:
            {contact_data['message']}
            
            Submitted at: {contact_data['created_at']}
            """
            
            msg.attach(MIMEText(body, 'plain'))
            
            # Send email (if SMTP credentials are configured)
            if self.smtp_username and self.smtp_password:
                server = smtplib.SMTP(self.smtp_host, self.smtp_port)
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                text = msg.as_string()
                server.sendmail(self.smtp_username, self.admin_email, text)
                server.quit()
                logger.info(f"Contact notification email sent for: {contact_data['name']}")
                return True
            else:
                logger.warning("SMTP credentials not configured. Email notification skipped.")
                return False
                
        except Exception as e:
            logger.error(f"Failed to send contact notification email: {str(e)}")
            return False
    
    async def send_newsletter_confirmation(self, email: str) -> bool:
        """Send confirmation email for newsletter subscription"""
        try:
            if not self.smtp_username or not self.smtp_password:
                logger.warning("SMTP credentials not configured. Newsletter confirmation skipped.")
                return False
                
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.smtp_username
            msg['To'] = email
            msg['Subject'] = "Welcome to Abdul Zuhail's Newsletter!"
            
            # Email body
            body = f"""
            Thank you for subscribing to my newsletter!
            
            You'll receive updates about:
            - Latest data science insights and tutorials
            - New project showcases and case studies
            - Industry trends and analytical techniques
            - Career tips and learning resources
            
            You can unsubscribe at any time by replying to this email.
            
            Best regards,
            Abdul Zuhail M
            Data Analyst
            
            Connect with me:
            - LinkedIn: https://www.linkedin.com/in/abdulzuhail/
            - GitHub: https://github.com/abdulzuhail
            """
            
            msg.attach(MIMEText(body, 'plain'))
            
            # Send email
            server = smtplib.SMTP(self.smtp_host, self.smtp_port)
            server.starttls()
            server.login(self.smtp_username, self.smtp_password)
            text = msg.as_string()
            server.sendmail(self.smtp_username, email, text)
            server.quit()
            logger.info(f"Newsletter confirmation email sent to: {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send newsletter confirmation email: {str(e)}")
            return False

# Global email service instance
email_service = EmailService()