import { BarChart3, Brain, TrendingUp, Database } from "lucide-react";
import { cn } from "../lib/utlis";

export const About = () => {
  const highlights = [
    {
        icon: BarChart3,
        title: "Quantitive Analytics",
        description: "Exposure to econometric methods, statistical reasoning, and financial modeling through academic coursework and applied projects."
    },
    {
        icon: Database,
        title: "Data Preparation and Modeling",
        description: "Experience working with real datasets, including preprocessing, feature engineering, and predictive modeling."
    },
    {
        icon: Brain,
        title: "Business-Oriented Thinking",
        description: "Ability to interpret statistical outputs and translate them into strategic business insights."
    },
    {
        icon: TrendingUp,
        title: "Applied Research",
        description: "Experience in credit risk modeling, anomaly detection, and financial performance evaluation."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto max-w-6xl relative z-10">

        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-[var(--animate-fade-in-delay-1)]">
                About <span className="gradient-text">Me</span>
            </h2>
                <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
                I am a third-year student majoring in Digital Business & Artificial Intelligence 
                at the University of Economics and Law (VNU-HCM).</p>
        </div>

        <div className="glass-effect rounded-2xl p-8 mb-14 animate-[var(--animate-fade-in-delay-2)">
            <p className="text-foreground/80 leading-relaxed mb-6 text-justify">
            My academic interests focus on data analytics, financial modeling, and the application 
            of machine learning in business contexts. Through coursework and research-based projects,
            I have worked on econometric analysis, credit risk modeling, anomaly detection, and 
            financial performance evaluation.
            </p>

            <p className="text-foreground/80 leading-relaxed text-justify">
            These experiences have helped me develop a structured analytical approach, practical 
            exposure to data workflows, and an understanding of how quantitative insights support 
            informed decision-making.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
            <div key={index} className={cn("group flex flex-col h-full p-6 rounded-2xl glass-effect transition-all duration-300 hover:-translate-y-2 hover:shadow-xl")}>
            <item.icon className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110" size={28}/>
            <h3 className="font-semibold text-lg mb-3 text-foreground">
                {item.title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
                {item.description}
            </p>
            </div>))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                I am interested in pursuing opportunities in
                <span className="text-primary font-semibold">Data Analytics</span>,{" "}
                <span className="text-primary font-semibold">Risk Analytics</span>, or{" "}
                <span className="text-primary font-semibold">Business Intelligence</span>, 
                where I can further refine my analytical skills, learn from practical business environments, and contribute meaningfully to data-informed decision-making processes.
            </p>
        </div>

    </div>
    </section>
  );
};