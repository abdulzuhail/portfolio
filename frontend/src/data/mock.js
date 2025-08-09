// Mock data for Abdul Zuhail's Portfolio - Updated with accurate information

export const personalInfo = {
  name: "Abdul Zuhail M",
  title: "Data Analyst",
  subtitle: "MCA Student | Data Analysis & Visualization Specialist",
  location: "Devala, India",
  email: "abdulzuhail@email.com",
  phone: "+91 6381482902",
  profileImage: "https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/ls3nl748_WhatsApp%20Image%202025-08-09%20at%2012.06.43_058dd74d.jpg",
  bio: "Motivated and detail-oriented Data Analyst with hands-on internship experience in real-time data analysis, visualization, and reporting. Skilled in Python, SQL, Power BI, Tableau, and Excel, with a strong ability to build dashboards and deliver business insights.",
  resumeUrl: "https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/p42jhbdy_AbdulZuhailM_Resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/abdulzuhail",
  linkedin: "https://www.linkedin.com/in/abdulzuhail/",
  instagram: "https://www.instagram.com/itz_abdul_zuhail?igsh=OGE2NTVwd3FzNHFn",
  portfolio: "https://www.datascienceportfol.io/abdulzuhail"
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
    title: "Real-Time Social Media Sentiment Analysis",
    category: "Data Analysis",
    description: "Built a live dashboard to analyze Reddit posts for sentiment and sarcasm with predictive models for tracking and alerting on negative trend spikes.",
    longDescription: "Developed a comprehensive real-time sentiment analysis system that monitors Reddit posts for sentiment and sarcasm detection. The project integrates FastAPI and Streamlit to create a scalable real-time interface that can track sentiment trends and provide automated alerts when negative sentiment spikes are detected.",
    technologies: ["Python", "FastAPI", "Streamlit", "Transformers", "Scikit-learn", "PRAW", "Prophet"],
    features: [
      "Real-time Reddit data processing",
      "Sentiment and sarcasm detection",
      "Predictive trend analysis",
      "Automated alert system",
      "Interactive dashboard interface"
    ],
    challenges: "Handling real-time data streams and ensuring accurate sentiment classification across different text formats and social media contexts.",
    outcomes: "Successfully deployed a scalable sentiment monitoring system capable of processing live social media data and providing actionable insights for trend analysis.",
    githubUrl: "https://github.com/abdulzuhail",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Amazon Sales Analytics Dashboard",
    category: "Business Intelligence",
    description: "Developed an interactive Power BI dashboard analyzing $2.1M+ sales across 19M+ reviews with automated regional and category-based insights.",
    longDescription: "Created a comprehensive business intelligence dashboard using Power BI to analyze massive Amazon sales data. The dashboard processes over $2.1 million in sales data across 19 million+ customer reviews, providing executives with automated insights through DAX calculations and enabling detailed filtering by quarter, region, and product type.",
    technologies: ["Power BI", "Excel", "DAX"],
    features: [
      "Interactive sales performance metrics",
      "Regional and category analysis",
      "Automated DAX calculations",
      "Executive-level filtering options",
      "Revenue trend visualization"
    ],
    challenges: "Processing large datasets efficiently while maintaining dashboard performance and creating meaningful insights from massive review data.",
    outcomes: "Delivered actionable business insights that enabled executives to make data-driven decisions on regional performance and product categories.",
    githubUrl: "https://github.com/abdulzuhail/Amazon-Products",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Blinkit Sales & Outlet Performance Analysis",
    category: "Data Analysis",
    description: "Conducted comprehensive performance review of outlets based on fat content and item categories, identifying underperforming outlets for optimization.",
    longDescription: "Performed detailed analysis of Blinkit's outlet performance using Python data analysis libraries. The project involved analyzing sales patterns based on product fat content and item categories, creating comprehensive visualizations to help decision-makers identify optimization opportunities for underperforming outlets.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Outlet performance analysis",
      "Category-wise sales breakdown",
      "Fat content impact assessment",
      "Comprehensive data visualizations",
      "Optimization recommendations"
    ],
    challenges: "Analyzing complex sales patterns across multiple outlets and product categories while ensuring accurate performance metrics.",
    outcomes: "Successfully identified underperforming outlets and provided actionable recommendations for performance optimization, leading to improved business strategies.",
    githubUrl: "https://github.com/abdulzuhail/Blinkit-Analysis-Python",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  }
];

export const experience = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    status: "Pursuing"
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