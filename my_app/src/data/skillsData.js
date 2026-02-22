// data/skillsData.js
import { 
    BarChart3, Database, Brain, TrendingUp, 
    PieChart, LineChart, Code2, Workflow,
    Target, Sparkles, Eye, Settings, 
    BookOpen, Users, Shield, GitBranch,
    Figma, FileJson, Globe
} from "lucide-react";

export const skillsData = {
    technical: [
        { name: "Data Analysis & Cleaning", icon: Database },
        { name: "Exploratory Data Analysis (EDA)", icon: Eye },
        { name: "Statistical Modeling & Econometrics", icon: TrendingUp },
        { name: "Machine Learning (Supervised & Unsupervised)", icon: Brain },
        { name: "Financial Ratio Analysis", icon: PieChart },
        { name: "Credit Risk Modeling", icon: Shield },
        { name: "Data Visualization (Power BI)", icon: BarChart3 },
        { name: "SQL", icon: Database },
        { name: "Python (Data-focused applications)", icon: Code2 },
        { name: "Angular (Web Development)", icon: Code2 }
    ],
    analytical: [
        { name: "Quantitative Research", icon: BookOpen },
        { name: "Regression Analysis (OLS, FEM, REM)", icon: LineChart },
        { name: "Risk Assessment", icon: Target },
        { name: "Model Validation & Evaluation", icon: Sparkles },
        { name: "Dashboard Development", icon: BarChart3 },
        { name: "Business Requirement Analysis", icon: Users },
        { name: "System Analysis (DFD, Use Case, Data Dictionary)", icon: Workflow }
    ]
};

export const skillCategories = [
    { id: "technical", label: "Technical Skills", icon: Brain },
    { id: "analytical", label: "Analytical & Business Skills", icon: TrendingUp }
];