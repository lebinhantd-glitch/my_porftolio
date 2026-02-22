import { useState } from "react";
import { cn } from "../lib/utlis";
import { Users, Award, ChevronRight, BookOpen, Sparkles, Target, Calendar } from "lucide-react";
import { projects, publications, activities, certifications, tabs } from "../data/projectsData";

export const Projects = () => {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <section id="projects" className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span> and
                        <span className="gradient-text"> Achievements</span>
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        A collection of academic projects, research publications, and professional activities that showcase my journey in data analytics and business intelligence.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300", activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                    : "bg-card border border-border hover:border-primary/50 hover:text-primary")}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === "projects" && (
                    <div className="space-y-8">
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <div key={index} className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        <div className="lg:w-1/4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <Icon className="text-primary" size={32} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-foreground/60 mt-1">
                                                        {project.category}
                                                    </p>
                                                </div>
                                            </div>
                            
                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                    <BookOpen size={16} className="text-primary" />
                                                    <span>{project.course}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-foreground/60">
                                                    <Users size={16} className="text-primary" />
                                                    <span>{project.team}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Award size={16} className="text-primary" />
                                                    <span className="font-semibold text-primary">Final Grade: {project.grade}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:w-3/4 space-y-6">
                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-2">
                                                    MY ROLE
                                                </h4>
                                                <p className="text-primary font-medium text-lg">{project.role}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                                    <Sparkles size={16} className="text-primary" />
                                                    MY CONTRIBUTIONS
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.myContributions.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-foreground/70">
                                                            <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1" />
                                                            <span className="text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                                    <Target size={16} className="text-primary" />
                                                    KEY ACHIEVEMENTS
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-foreground/70">
                                                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                                                            <span className="text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === "publications" && (
                    <div className="space-y-8">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-xl font-bold mb-3 gradient-text">
                                            {pub.title}
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <p className="text-primary font-medium">{pub.role}</p>
                                            <p className="text-foreground/60">{pub.conference}</p>
                                            <p className="text-foreground/40 text-xs">{pub.isbn}</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                                <Sparkles size={16} className="text-primary" />
                                                MY CONTRIBUTIONS
                                            </h4>
                                            <ul className="space-y-2">
                                                {pub.myContributions.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                                                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                                <Target size={16} className="text-primary" />
                                                KEY FINDINGS
                                            </h4>
                                            <ul className="space-y-2">
                                                {pub.keyFindings.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {pub.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs rounded-full bg-primary/5 text-primary border border-primary/10"
                                                >
                                                    {tag}
                                                </span>))}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>)}

                {activeTab === "activities" && (
                <div className="grid md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                    <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {activity.title}
                        </h3>
                        <p className="text-primary text-base mt-2 flex items-center gap-2">
                            <Users size={16} className="text-primary/70" />
                            {activity.organization}
                        </p>
                    </div>
                        {activity.type && (
                        <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                            {activity.type}
                        </span>)}
                    </div>
                
                    {activity.period && (
                        <div className="flex items-center gap-2 text-foreground/70 text-base mb-6 bg-card/50 p-4 rounded-xl border border-border/50">
                            <Calendar size={18} className="text-primary" />
                            <span className="font-medium">{activity.period}</span>
                        </div>
                    )}`
                
                    {activity.role && !activity.roles && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                <Sparkles size={16} className="text-primary" />
                                ROLE
                            </h4>
                            <p className="text-primary/90 text-base font-medium bg-primary/5 p-4 rounded-xl border-l-4 border-primary">
                                {activity.role}
                            </p>
                        </div>
                    )}
                
                    {activity.description && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                <BookOpen size={16} className="text-primary" />
                                DESCRIPTION
                            </h4>
                            <p className="text-foreground/70 text-base leading-relaxed bg-card/50 p-4 rounded-xl border border-border/50">
                                {activity.description}
                            </p>
                        </div>
                    )}
                
                        {activity.roles && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                    <Users size={16} className="text-primary" />
                                    POSITIONS HELD
                                </h4>
                                <ul className="space-y-3">
                                    {activity.roles.map((role, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/70">
                                            <ChevronRight size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-base">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                
                    {activity.achievements && (
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-3 flex items-center gap-2">
                                <Target size={16} className="text-primary" />
                                KEY ACHIEVEMENTS
                            </h4>
                            <ul className="space-y-3">
                                {activity.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/70 bg-primary/5 p-4 rounded-xl border border-primary/10">
                                        <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0 shadow-lg shadow-primary/30" />
                                        <span className="text-base leading-relaxed flex-1">{item}</span>
                                    </li>))}
                            </ul>
                        </div>)}
                        </div>))}
                    </div>)}

                {activeTab === "certifications" && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <Award size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="font-medium text-sm">{cert.name}</p>
                                        <p className="text-xs text-foreground/40 text-left">{cert.issuer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};