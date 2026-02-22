import { 
    Brain, TrendingUp, BarChart3, Database, 
    Workflow, Code2 
} from "lucide-react";

export const projects = [
   {
        title: "Payment Delay Risk Classification",
        category: "Machine Learning",
        course: "Machine Learning in Business Analytics",
        team: "5 members",
        grade: "8.6",
        icon: Brain,
        description: "Built and optimized classification models to predict late payment risk using transactional data.",
        role: "Machine Learning & Risk Data Analyst",
        myContributions: [
            "Cleaned and preprocessed transactional data (handling missing values, encoding, scaling)",
            "Conducted Exploratory Data Analysis to identify behavioral patterns related to late payment risk",
            "Built and optimized 4 classification models: XGBoost, K-Nearest Neighbors, Logistic Regression, SGD Classifier",
            "Performed hyperparameter tuning and compared models using Accuracy, Precision, Recall, F1-score and ROC-AUC",
            "Selected the optimal model based on predictive performance and overfitting analysis"
        ],
        achievements: [
            "Delivered actionable insights for credit screening and early risk detection",
            "Developed a complete ML pipeline from data preprocessing to model evaluation",
            "Identified key risk factors with highest predictive power for payment delays"
        ],
        tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "EDA"]
    },
    {
        title: "Capital Structure Analysis of Listed Firms (HOSE & HNX)",
        category: "Econometrics",
        course: "Econometrics",
        team: "4 members",
        grade: "8.0",
        icon: TrendingUp,
        description: "Analyzed determinants of capital structure using panel data regression techniques.",
        role: "Quantitative Financial Data Analyst",
        myContributions: [
            "Collected and standardized panel data of listed firms",
            "Built panel regression models using Pooled OLS, Fixed Effects (FEM), and Random Effects (REM)",
            "Conducted statistical significance tests (t-test, F-test, Wald test)",
            "Diagnosed multicollinearity (VIF) and heteroskedasticity (Breusch-Pagan test)",
            "Improved model explanatory power by adjusting variables and adding interaction terms"
        ],
        achievements: [
            "Models explained over 50% of variation in leverage ratios",
            "Identified key financial determinants affecting long-term vs short-term debt",
            "Successfully validated model robustness through multiple diagnostic tests"
        ],
        tags: ["Stata", "Panel Data", "Econometrics", "Financial Analysis"]
    },
    {
        title: "Financial Statement Analysis - KIDO Group (2019-2023)",
        category: "Financial Analysis",
        course: "Financial Management",
        team: "7 members",
        grade: "8.8",
        icon: BarChart3,
        description: "Comprehensive financial performance analysis of KIDO Group over 5 years.",
        role: "Financial Data Analyst",
        myContributions: [
            "Collected and structured 5-year financial statements (Balance Sheet, Income Statement, Cash Flow Statement)",
            "Computed profitability ratios (ROA, ROE, Net Margin, Gross Margin)",
            "Conducted liquidity analysis (Current Ratio, Quick Ratio, Cash Ratio)",
            "Performed year-over-year trend analysis",
            "Identified financial volatility and short-term solvency risks"
        ],
        achievements: [
            "Translated quantitative results into strategic business performance insights",
            "Detected abnormal profitability fluctuations requiring management attention",
            "Provided data-driven recommendations for improving liquidity position"
        ],
        tags: ["Excel", "Financial Ratios", "Trend Analysis", "Risk Assessment"]
    },
    {
        title: "Retail Marketing Optimization through Multi-source Data Integration",
        category: "AI Solutions",
        course: "AI Solutions in Business & Management",
        team: "3 members",
        grade: "9.1",
        icon: Database,
        description: "Optimized retail marketing strategies through multi-source data integration and AI tools.",
        role: "Data Processing & Strategic Analysis",
        myContributions: [
            "Integrated multi-source data using NocoDB and AI tools",
            "Conducted EDA and marketing performance analysis",
            "Proposed AI-driven retail optimization strategies",
            "Contributed to research paper development and analysis"
        ],
        achievements: [
            "Identified key customer segments for targeted marketing campaigns",
            "Developed data-driven framework for marketing strategy optimization"
        ],
        tags: ["NocoDB", "NocoAI", "EDA", "Marketing Analytics", "AI Strategy"]
    },
    {
        title: "Tourism Booking Management System",
        category: "System Analysis",
        course: "Analysis & Design of Management Information System",
        team: "5 members",
        grade: "9.1",
        icon: Workflow,
        description: "Designed a comprehensive tourism booking system connecting travelers and hotels.",
        role: "Business & System Analyst",
        myContributions: [
            "Designed DFD, use case diagrams, and business process workflows",
            "Defined system scope, constraints, and functional requirements",
            "Built UI prototypes using Figma",
            "Designed data store, data flow, and data dictionary"
        ],
        achievements: [
            "Developed a dashboard for hotel-side performance monitoring",
            "Successfully mapped complete system architecture with clear data flows",
            "Created comprehensive documentation adopted by the entire team"
        ],
        tags: ["DFD", "Use Case", "Figma", "Data Dictionary", "System Design"]
    },
    {
        title: "Food Delivery Web Platform",
        category: "Web Development",
        course: "Business Web Development",
        team: "5 members",
        grade: "8.0",
        icon: Code2,
        description: "Developed a food ordering web application for customers and restaurants using Angular.",
        role: "Frontend & System Design Contributor",
        myContributions: [
            "Designed system architecture and DFD diagrams",
            "Developed customer and restaurant interfaces using Angular",
            "Implemented registration, login, order tracking and feedback functions",
            "Integrated location update functionality"
        ],
        achievements: [
            "Successfully delivered fully functional food ordering platform",
            "Achieved seamless integration between customer and restaurant interfaces",
            "Implemented real-time order tracking with location updates"
        ],
        tags: ["Angular", "TypeScript", "HTML/CSS", "Figma", "System Design"]
    }
];

export const publications = [
    {
        title: "Enhancing Customer Insights: DBSCAN for Retail Behavior Anomalies",
        role: "Second Author",
        conference: "The Student Research - International Conference for Young Researchers in Economics and Business (SR-ICYREB 2025)",
        isbn: "ISBN: 978-604-44-7627-8, pp. 517A",
        myContributions: [
            "Applied DBSCAN clustering combined with RFM framework for anomaly detection",
            "Conducted parameter optimization using Davies-Bouldin Index and Silhouette Score",
            "Developed interactive Power BI dashboards for anomaly visualization",
            "Interpreted results from a risk management and retail analytics perspective"
        ],
        keyFindings: [
            "Identified approximately 0.07% anomalous transactions contributing disproportionately to total revenue",
            "Discovered that anomalies are concentrated in offline channels, specific territories, and particular salespersons",
            "Revealed potential blind spots in traditional KPI-based monitoring systems"
        ],
        tags: ["DBSCAN", "RFM", "Anomaly Detection", "Power BI", "Clustering"]
    }
];

export const activities = [
    {
        title: "Event Collaborator - Opening Ceremony 2023",
        organization: "Vietnam National University HCMC",
        period: "November 11th 2023",
        description: "Event attended by Prime Minister Pham Minh Chinh",
        type: "Volunteer"
    },
    {
        title: "Green Summer Campaign",
        organization: "University of Economics and Law",
        period: "July 2024 & July 2025",
        role: "Volunteer",
        type: "Volunteer"
    },
    {
        title: "Admissions Counseling",
        organization: "University of Economics and Law",
        period: "January 2024",
        role: "Volunteer",
        type: "Volunteer"
    },
    {
        title: "Book and Action Club - UEL",
        roles: [
            "President (January 2025 - Present)",
            "Communications Team (August 2024 - December 2025)",
            "Reading Culture Team Member (September 2023 - August 2024)"
        ],
        period: "Sepember 2023- Present",
        achievements: [
            "Managed club operations, planning and task delegation for 20+ members",
            "Reading Space Program 2023-2026: Created reading spaces within the university campus, engaging 50+ participants in reading and discussion sessions, with participation increasing 10% compared to the previous year",
            "Dream Bookshelf Program 2024-2025: Visited volunteer sites and donated 50+ books and gifts valued at 300,000 VND to shelters",
            "Fundraising Campaign 2025: Organized fundraising activities for community programs, raising 700,000 VND"
        ],
        type: "Club"
    },
    {
        title: "AI4I - Artificial Intelligence for Interdisciplinarity Club",
        role: "Research & Development Team Member",
        period: "November 2023 - Present",
        achievements: [
            "Co-organized AIb1 and AIb2 competitions with 80+ participants",
        ],
        type: "Club"
    }
];

export const certifications = [
    { name: "IELTS 5.5", issuer: "IELTS", category: "Language" },
    { name: "SQL Basic", issuer: "HackerRank", category: "Database" },
    { name: "CSS Basic", issuer: "HackerRank", category: "Web" },
    { name: "Python Basic", issuer: "HackerRank", category: "Programming" },
    { name: "JavaScript Intermediate", issuer: "HackerRank", category: "Programming" },
    { name: "Big Data and Machine Learning Fundamentals", issuer: "Cloud Ace", category: "Data Science" },
    { name: "MOS PowerPoint", issuer: "Microsoft", category: "Office" }
];

export const tabs = [
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "activities", label: "Activities" },
    { id: "certifications", label: "Certifications" }
];