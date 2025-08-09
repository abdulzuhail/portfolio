// Mock data for Abdul Zuhail's Portfolio

export const personalInfo = {
  name: "Abdul Zuhail M",
  title: "Data Analyst & ML Enthusiast",
  subtitle: "MCA Graduate | Turning Data into Insights",
  location: "Gudalur, India",
  email: "abdulzuhail@email.com",
  phone: "+91 9876543210",
  profileImage: "https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/ls3nl748_WhatsApp%20Image%202025-08-09%20at%2012.06.43_058dd74d.jpg",
  bio: "Passionate MCA graduate with expertise in data analysis, visualization, and machine learning. I specialize in transforming complex datasets into actionable business insights using modern analytical tools and techniques.",
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
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "R", level: 75 },
    { name: "JavaScript", level: 70 }
  ],
  dataAnalysis: [
    { name: "Power BI", level: 95 },
    { name: "Tableau", level: 90 },
    { name: "Excel", level: 90 },
    { name: "KNIME", level: 85 }
  ],
  machineLearning: [
    { name: "Scikit-learn", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "NLP", level: 85 },
    { name: "Deep Learning", level: 75 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Streamlit", level: 90 },
    { name: "FastAPI", level: 80 },
    { name: "Jupyter", level: 95 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Amazon Sales Analytics Dashboard",
    category: "Data Visualization",
    description: "Comprehensive Power BI dashboard analyzing Amazon product sales performance, customer preferences, and revenue trends.",
    longDescription: "This project involved creating an interactive Power BI dashboard to visualize Amazon sales data. The dashboard helps stakeholders identify top-selling products, understand seasonal trends, and analyze customer purchasing behavior. Key insights include peak sales periods, product category performance, and regional sales distribution.",
    technologies: ["Power BI", "DAX", "SQL", "Excel"],
    features: [
      "Interactive sales performance metrics",
      "Top-selling products analysis",
      "Customer behavior insights",
      "Revenue trend visualization",
      "Regional performance comparison"
    ],
    challenges: "Managing large datasets and creating responsive visualizations while maintaining fast query performance.",
    outcomes: "Enabled stakeholders to make data-driven decisions, resulting in 15% improvement in product inventory management.",
    githubUrl: "https://github.com/abdulzuhail/Amazon-Products",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Automated Misinformation Detection Pipeline",
    category: "Machine Learning",
    description: "End-to-end pipeline using KNIME, Python, and RoBERTa transformer models to detect and classify misinformation in real-time.",
    longDescription: "Developed a comprehensive misinformation detection system leveraging KNIME Analytics Platform and transformer-based AI models. The pipeline processes text data, performs sentiment analysis, and classifies content reliability using state-of-the-art NLP techniques.",
    technologies: ["Python", "KNIME", "RoBERTa", "Transformers", "NLP"],
    features: [
      "Real-time text processing",
      "RoBERTa-based classification",
      "Automated pipeline orchestration",
      "Performance monitoring",
      "Scalable architecture"
    ],
    challenges: "Handling diverse text formats and ensuring model accuracy across different content types and languages.",
    outcomes: "Achieved 92% accuracy in misinformation detection with sub-second response times for real-time analysis.",
    githubUrl: "https://github.com/abdulzuhail/Automated-Misinformation-Detection-Pipeline",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Blinkit Market Analysis Suite",
    category: "Data Analytics",
    description: "Dual-approach analysis using both Power BI and Python to analyze Blinkit's product ecosystem, pricing strategies, and market trends.",
    longDescription: "Comprehensive analysis of Blinkit's marketplace data using both Power BI for interactive visualizations and Python for deep statistical analysis. The project uncovers insights about product availability, pricing optimization, and category performance.",
    technologies: ["Python", "Power BI", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Interactive Power BI dashboards",
      "Python-based statistical analysis",
      "Product availability tracking",
      "Pricing trend analysis",
      "Category performance metrics"
    ],
    challenges: "Integrating data from multiple sources and ensuring consistency between Power BI and Python analysis results.",
    outcomes: "Identified key pricing patterns and inventory optimization opportunities, providing actionable insights for business strategy.",
    githubUrl: "https://github.com/abdulzuhail/Blinkit-Analysis-using-Power-BI",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Hyper-Personalized Recommendation Engine",
    category: "AI/ML",
    description: "Advanced product recommendation system incorporating emotion detection from customer reviews and behavioral analysis.",
    longDescription: "Innovative recommendation engine that goes beyond traditional collaborative filtering by incorporating emotional intelligence. The system analyzes customer emotions from text reviews and combines this with behavioral data to provide highly personalized product recommendations.",
    technologies: ["Python", "NLP", "Emotion Detection", "Recommendation Systems", "Machine Learning"],
    features: [
      "Emotion detection from reviews",
      "Behavioral pattern analysis",
      "Real-time recommendations",
      "Personalization algorithms",
      "Performance optimization"
    ],
    challenges: "Balancing recommendation accuracy with computational efficiency while processing emotional context from unstructured text data.",
    outcomes: "Improved recommendation relevance by 28% compared to traditional methods, leading to higher user engagement.",
    githubUrl: "https://github.com/abdulzuhail/Hyper-Personalized-Product-Recommendation-Engine-with-Emotion-Detection",
    liveUrl: "#",
    image: "/api/placeholder/600/400"
  }
];

export const experience = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 - Jun 2024",
    location: "Remote",
    description: "Worked on multiple data science projects involving network optimization, fraud detection, and smart systems analysis.",
    responsibilities: [
      "Developed machine learning models for fraud detection",
      "Analyzed network optimization datasets",
      "Created interactive dashboards for stakeholder reporting",
      "Collaborated with cross-functional teams on renewable energy projects"
    ],
    achievements: [
      "Improved fraud detection accuracy by 15%",
      "Reduced data processing time by 30%",
      "Delivered 5+ analytical reports to senior management"
    ]
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Research Lab",
    period: "Aug 2023 - Dec 2023",
    location: "Gudalur",
    description: "Conducted research on machine learning applications in data analysis and contributed to academic publications.",
    responsibilities: [
      "Literature review on ML algorithms",
      "Data collection and preprocessing",
      "Statistical analysis and hypothesis testing",
      "Research paper writing and presentation"
    ],
    achievements: [
      "Co-authored 2 research papers",
      "Presented findings at university symposium",
      "Developed novel data preprocessing techniques"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Research Supervisor",
    company: "University Research Lab",
    content: "Abdul Zuhail demonstrated exceptional analytical skills and attention to detail throughout his research work. His ability to translate complex data into meaningful insights is impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Senior Data Analyst",
    company: "Tech Solutions Inc.",
    content: "Working with Abdul was a pleasure. His technical expertise in Python and Power BI, combined with his problem-solving approach, made him a valuable team member during his internship.",
    rating: 5
  },
  {
    id: 3,
    name: "Prof. Michael Chen",
    position: "Head of Department",
    company: "Computer Science Department",
    content: "Abdul's project work on misinformation detection showcased his deep understanding of NLP and machine learning. His innovative approach to solving real-world problems is commendable.",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Real-Time Data Analytics",
    excerpt: "Exploring how real-time analytics is transforming business decision-making and the technologies driving this revolution.",
    date: "2024-07-15",
    readTime: "5 min read",
    category: "Data Analytics",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Building Effective ML Pipelines with Python",
    excerpt: "A comprehensive guide to creating robust machine learning pipelines that scale with your data and business needs.",
    date: "2024-06-28",
    readTime: "8 min read",
    category: "Machine Learning",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Power BI vs Tableau: A Data Analyst's Perspective",
    excerpt: "Comparing two leading visualization tools and helping you choose the right one for your data visualization needs.",
    date: "2024-06-10",
    readTime: "6 min read",
    category: "Data Visualization",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Understanding NLP in Misinformation Detection",
    excerpt: "Deep dive into natural language processing techniques used for identifying and classifying misinformation online.",
    date: "2024-05-22",
    readTime: "10 min read",
    category: "NLP",
    image: "/api/placeholder/400/250"
  }
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
];