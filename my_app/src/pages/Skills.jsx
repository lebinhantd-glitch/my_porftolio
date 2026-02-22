import { useState } from "react";
import { cn } from "../lib/utlis";
import { skillsData, skillCategories } from "../data/skillsData";

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("technical");

    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>                      
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
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
                                        : "bg-card border border-border text-muted hover:bg-secondary hover:border-primary/40 hover:text-primary hover:shadow-[0_4px_15px_hsl(var(--primary)/0.15)] hover:-translate-y-0.5")}>
                                <Icon size={18} className="transition-transform group-hover:scale-110" />
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
                                className="group relative bg-card border border-border rounded-xl p-5 transition-all duration-300 hover:bg-secondary hover:border-primary/40 hover:shadow-[0_8px_20px_hsl(var(--primary)/0.12)] hover:-translate-y-1">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="flex items-center gap-3 pl-1">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={20} />
                                    </div>
                                    
                                    <span className="text-foreground font-medium group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 text-left">
                                        {skill.name}
                                    </span>
                                </div>

                                {skill.level && (
                                    <div className="mt-3 ml-16">
                                        <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                                                style={{ width: skill.level }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center text-muted text-sm">
                    <p className="hover:text-foreground/80 transition-colors duration-300">
                        Skills are continuously developed through academic projects and self-study.
                    </p>
                </div>
            </div>
        </section>
    );
};