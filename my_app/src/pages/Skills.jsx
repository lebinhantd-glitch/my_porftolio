// sections/SkillsSection.jsx
import { useState } from "react";
import { cn } from "../lib/utlis";
import { skillsData, skillCategories } from "../data/skillsData";

export const Skills= () => {
    const [activeCategory, setActiveCategory] = useState("technical");

    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>                      
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        A collection of technical and analytical skills developed through academic projects,
                        coursework, and hands-on experience in data analytics and business intelligence.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                                    activeCategory === cat.id
                                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                        : "bg-card border border-border hover:border-primary/50 hover:text-primary"
                                )}>
                                <Icon size={18} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsData[activeCategory].map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3.0 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="text-primary" size={20} />
                                    </div>
                                    
                                    <span className="text-foreground/80 font-medium group-hover:text-primary transition-colors text-justify">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center text-foreground/60 text-sm">
                    <p>Skills are continuously developed through academic projects and self-study.</p>
                </div>
            </div>
        </section>
    );
};