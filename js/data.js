// js/data.js - Complete Data Model for RVAKR Portfolio
export const PROFILE = {
  name: "RVAKR",
  fullName: "Reddy Veera Akhil Kumar Reddy Boreddy",
  tagline: "Senior Data Platform Engineer | 100+ TB Scale · 5M+ Tables · Multi-Cluster Lakehouses",
  bio: "Senior Data Platform Engineer with 6+ years of experience specialized in handling 100+ TB data systems with over 5 million tables (built to scale to 10M). Proven track record of templating ~70% of scripts via metadata-driven automation (~95% code reduction), managing high-throughput multi-cluster distributed architectures (AWS, Databricks, Azure, GCP), real-time calculation microservices (FastAPI/Lambda), and enterprise AI-ready pipelines. Recognized by client leadership as 'Lone Wolf' for rapid platform delivery.",
  location: "Andhra Pradesh, India (Global / Remote)",
  email: "brvakhilkumarreddy@gmail.com",
  secondaryEmail: "contactmail.br@gmail.com",
  status: "Available for Senior / Lead Roles, Freelance & Platform Advisory",
  avatar: "images/rvakr.png",
  stats: [
    { label: "Production Experience", value: "6+ Years", icon: "fas fa-calendar-check" },
    { label: "Data Volume & Scale", value: "100+ TB · 5M+ Tables", icon: "fas fa-database" },
    { label: "Metadata Automation", value: "70% Templated", icon: "fas fa-cubes-stacked" },
    { label: "Distributed Systems", value: "Multi-Cluster", icon: "fas fa-network-wired" }
  ]
};

export const RECOGNITIONS_DATA = [
  {
    title: "“Lone Wolf” Title",
    organization: "Conferred by Client Leadership",
    badge: "From Client",
    icon: "fas fa-award",
    color: "var(--primary)",
    desc: "Title conferred directly by client leadership for designing, building, and delivering a complete production-grade data platform in record time."
  },
  {
    title: "“On the Spot” Recognition",
    organization: "Conferred by Senior Management",
    badge: "From Senior Management",
    icon: "fas fa-trophy",
    color: "var(--secondary)",
    desc: "Recognized by senior management for rapid resolution of critical production pipelines and implementing automated multi-region AWS Glue ingestion across US, UK, and Japan."
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Data Platform Engineer",
    company: "Softcrylic",
    period: "Apr 2025 – Present",
    location: "Remote / Hybrid",
    stack: ["Databricks", "Fivetran", "S3 Auto Loader", "Lakebase", "Delta Sharing", "Apache Spark", "Python", "Claude Code"],
    highlights: [
      "Designed and delivered an enterprise multi-cluster Lakehouse platform handling 100+ TB across 5+ million tables (built to scale to 10M) with automated failover and row-level data security.",
      "Worked directly with client technical management, PMO, and product owners; built POC, demoed to leadership, trained engineering teams, and drove 100% implementation.",
      "Automated ingestion into bronze layer using Fivetran and S3 Auto Loader; built high-performance bronze-to-silver deduplication and unification pipelines.",
      "Engineered gold layer and data marts serving premium customers with hourly refreshes, and standard customers with daily/weekly schedules.",
      "Built a custom Lakebase web application that controls data pipelines, orchestration configs, logs, and data masking via a central control database.",
      "Led migrations to Databricks from Snowflake, PostgreSQL, S3/Athena, and Hadoop-based clusters."
    ]
  },
  {
    role: "Senior Data Engineer",
    company: "Bolt Tech",
    period: "Jan 2023 – Apr 2025",
    location: "Hybrid",
    stack: ["Azure Databricks", "Scala", "Spark SQL", "AWS DynamoDB", "API Gateway", "AWS Lambda", "Apache Airflow", "Terraform"],
    highlights: [
      "Migrated legacy Scala pipelines from Hadoop and AWS EMR to Azure Databricks multi-cluster environments.",
      "Architected metadata-driven frameworks that templated ~70% of scripts, replacing 2,000+ lines of redundant code with ~100 lines of config across 22 customers and 400+ silver tables (~95% code reduction, +40% team delivery speed).",
      "Built a real-time quoting API engine on AWS DynamoDB, API Gateway, and Lambda calculating multi-vendor quotes refreshed every ~30 minutes.",
      "Architected a historical data versioning model storing latest state in DynamoDB/APIs and historic audits in Delta Sharing tables.",
      "Automated DAG orchestration with Apache Airflow, automated data quality gates, and built robust GitHub Actions CI/CD workflows."
    ]
  },
  {
    role: "Data Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Sep 2021 – Jan 2023",
    location: "India",
    stack: ["AWS Glue", "Amazon S3", "Salesforce", "Oracle", "AWS Lambda", "Apache Airflow", "Python", "Amazon Redshift"],
    highlights: [
      "Built a metadata-driven JSON schema data processing framework where onboarding a new table requires config rather than code.",
      "Automated ingestion of 600+ tables across US, UK, and Japan from a single reusable AWS Glue script (80% code reusability).",
      "Automated zero-touch ingestion from Salesforce CRM and Oracle ERP directly into S3 data lakes.",
      "Implemented row-level data access policies and authored technical architecture blueprints and impact analysis documents."
    ]
  },
  {
    role: "Graduate Engineer Trainee (GET)",
    company: "TRIO Vision Composite Technology",
    period: "Jul 2020 – Sep 2021",
    location: "India",
    stack: ["Web Development", "Data Processing", "Inventory Management", "Google Sheets API", "Automation"],
    highlights: [
      "Developed web applications to process, validate, and store manufacturing production records in a centralized store.",
      "Replaced manual data reporting with automated Excel/CSV pipelines for executive production planning.",
      "Maintained corporate web properties and system integrations."
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "B.Tech in Mechanical Engineering",
  field: "Mechanical Engineering Graduate",
  period: "2016 – 2020"
};

export const SERVICES_DATA = [
  {
    id: "data-engineering",
    title: "1. Data Engineering & Lakehouse Solutions",
    icon: "fas fa-database",
    badge: "Anything Data",
    color: "var(--primary)",
    desc: "Complete end-to-end data architecture. Designing Medallion Lakehouses (Databricks, Delta Lake, Delta Sharing), real-time & batch ETL/ELT pipelines, distributed PySpark/Scala computing, and high-performance SQL data warehouses.",
    deliverables: ["End-to-End ETL / ELT Pipelines", "Databricks Lakehouse & Delta Sharing", "Automated S3 Auto Loader & Fivetran Ingestion", "Query, Cluster & Memory Optimization"]
  },
  {
    id: "platform-engineering",
    title: "2. Platform Engineering (Scratch to Scale)",
    icon: "fas fa-server",
    badge: "Multi-Cloud Platforms",
    color: "var(--secondary)",
    desc: "Architecting enterprise data platforms handling 100+ TB data systems with over 5M+ tables. Multi-cluster expertise across AWS, Azure, GCP, and Databricks with ~70% script templating via metadata frameworks (~95% less code), and Terraform IaC.",
    deliverables: ["Platforms Handling 100+ TB · 5M+ Tables", "70% Script Templating (95% Less Code)", "Multi-Cluster & Multi-Cloud Architecture", "Disaster Recovery & Multi-Region Setup"]
  },
  {
    id: "microservices",
    title: "3. Microservices & API Development",
    icon: "fas fa-cubes-stacked",
    badge: "FastAPI, Flask & Lambda",
    color: "var(--accent)",
    desc: "High-concurrency microservices and real-time calculation engines built with FastAPI, Flask, AWS Lambda, API Gateway, and Docker. Low-latency REST endpoints with central control database logging.",
    deliverables: ["FastAPI & Flask REST Microservices", "Serverless AWS Lambda & API Gateway", "Central Control Databases & Data Masking", "Docker & Kubernetes Containerization"]
  },
  {
    id: "ai-systems",
    title: "4. AI-Ready Systems & AI Development",
    icon: "fas fa-brain",
    badge: "AI Readiness & GenAI",
    color: "var(--success)",
    desc: "Transforming enterprise data warehouses into AI-Ready Systems. Implementing vector stores (Pinecone, ChromaDB, pgvector), custom RAG pipelines, LLM agent integration, and AI data curation.",
    deliverables: ["AI Readiness & Vector Embeddings", "Enterprise RAG Architectures", "LLM API Integrations (Claude, OpenAI)", "Automated AI Pipeline Curation"]
  }
];

export const SKILLS_DATA = [
  { id: "aws", name: "AWS Cloud Ecosystem", rating: 10, category: "Cloud Platform", icon: "fab fa-aws", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "AWS Certified Data Engineer Associate: S3, Glue, Redshift, Lambda, EMR, Athena, API Gateway, DynamoDB, IAM, KMS, multi-region ingestion." },
  { id: "databricks", name: "Databricks Lakehouse", rating: 10, category: "Lakehouse Platform", icon: "fas fa-cubes", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Enterprise Lakehouse: Unity Catalog, Delta Lake, Delta Sharing, Lakebase control apps, Auto Loader, Medallion architecture, 100+ TB and 5M+ tables scale." },
  { id: "spark", name: "Apache Spark & Scala", rating: 9, category: "Distributed Computing", icon: "fas fa-bolt", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "PySpark & Scala distributed computing, DataFrames, structured streaming, memory tuning, partition optimization, bronze-to-silver deduplication." },
  { id: "python", name: "Python & Packages", rating: 10, category: "Programming", icon: "fab fa-python", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Core Python development, custom PyPI packages (pyconnector), OOP, async I/O, Pydantic validation, pipeline automation, and data utilities." },
  { id: "sql", name: "SQL & Data Modeling", rating: 10, category: "Database & Modeling", icon: "fas fa-database", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Expert SQL, Snowflake, Redshift, PostgreSQL, Oracle, dimensional modeling, row-level security (RLS), data masking, CTEs, and window functions." },
  { id: "fastapi", name: "FastAPI & Microservices", rating: 9, category: "Microservices & APIs", icon: "fas fa-rocket", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "High-performance Python microservices, real-time quoting engines, AWS Lambda + API Gateway, Swagger / OpenAPI, and Streamlit." },
  { id: "gcp-azure", name: "Azure & Google Cloud", rating: 8, category: "Multi-Cloud", icon: "fas fa-cloud", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Azure Databricks, Azure Data Factory, ADLS Gen2, Google BigQuery, Dataproc, and Cloud Storage for multi-cloud enterprise architectures." },
  { id: "airflow", name: "Airflow & Orchestration", rating: 9, category: "Orchestration", icon: "fas fa-wind", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Automated DAG orchestration, Apache Airflow / MWAA, metadata-driven execution (~95% code reduction), automated quality gates, and alerting." },
  { id: "devops", name: "DevOps, Docker & IaC", rating: 9, category: "DevOps & IaC", icon: "fab fa-docker", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Docker containerization, Kubernetes, GitHub Actions CI/CD automation, Terraform IaC, Linux shell scripting, and disaster recovery." },
  { id: "ai-rag", name: "AI, GenAI & RAG", rating: 9, category: "AI Engineering", icon: "fas fa-brain", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Enterprise RAG pipelines, vector stores (Pinecone, ChromaDB, pgvector), LLM agent workflows (Claude Code, OpenAI), embeddings, and AI data curation." },
  { id: "ingestion", name: "Automated Ingestion", rating: 10, category: "Data Ingestion", icon: "fas fa-stream", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Automated ingestion via Fivetran, S3 Auto Loader, Kafka streaming, and global multi-region data ingestion (600+ tables across US, UK, JP)." },
  { id: "governance", name: "Governance & Security", rating: 9, category: "Security & Governance", icon: "fas fa-shield-alt", colors: ["#00f3ff", "#bc13fe", "#ff0055"], description: "Unity Catalog fine-grained access, Delta Sharing, enterprise disaster recovery, row-level security (RLS), and dynamic data masking." }
];

export const PROJECTS_DATA = [
  { 
    id: "pyconnector", 
    title: "pyconnector (PyPI Library)", 
    category: "Open Source Python Package", 
    description: "Published Python library simplifying multi-database and service connectivity across Databricks, PostgreSQL, MySQL, SMTP, and SFTP with zero boilerplate.", 
    media: "", 
    badge: "PyPI Package",
    link: "https://pypi.org/project/pyconnector/", 
    source: "https://github.com/rvakr/pyconnector" 
  },
  { 
    id: "choicebase", 
    title: "ChoiceBase Community Hub", 
    category: "Web Platform", 
    description: "Free community platform for courses, developer tools, and tech jobs, built as a zero-cost static web application hosted on GitHub Pages.", 
    media: "project_choicebase.png", 
    badge: "Open Source",
    link: "https://choicebase.github.io/", 
    source: "https://github.com/choicebase/choicebase.github.io" 
  },
  { 
    id: "lakebase-platform", 
    title: "Lakebase Multi-Tenant Control App", 
    category: "Enterprise Platform", 
    description: "Web application controlling end-to-end data flow, ingestion schedules, and central control database logging for multi-tenant lakehouse architectures.", 
    media: "", 
    badge: "Enterprise Scale",
    link: "pages/projects.html", 
    source: "https://github.com/RVAKR" 
  },
  { 
    id: "metadata-engine", 
    title: "Metadata-Driven Ingestion Engine", 
    category: "Data Architecture", 
    description: "JSON schema-driven AWS Glue ingestion system managing 600+ tables across US, UK, and Japan with 80% reusable pipeline code.", 
    media: "", 
    badge: "600+ Tables",
    link: "pages/projects.html", 
    source: "https://github.com/RVAKR" 
  }
];

export const CONTRIBUTIONS_DATA = [
  { platform: "Databricks Community", link: "https://community.databricks.com/t5/user/viewprofilepage/user-id/119159", rating: 10, type: "Platform Architecture", description: "Authored solutions for Delta Lake optimization, Spark memory tuning, and cluster cost reduction." },
  { platform: "HackerRank", link: "https://www.hackerrank.com/profile/rvakr", rating: 9, type: "Algorithmic SQL", description: "Ranked in top percentiles for complex SQL querying, indexing, and optimization challenges." },
  { platform: "PyPI Open Source", link: "https://pypi.org/project/pyconnector/", rating: 9, type: "Package Maintainer", description: "Author and maintainer of pyconnector library used for unified database connections in production pipelines." }
];

export const CERTIFICATIONS_DATA = [
  { 
    id: "aws-data-engineer", 
    title: "AWS Certified Data Engineer - Associate", 
    issuer: "Amazon Web Services (AWS)", 
    rating: 10, 
    date: "2025-11-09", 
    category: "Cloud & Data", 
    type: "badge", 
    verified: true, 
    badgeImage: "../images/licensed/aws-certified-data-engineer-associate.png", 
    image: "../images/licensed/AWS Certified Data Engineer - Associate certificate.pdf", 
    credlyLink: "https://www.credly.com/users/reddyveeraakhilkumarreddy.boreddy",
    description: "Industry-standard certification validating mastery in AWS data architecture, ingestion, transformation, pipeline security, and storage optimization." 
  },
  { 
    id: "databricks-associate", 
    title: "Databricks Certified Associate Developer", 
    issuer: "Databricks", 
    rating: 10, 
    date: "2026-01-18", 
    category: "Big Data & Platform", 
    type: "certificate", 
    verified: true, 
    image: "../images/certificates/1365_3_823348_1768750382_Databricks - Generic.pdf", 
    description: "Certified in Apache Spark architecture, DataFrame transformations, Delta Lake, and distributed big data computations at enterprise scale." 
  },

  { 
    id: "spark-training", 
    title: "Apache Spark Essential Training", 
    issuer: "LinkedIn Learning", 
    rating: 8, 
    date: "2023-04-17", 
    category: "Big Data", 
    type: "certificate", 
    verified: true, 
    image: "../images/certificates/CertificateOfCompletion_Apache Spark Essential Training Big Data Engineering.pdf", 
    description: "Spark distributed architecture, DataFrame optimizations, and structured streaming pipelines." 
  },
  { 
    id: "genai-leaders", 
    title: "Generative AI for Business Leaders", 
    issuer: "LinkedIn Learning", 
    rating: 8, 
    date: "2023-04-20", 
    category: "AI & GenAI", 
    type: "certificate", 
    verified: true, 
    image: "../images/certificates/CertificateOfCompletion_Generative AI for Business Leaders.pdf", 
    description: "Architectural foundations of LLMs, vector search, RAG pipelines, and enterprise AI readiness." 
  }
];

export const SOCIALS_DATA = [
  // Professional & Verified Networks
  { 
    platform: "LinkedIn", 
    category: "professional", 
    url: "https://www.linkedin.com/in/rvakr", 
    icon: "fab fa-linkedin-in", 
    cls: "linkedin", 
    handle: "in/rvakr",
    badge: "Verified Network",
    action: "Connect & Follow", 
    description: "Professional updates, platform architecture insights, and direct messaging." 
  },
  { 
    platform: "GitHub", 
    category: "professional", 
    url: "https://github.com/RVAKR", 
    icon: "fab fa-github", 
    cls: "github", 
    handle: "@RVAKR",
    badge: "Open Source Hub",
    action: "Follow & Star", 
    description: "Source code, data engineering repositories, pyconnector, and open source tools." 
  },
  { 
    platform: "Credly", 
    category: "professional", 
    url: "https://www.credly.com/users/reddyveeraakhilkumarreddy.boreddy", 
    icon: "fas fa-certificate", 
    cls: "credly", 
    handle: "reddyveeraakhilkumarreddy",
    badge: "Verified Badges",
    action: "Badges", 
    description: "Official AWS Certified Data Engineer & Databricks verified credentials." 
  },
  { 
    platform: "Databricks Community", 
    category: "engineering", 
    url: "https://community.databricks.com/t5/user/viewprofilepage/user-id/119159", 
    icon: "fas fa-cubes", 
    cls: "databricks", 
    handle: "ID: 119159",
    badge: "Community Contributor",
    action: "View Profile", 
    description: "Databricks Lakehouse discussions, Spark SQL optimizations, and community answers." 
  },
  { 
    platform: "HackerRank", 
    category: "engineering", 
    url: "https://www.hackerrank.com/profile/rvakr", 
    icon: "fab fa-hackerrank", 
    cls: "hackerrank", 
    handle: "@rvakr",
    badge: "SQL & Problem Solving",
    action: "View Challenges", 
    description: "Verified problem-solving rank in advanced SQL queries and algorithms." 
  },
  { 
    platform: "PyPI (Python Package Index)", 
    category: "engineering", 
    url: "https://pypi.org/project/pyconnector/", 
    icon: "fab fa-python", 
    cls: "pypi", 
    handle: "pyconnector",
    badge: "Package Author",
    action: "Inspect Package", 
    description: "Published open-source Python database and connector library." 
  },
  // Media & Channels
  { 
    platform: "YouTube (CodeXLabs)", 
    category: "media", 
    url: "https://www.youtube.com/@CodeXLabs", 
    icon: "fab fa-youtube", 
    cls: "youtube", 
    handle: "@CodeXLabs",
    badge: "Tech & Architecture",
    action: "Subscribe Channel", 
    description: "In-depth tutorials on modern data architecture, cloud engineering, and coding." 
  },
  { 
    platform: "YouTube (CodeWithBR)", 
    category: "media", 
    url: "https://www.youtube.com/@CodeWithBR", 
    icon: "fab fa-youtube", 
    cls: "youtube", 
    handle: "@CodeWithBR",
    badge: "Coding Walkthroughs",
    action: "Subscribe Channel", 
    description: "Step-by-step programming guides, microservices with Python, and hands-on demos." 
  },
  { 
    platform: "X / Twitter", 
    category: "social", 
    url: "https://x.com/rvakr_br", 
    icon: "fab fa-x-twitter", 
    cls: "x-twitter", 
    handle: "@rvakr_br",
    badge: "Daily Insights",
    action: "Follow & Tweet", 
    description: "Real-time thoughts on AI, cloud platforms, and software engineering." 
  },
  { 
    platform: "Instagram", 
    category: "social", 
    url: "https://instagram.com/rvakr_br", 
    icon: "fab fa-instagram", 
    cls: "instagram", 
    handle: "@rvakr_br",
    badge: "Life & Tech",
    action: "Follow Profile", 
    description: "Behind the scenes, developer lifestyle, and visual updates." 
  },
  { 
    platform: "Facebook", 
    category: "social", 
    url: "https://facebook.com/rvakr.br", 
    icon: "fab fa-facebook-f", 
    cls: "facebook", 
    handle: "rvakr.br",
    badge: "Social Network",
    action: "Connect Profile", 
    description: "Community updates, events, and networking connections." 
  }
];