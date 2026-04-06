export const siteConfig = {
  name: "Aarav Kalkar",
  title: "Data Science Graduate Student",
  tagline:
    "Applied machine learning researcher building reliable data products, interpretable models, and decision-focused analytics.",
  description:
    "Data Science graduate student at the University of Minnesota with expertise in machine learning, statistical modeling, and data analytics.",
  accentColor: "#0f766e",
  siteUrl: "https://aarav2703.github.io",
  profileImage: "/images/photo.jpeg",
  resumeUrl: "/resume/Aarav_Kalkar_Resume.pdf",
  twitterHandle: "@aaravkalkar",
  social: {
    email: "kalka046@umn.edu",
    linkedin: "https://www.linkedin.com/in/aaravkalkar/",
    github: "https://github.com/aarav2703/",
  },
  aboutMe:
    "M.S. Data Science graduate student at the University of Minnesota with a Computer Science background and experience in applied machine learning, statistical modeling, and large-scale data analysis. Currently working as a Graduate Research Assistant across healthcare, education, and art analytics, building predictive models, data pipelines, and interpretable analytics to support real-world decision-making.",
  skills: [
    "Python",
    "SQL",
    "R",
    "PySpark",
    "Linux",
    "scikit-learn",
    "statsmodels",
    "XGBoost",
    "LightGBM",
    "Survival Analysis",
    "NLP",
    "RAG",
    "LLM Inference",
    "Pandas",
    "NumPy",
    "Spark",
    "FastAPI",
    "ETL Pipelines",
    "Relational Databases",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Streamlit",
    "D3.js",
    "SvelteKit",
    "Git",
    "Tableau",
    "Power BI",
    "AWS",
  ],
  projects: [
    {
      name: "Autonomous Multi-hop Research Agent",
      description:
        "Built an end-to-end HotpotQA system over 90K+ queries using FAISS + BM25 hybrid retrieval, a LangGraph evidence pipeline, grounded generation, citation validation, and an interpretability dashboard for workflow tracing.",
      link: "https://github.com/aarav2703/Autonomous-Research/tree/main",
      skills: ["LangGraph", "FAISS", "BM25", "React", "FastAPI"],
    },
    {
      name: "Taxi Demand Forecasting",
      description:
        "Developed a spatio-temporal forecasting workflow over 47M+ NYC taxi trips with leakage-safe features, XGBoost forecasting, hotspot detection, and a React + D3 geospatial decision dashboard.",
      link: "https://github.com/aarav2703/Taxi_NYC_pySpark_prediction/blob/main/README.md",
      skills: ["XGBoost", "Time Series", "PySpark", "React", "D3.js"],
    },
    {
      name: "ChurnXGB",
      description:
        "Created a leakage-safe retention modeling system with calibrated churn models, budget-aware targeting policies, drift monitoring, backtesting, and a FastAPI + React decision dashboard.",
      link: "https://github.com/aarav2703/churnXGB_prod",
      skills: ["LightGBM", "XGBoost", "FastAPI", "React", "MLOps"],
    },
    {
      name: "PaperMind",
      description:
        "Developed a scientific literature retrieval pipeline that combines graph traversal, FAISS semantic search, and transformer reranking to return provenance-preserving arXiv paper recommendations.",
      link: "https://github.com/aarav2703/paperMind",
      skills: ["Python", "FAISS", "Transformers", "Information Retrieval"],
    },
    {
      name: "Distributed Product Analytics Platform",
      description:
        "Built a PySpark lakehouse analytics stack over 67M+ e-commerce events with sessionization, DuckDB marts, A/B testing workflows, purchase prediction, and a Streamlit dashboard for experiment insights.",
      link: "https://github.com/aarav2703/distri_pyspark",
      skills: ["PySpark", "DuckDB", "Parquet", "A/B Testing", "Streamlit"],
    },
    {
      name: "PMC_GraphRAG",
      description:
        "Built a biomedical retrieval system over 1,000+ PMC articles by combining a UMLS-grounded knowledge graph with FAISS search for multi-hop evidence retrieval and citation-level provenance.",
      link: "https://github.com/aarav2703/graph_rag",
      skills: ["GraphRAG", "UMLS", "FAISS", "NetworkX", "Biomedical NLP"],
    },
    {
      name: "AutoParse",
      description:
        "Designed a multi-stage receipt understanding pipeline using CRAFT detection, TrOCR recognition, and LLM-based structuring, reaching 95% structured field coverage with high-throughput inference.",
      link: "https://github.com/aarav2703/Smart-Bill-Split",
      skills: ["OCR", "TrOCR", "LLMs", "Computer Vision"],
    },
    {
      name: "RAGcite",
      description:
        "Built a retrieval-augmented research assistant that recommends arXiv papers from thesis abstracts and drafts personalized outreach emails using semantic search and large language models.",
      link: "https://github.com/aarav2703/RAGcite/tree/main",
      skills: ["SentenceTransformers", "FAISS", "Streamlit", "LLMs"],
    },
    {
      name: "Hospital Forecast",
      description:
        "Built a hybrid hospital forecasting pipeline that combines LightGBM with ETS models to reduce extreme forecast error and improve performance across heterogeneous facility volatility profiles.",
      link: "https://github.com/aarav2703/Hybrid-Hospital-Forecasting",
      skills: ["LightGBM", "ETS", "SHAP", "Forecasting"],
    },
  ],
  experience: [
    {
      company: "University of Minnesota · Predictive Education Analytics",
      title: "Graduate Research Assistant (Applied Data Science)",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Built regression and classification models on 125,000+ longitudinal K-12 records spanning more than 12 years.",
        "Forecasted GPA and chronic absenteeism risk using predictive modeling pipelines aligned to district use cases.",
        "Integrated FastBridge and MCA data into modular Python workflows used across 50+ schools.",
      ],
    },
    {
      company: "University of Minnesota · Healthcare Risk Modeling",
      title: "Graduate Research Assistant (Applied Data Science)",
      dateRange: "May 2025 - Dec 2025",
      bullets: [
        "Developed predictive risk models across 100+ ICD-10 diagnoses by combining clinical variables with census-tract socioeconomic indicators.",
        "Trained and tuned XGBoost classifiers with 5-fold cross-validation, ROC-AUC evaluation, and survival analysis extensions.",
        "Built a SvelteKit + D3 geospatial dashboard with privacy-preserving rendering and 40+ county-level overlays for stakeholder reporting.",
      ],
    },
    {
      company: "University of Minnesota · Art Education Survey & Museum Data Engineering",
      title: "Graduate Research Assistant (Applied Data Science)",
      dateRange: "Sep 2024 - May 2025",
      bullets: [
        "Standardized and analyzed six years of longitudinal art education survey data covering 8,000+ participants.",
        "Built ordinal and logistic regression models to quantify engagement and demographic trends across years.",
        "Engineered SQL master datasets spanning museum collections from 50K to 1.5M records and developed donation-likelihood modeling workflows.",
      ],
    },
  ],
  education: [
    {
      school: "University of Minnesota",
      degree: "Master of Science in Data Science",
      dateRange: "2024 - Present",
      achievements: [
        "Currently pursuing the degree in Minneapolis-St. Paul, Minnesota.",
        "Focused on applied machine learning, statistical modeling, and large-scale data analysis.",
      ],
    },
    {
      school: "SRM Institute of Science and Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      dateRange: "Sep 2020 - Jun 2024",
      achievements: [
        "Graduated with a GPA of 9.01 / 10.",
        "Completed undergraduate studies in Chennai, India.",
      ],
    },
  ],
};
