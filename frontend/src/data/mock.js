// Mock data for Abdul Zuhail's Portfolio - Updated with accurate information

export const personalInfo = {
  name: "Abdul Zuhail M",
  title: "Data Analyst",
  subtitle: "MCA Graduate | Data Analysis & Visualization Specialist",
  location: "Devala, India",
  email: "abdulzuhail18@gmail.com",
  phone: "+91 6381482902",
  profileImage: "https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/ls3nl748_WhatsApp%20Image%202025-08-09%20at%2012.06.43_058dd74d.jpg",
  bio: "Motivated and detail-oriented Data Analyst with hands-on internship experience in real-time data analysis, visualization, and reporting. Skilled in Python, SQL, Power BI, Tableau, and Excel, with a strong ability to build dashboards and deliver business insights.",
  resumeUrl: "https://customer-assets.emergentagent.com/job_abdul-projects/artifacts/4x490oc8_AbdulZuhailM_Resume_compressed.pdf"
};

export const socialLinks = {
  github: "https://github.com/abdulzuhail",
  linkedin: "https://www.linkedin.com/in/abdulzuhail/",
  instagram: "https://www.instagram.com/itz_abdul_zuhail?igsh=OGE2NTVwd3FzNHFn"
};

export const skills = {
  programming: [
    { name: "Python", level: 85 },
    { name: "SQL", level: 80 },
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 60 }
  ],
  dataAnalysis: [
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Excel", level: 90 },
    { name: "KNIME", level: 80 }
  ],
  libraries: [
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "Matplotlib", level: 80 }
  ],
  tools: [
    { name: "Git/GitHub", level: 80 },
    { name: "Jupyter Notebook", level: 90 },
    { name: "Streamlit", level: 75 },
    { name: "FastAPI", level: 70 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Data Analysis Using Python",
    category: "Data Analysis",
    description: "Comprehensive data analysis project completed during internship at Main Flow Service & Technologies, showcasing end-to-end data processing and visualization techniques.",
    longDescription: "This project represents the culmination of my internship work at Main Flow Service & Technologies, where I applied comprehensive data analysis techniques using Python. The project demonstrates my ability to handle real-world datasets, perform statistical analysis, and create meaningful visualizations that drive business insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Comprehensive data preprocessing and cleaning",
      "Statistical analysis and hypothesis testing",
      "Advanced data visualization techniques",
      "Business insights generation",
      "Interactive dashboard creation"
    ],
    challenges: "Working with real-world messy data and ensuring accurate analysis while maintaining data integrity throughout the processing pipeline.",
    outcomes: "Successfully delivered actionable insights that informed business decision-making processes and demonstrated proficiency in data analysis workflows.",
    githubUrl: "https://github.com/abdulzuhail/Data-Analysis-Using-Python",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc1NDcyMzQ3NXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Real-Time Social Media Sentiment Analysis",
    category: "Machine Learning",
    description: "A real-time sentiment and emotion analysis system built using NLP, Transformer-based models (BERT/RoBERTa), and data streaming from Reddit with FastAPI backend and React + Streamlit dashboard.",
    longDescription: "Advanced sentiment analysis system that processes real-time social media data from Reddit using state-of-the-art transformer models. The system combines NLP techniques with modern web technologies to create a comprehensive solution for monitoring social media sentiment trends and emotional patterns.",
    technologies: ["Python", "FastAPI", "Streamlit", "React", "BERT", "RoBERTa", "Transformers", "PRAW", "Prophet"],
    features: [
      "Real-time Reddit data streaming",
      "Advanced sentiment and emotion detection",
      "Transformer-based model implementation",
      "Interactive React + Streamlit dashboard",
      "Predictive trend analysis with Prophet"
    ],
    challenges: "Integrating multiple technologies and ensuring real-time performance while maintaining accuracy of sentiment classification across diverse social media content.",
    outcomes: "Successfully deployed a scalable sentiment monitoring system that provides real-time insights into social media trends and emotional patterns.",
    githubUrl: "https://github.com/abdulzuhail/real-time-sentiment-analysis-on-social-media",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpc3xlbnwwfHx8fDE3NTQ3MjM0ODF8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Weather Monitoring Dashboard",
    category: "Data Visualization",
    description: "A comprehensive Power BI dashboard visualizing temperature, humidity, wind speed, and Air Quality Index (AQI) across major cities in Tamil Nadu for interactive weather monitoring.",
    longDescription: "Created an advanced weather monitoring system using Power BI to track and visualize multiple environmental parameters across Tamil Nadu. The dashboard provides real-time insights into weather patterns and air quality, enabling stakeholders to make informed decisions based on environmental data.",
    technologies: ["Power BI", "Python", "DAX", "Weather API", "Data Modeling"],
    features: [
      "Multi-parameter weather tracking",
      "Real-time AQI monitoring",
      "Interactive city-wise comparisons",
      "Trend analysis and forecasting",
      "Mobile-responsive dashboard design"
    ],
    challenges: "Integrating multiple weather data sources and ensuring accurate real-time updates while maintaining dashboard performance across different devices.",
    outcomes: "Delivered a comprehensive weather monitoring solution that enables stakeholders to track environmental conditions and make data-driven decisions.",
    githubUrl: "https://github.com/abdulzuhail/Weather-Monitoring-Dashboard",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1717501219402-4444fcef55e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZGF0YXxlbnwwfHx8fDE3NTQ3MjM0OTF8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    title: "Web Scraping Final Project",
    category: "Data Engineering",
    description: "Comprehensive web scraping project demonstrating data extraction and visualization techniques, scraping information about largest U.S. companies by revenue from Wikipedia.",
    longDescription: "Advanced web scraping project that demonstrates proficiency in data extraction, processing, and visualization. The project scrapes comprehensive business data from Wikipedia, processes it using Python libraries, and creates insightful visualizations to analyze corporate revenue patterns and market trends.",
    technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Advanced web scraping techniques",
      "Multi-format data extraction (JSON, CSV)",
      "Table scraping and processing",
      "Data visualization and analysis",
      "Automated data collection pipelines"
    ],
    challenges: "Handling dynamic web content and ensuring data quality while scraping from multiple sources with different structures.",
    outcomes: "Successfully extracted and analyzed corporate revenue data, providing insights into market trends and company performance patterns.",
    githubUrl: "https://github.com/abdulzuhail/Web-Scraping-Final",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZ3xlbnwwfHx8fDE3NTQ3MjM0ODZ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    title: "Amazon Sales Analytics Dashboard",
    category: "Business Intelligence",
    description: "Interactive Power BI dashboard analyzing $2.1M+ sales across 19M+ reviews with automated regional and category-based insights using DAX calculations.",
    longDescription: "Comprehensive business intelligence solution that analyzes massive Amazon sales datasets to provide strategic insights. The dashboard processes over $2.1 million in sales data across 19 million+ customer reviews, delivering automated insights through advanced DAX calculations and interactive visualizations.",
    technologies: ["Power BI", "Excel", "DAX", "Data Modeling"],
    features: [
      "Large-scale data processing",
      "Advanced DAX calculations",
      "Regional performance analysis",
      "Category-wise insights",
      "Executive-level reporting"
    ],
    challenges: "Managing massive datasets while maintaining dashboard performance and creating meaningful insights from complex sales data.",
    outcomes: "Enabled data-driven decision making for stakeholders, providing clear visibility into sales performance across multiple dimensions.",
    githubUrl: "https://github.com/abdulzuhail/Amazon-Products",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc1NDcyMzQ3NXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    title: "Blinkit Sales & Outlet Performance Analysis",
    category: "Data Analysis",
    description: "Comprehensive analysis of Blinkit's outlet performance using Python, analyzing sales patterns based on product categories and fat content to identify optimization opportunities.",
    longDescription: "Detailed performance analysis of Blinkit's retail ecosystem, examining sales patterns across different outlet types and product categories. The project provides actionable insights for outlet optimization and inventory management through comprehensive data analysis and visualization.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Power BI"],
    features: [
      "Outlet performance benchmarking",
      "Category-wise sales analysis",
      "Product attribute impact assessment",
      "Comprehensive data visualizations",
      "Optimization recommendations"
    ],
    challenges: "Analyzing complex retail data across multiple dimensions while ensuring accurate performance metrics and meaningful business insights.",
    outcomes: "Identified key optimization opportunities for underperforming outlets and provided data-driven recommendations for inventory management.",
    githubUrl: "https://github.com/abdulzuhail/Blinkit-Analysis-Python",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc1NDcyMzQ3NXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 7,
    title: "Hyper-Personalized Recommendation Engine",
    category: "Machine Learning",
    description: "Advanced product recommendation system incorporating emotion detection from customer reviews and behavioral analysis to provide hyper-personalized recommendations.",
    longDescription: "Innovative recommendation system that goes beyond traditional collaborative filtering by incorporating emotional intelligence and behavioral analysis. The system analyzes customer emotions from text reviews and combines this with purchasing behavior to deliver highly personalized product recommendations.",
    technologies: ["Python", "NLP", "Emotion Detection", "Machine Learning", "Recommendation Systems", "Transformers"],
    features: [
      "Emotion detection from customer reviews",
      "Advanced behavioral pattern analysis",
      "Hybrid recommendation algorithms",
      "Real-time personalization",
      "Performance optimization"
    ],
    challenges: "Balancing recommendation accuracy with computational efficiency while processing emotional context from unstructured review data.",
    outcomes: "Achieved significant improvement in recommendation relevance through emotional intelligence integration, leading to enhanced user engagement.",
    githubUrl: "https://github.com/abdulzuhail/Hyper-Personalized-Product-Recommendation-Engine-with-Emotion-Detection",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzU0NzIzNTAyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 8,
    title: "Automated Misinformation Detection Pipeline",
    category: "AI/ML",
    description: "End-to-end pipeline using KNIME, Python, and transformer-based AI models to detect and classify misinformation, leveraging RoBERTa for accurate fake news identification.",
    longDescription: "Comprehensive misinformation detection system that combines KNIME Analytics Platform with advanced transformer models to combat fake news. The pipeline processes text data in real-time, performing sophisticated NLP analysis to identify and classify potentially misleading information with high accuracy.",
    technologies: ["Python", "KNIME", "RoBERTa", "Transformers", "NLP", "Machine Learning Pipeline"],
    features: [
      "Real-time misinformation detection",
      "Advanced transformer model integration",
      "Automated pipeline orchestration",
      "High-accuracy classification",
      "Scalable processing architecture"
    ],
    challenges: "Handling diverse content types and languages while maintaining high accuracy in misinformation detection across different media formats.",
    outcomes: "Developed a robust system capable of accurately identifying misinformation with high precision, contributing to digital media integrity.",
    githubUrl: "https://github.com/abdulzuhail/Automated-Misinformation-Detection-Pipeline",
    liveUrl: "#",
    image: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg"
  }
];

export const experience = [
  {
    id: 1,
    title: "Data Analysis Intern",
    company: "Main Flow Service & Technologies",
    period: "Jul 2025 - Present",
    location: "Noida (Remote)",
    description: "Currently working on comprehensive data analysis projects using Python, focusing on end-to-end data processing, statistical analysis, and visualization techniques.",
    responsibilities: [
      "Performing comprehensive data analysis using Python and statistical methods",
      "Creating interactive visualizations and dashboards for business insights",
      "Collaborating with cross-functional teams on data-driven projects",
      "Documenting analysis processes and maintaining project records"
    ],
    achievements: [
      "Successfully completed multiple data analysis projects",
      "Developed proficiency in advanced Python data analysis techniques",
      "Contributed to team meetings and project planning sessions"
    ],
    certificate: "https://customer-assets.emergentagent.com/job_abdul-projects/artifacts/04xa94cm_WhatsApp%20Image%202025-08-09%20at%2012.38.35_3712433d.jpg"
  },
  {
    id: 2,
    title: "Data Scientist Intern",
    company: "Quantum Wolf",
    period: "Jan 2025 - Apr 2025",
    location: "Madurai",
    description: "Designed scalable data pipelines for preprocessing and analysis of real-time data, reducing manual processing time by 30% through automated workflows.",
    responsibilities: [
      "Designed scalable data pipelines for real-time data preprocessing and analysis",
      "Reduced manual processing time by 30% through automated workflows using KNIME & Orange",
      "Utilized low-code tools for efficient model deployment and dashboarding",
      "Collaborated with teams on real-time data processing solutions"
    ],
    achievements: [
      "Achieved 30% reduction in manual processing time",
      "Successfully deployed automated data workflows",
      "Implemented efficient model deployment strategies"
    ]
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Internship Studio",
    period: "Sept 2024 - Oct 2024",
    location: "Pune (Remote)",
    description: "Cleaned and visualized sales data using Excel, Power BI, and Tableau, building dashboards for category-wise performance analysis.",
    responsibilities: [
      "Cleaned and visualized sales data using Excel, Power BI, and Tableau",
      "Built comprehensive dashboards for category-wise performance analysis",
      "Improved report clarity and insights storytelling",
      "Practiced tool-based selection for optimal visualization"
    ],
    achievements: [
      "Enhanced report clarity through effective dashboards",
      "Developed expertise in multiple visualization tools",
      "Delivered actionable business insights"
    ]
  },
  {
    id: 4,
    title: "Data Engineer Intern",
    company: "Sharpened Mind & Tech Solutions",
    period: "Sept 2024",
    location: "Madurai",
    description: "Built robust scraping pipelines using BeautifulSoup and Scrapy, delivering clean, structured datasets for analytics teams.",
    responsibilities: [
      "Built robust web scraping pipelines using BeautifulSoup and Scrapy",
      "Delivered clean, structured datasets for downstream analytics teams",
      "Published processed datasets via GitHub for public access",
      "Ensured data quality and consistency across all deliverables"
    ],
    achievements: [
      "Successfully delivered clean, structured datasets",
      "Published open-source datasets on GitHub",
      "Established efficient data collection processes"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Madurai Kamaraj University",
    period: "2023 - 2025",
    location: "Madurai",
    percentage: "80%",
    status: "Completed"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Government Arts & Science College",
    period: "2019 - 2022",
    location: "Gudalur",
    percentage: "82%",
    status: "Completed"
  }
];

export const certifications = [
  "Simplilearn – Business Analytics with Excel (Microsoft-backed)",
  "Simplilearn – Power BI for Beginners (Microsoft-backed)",
  "Tata Group – Data Analytics & Generative AI Virtual Experience (Forage)",
  "Accenture – Data Analytics & Visualization Virtual Experience (Forage)",
  "Deloitte – Data Analytics Virtual Experience (Forage)",
  "Microsoft & LinkedIn Learning – Career Essentials in Data Analysis",
  "IBM – Python 101 for Data Science (Cognitive Class)"
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Real-Time Dashboards with Streamlit and FastAPI",
    excerpt: "A comprehensive guide to creating scalable real-time analytics dashboards using modern Python frameworks.",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Data Engineering",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Power BI vs Tableau: A Data Analyst's Experience",
    excerpt: "Comparing two leading visualization tools based on hands-on experience from multiple internship projects.",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Data Visualization",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Web Scraping for Data Analytics: Best Practices",
    excerpt: "Lessons learned from building robust scraping pipelines using BeautifulSoup and Scrapy for data collection.",
    date: "2024-10-15",
    readTime: "7 min read",
    category: "Data Engineering",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "From Internship to Impact: My Data Analytics Journey",
    excerpt: "Sharing insights and learnings from multiple data analytics internships and real-world project implementations.",
    date: "2024-09-22",
    readTime: "4 min read",
    category: "Career",
    image: "/api/placeholder/400/250"
  }
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Malayalam", level: "Basic" }
];