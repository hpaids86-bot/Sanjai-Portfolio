export const portfolioData = {
  personal: {
    name: "Sanjai R",
    role: "AI & Data Science Student",
    tagline: "Data Science | AI/ML | Data Analysis | AI-Assisted Development | Software Engineering",
    heroHeading: "Building intelligent solutions with data, AI and technology.",
    heroDescription: "AI & Data Science student skilled in Python, Data Analysis, and AI-assisted product development.",
    badge: "AI & DATA SCIENCE",
    location: "Tamil Nadu, India",
    phone: "8667537293",
    email: "09.sanjai.09@gmail.com",
    github: "https://github.com/18-Sanjai",
    linkedin: "https://www.linkedin.com/in/sanjai-r-b83896328",
    resumeUrl: "/resume.pdf",
    profileImage: "/images/profile.png",
  },
  
  about: {
    title: "About Me",
    headline: "Transforming complex datasets into predictive intelligence and scalable systems.",
    bio: [
      "I am a B.Tech Artificial Intelligence and Data Science student at V.S.B College of Engineering and Technical Campus, Tamil Nadu.",
      "My technical focus spans statistical computing, exploratory data analysis, and AI-assisted product engineering. I enjoy taking raw analytical problems from ingestion through predictive modeling to actionable decision frameworks.",
      "With hands-on experience directing AI-powered predictive web applications and designing interactive business intelligence reports, I strive to build reliable, data-driven systems."
    ],
    stats: [
      {
        label: "B.Tech CGPA",
        value: "8.01",
        unit: "/ 10",
        description: "AI & Data Science"
      },
      {
        label: "Higher Secondary",
        value: "84.6%",
        unit: "",
        description: "Annai Matriculation Hr. Sec."
      },
      {
        label: "Graduation",
        value: "2027",
        unit: "",
        description: "Expected B.Tech Completion"
      }
    ],
    focusAreas: [
      "Data Science & Statistical Analysis",
      "AI/ML & Predictive Modeling",
      "AI-Assisted Product Engineering",
      "System Design & Architecture",
      "Interactive BI Dashboards & Reporting",
      "Algorithmic Problem Solving"
    ]
  },

  dataJourney: {
    title: "From Data to Decisions",
    subtitle: "A systematic 5-stage framework bridging raw information with automated intelligence and high-conviction decisions.",
    steps: [
      {
        number: "01",
        title: "DATA",
        category: "Ingestion & Prep",
        desc: "Aggregating multi-source structured and unstructured data, cleaning anomalies, and establishing normalized schemas.",
        badge: "Source Layer"
      },
      {
        number: "02",
        title: "ANALYSIS",
        category: "Statistical Evaluation",
        desc: "Executing exploratory data analysis (EDA), hypothesis testing, distribution curves, and correlation analysis.",
        badge: "Exploration"
      },
      {
        number: "03",
        title: "INSIGHT",
        category: "Signal Extraction",
        desc: "Uncovering behavioral cohorts, purchase patterns, churn factors, and critical statistical markers.",
        badge: "Synthesis"
      },
      {
        number: "04",
        title: "AI",
        category: "Machine Intelligence",
        desc: "Deploying predictive risk engines, prompt architectures, and Google Gemini multimodal reasoning workflows.",
        badge: "Inference"
      },
      {
        number: "05",
        title: "DECISION",
        category: "Actionable Impact",
        desc: "Delivering real-time risk scores, interactive Power BI KPI dashboards, and automated executive triggers.",
        badge: "Outcome"
      }
    ]
  },

  skills: {
    programming: [
      { name: "Python", level: "Core", desc: "Data structures, manipulation, scripts, automation" },
      { name: "SQL", level: "Core", desc: "Complex queries, joins, aggregations, schema design" }
    ],
    dataScience: [
      { name: "Data Analysis", level: "Advanced", desc: "Exploratory data analysis (EDA), anomaly detection" },
      { name: "Statistical Analysis", level: "Proficient", desc: "Hypothesis testing, probability, correlation" },
      { name: "Data Visualization", level: "Advanced", desc: "Visual storytelling, trend discovery, charts" }
    ],
    aiDevelopment: [
      { name: "Prompt Engineering", level: "Advanced", desc: "Structured output design, few-shot prompting" },
      { name: "Generative AI", level: "Proficient", desc: "LLM integration, AI-assisted workflows" },
      { name: "Google Gemini", level: "Proficient", desc: "Multimodal AI assistance & synthesis" },
      { name: "System Design & Architecture", level: "Foundational", desc: "Modular pipelines, schema design, data flows" }
    ],
    visualization: [
      { name: "Power BI", level: "Proficient", desc: "Interactive dashboards, DAX metrics, visual reports" },
      { name: "Excel", level: "Advanced", desc: "Pivot tables, formula modeling, structured analysis" },
      { name: "Dashboard Reporting", level: "Proficient", desc: "Stakeholder KPIs, telemetry tracking" }
    ],
    databasesCloud: [
      { name: "MySQL", level: "Proficient", desc: "Relational modeling, constraint enforcement" },
      { name: "NoSQL Concepts", level: "Foundational", desc: "Document stores & flexible schemas" },
      { name: "Cloud Computing", level: "Foundational", desc: "Cloud deployment, virtualization foundations" }
    ]
  },

  projects: [
    {
      id: "prijsm-engine-v5",
      number: "01",
      title: "PRIJSM Engine V5",
      category: "AI / Predictive Analytics / Full Stack",
      liveUrl: "https://ais-pre-lh2rlxwuepqglq5edtycyn-881870693635.asia-east1.run.app",
      githubUrl: null,
      description: "An AI-powered predictive web application designed to score customer return risk in real time.",
      highlights: [
        "End-to-end full-stack AI-powered predictive web application",
        "Generative AI / Google Gemini assisted development",
        "System architecture & database schema",
        "Automated reporting workflow",
        "Real-time customer return-risk scoring",
        "Production deployment on Cloud Infrastructure"
      ],
      tags: ["Python", "Google Gemini", "Predictive Analytics", "Full Stack", "System Design", "Cloud Deployment"],
      visualType: "prijsm"
    },
    {
      id: "starbucks-survey-analysis",
      number: "02",
      title: "Starbucks Customer Survey Report Analysis",
      category: "Data Analytics / Power BI",
      liveUrl: null,
      githubUrl: null,
      badgeText: "Power BI Analytics Project",
      description: "An interactive Power BI analysis of Starbucks customer survey data focused on satisfaction, purchasing behaviour and brand loyalty.",
      highlights: [
        "Customer survey analysis",
        "Data-driven insights to uncover retention drivers",
        "Satisfaction analysis across customer cohorts",
        "Purchasing behaviour and visit patterns",
        "Brand loyalty and customer sentiment indicators",
        "Interactive Power BI dashboards"
      ],
      tags: ["Power BI", "Data Analysis", "Customer Analytics", "Excel", "Data Visualization"],
      visualType: "starbucks"
    }
  ],

  experience: [
    {
      role: "Data Science & Analytics Intern",
      company: "Tamizhan Skills",
      period: "Aug 2025 – Sep 2025",
      badge: "Internship",
      description: "Completed a self-paced Data Science & Analytics internship covering Python, statistics, and data visualization fundamentals.",
      responsibilities: [
        "Python programming and script automation for data processing.",
        "Statistical analysis and exploratory data evaluation.",
        "Data visualization and insight reporting across datasets.",
        "Data cleaning and dataset preparation.",
        "Predictive modeling and end-to-end data science workflows."
      ],
      skillsGained: ["Python", "Statistics", "Data Cleaning", "Exploratory Analysis", "Predictive Modeling", "Data Visualization"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "V.S.B College of Engineering and Technical Campus, Tamil Nadu",
      duration: "Expected May 2027",
      grade: "CGPA: 8.01 / 10",
      status: "In Progress",
      highlights: [
        "Comprehensive training in Artificial Intelligence, Machine Learning, and Data Science.",
        "Core study in Statistical Methods, Data Structures, Relational Databases, and Cloud Fundamentals.",
        "Practical engineering of predictive models and analytical dashboard systems."
      ]
    },
    {
      degree: "Higher Secondary Education",
      field: "Science & Mathematics",
      institution: "Annai Matriculation Hr. Sec. School, Tirupur",
      duration: "Completed April 2023",
      grade: "Score: 84.6%",
      status: "Completed",
      highlights: [
        "Rigorous foundation in Mathematics, Physics, Chemistry, and Computer Science.",
        "Graduated with distinction (84.6%)."
      ]
    }
  ],

  certifications: [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      category: "Cloud Infrastructure",
      description: "Core curriculum in cloud architecture, virtualization, distributed systems, and scalable storage."
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      category: "NLP & AI",
      description: "Text processing, tokenization, language models, sentiment classification, and semantic analysis."
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys Springboard",
      category: "Generative AI",
      description: "Prompt optimization techniques, structured LLM outputs, few-shot prompting, and generative workflows."
    }
  ],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Data Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ]
};
