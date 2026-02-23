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
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        A collection of academic projects, research publications, and professional activities that showcase my journey in data analytics and business intelligence.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("px-6 py-3 rounded-full text-sm font-medium transition-all duration-300", 
                         activeTab === tab.id ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-card border border-border hover:bg-secondary hover:border-primary/50 hover:text-primary hover:shadow-lg hover:-translate-y-0.5")}>
                            {tab.label}
                        </button>))}
                </div>

                {activeTab === "projects" && (
                    <div className="space-y-8">
                        {projects.map((project, index) => {const Icon = project.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:bg-secondary hover:border-primary/40 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex flex-col lg:flex-row gap-8">
                                        <div className="lg:w-1/4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 group-hover:rotate-3 duration-300">
                                                <Icon className="text-primary group-hover:text-accent transition-colors" size={32} />
                                                </div>
                                                <div>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight text-left">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted mt-1 group-hover:text-foreground/80 transition-colors text-left">
                                                    {project.category}
                                                </p>
                                                </div>
                                            </div>
                            
                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-2 text-sm text-muted group-hover:text-foreground/80 transition-colors">
                                                    <BookOpen size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                    <span>{project.course}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted group-hover:text-foreground/80 transition-colors">
                                                    <Users size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                    <span>{project.team}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Award size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                    <span className="font-semibold text-primary group-hover:text-accent transition-colors">Overall Grade: {project.grade}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:w-3/4 space-y-6">
                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-2">
                                                    MY ROLE
                                                </h4>
                                                <p className="text-primary font-medium text-lg group-hover:text-accent transition-colors">{project.role}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-,uted transition-colors mb-3 flex items-center gap-2">
                                                    <Sparkles size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                    MY CONTRIBUTIONS
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.myContributions.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground/70 group-hover:text-foreground/90 transition-colors text-justify">
                                                        <ChevronRight size={16} className="text-primary group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                                    <Target size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                    KEY ACHIEVEMENTS
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-foreground/70 group-hover:text-foreground/90 transition-colors text-justify">
                                                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary group-hover:bg-accent transition-colors flex-shrink-0" />
                                                            <span className="text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs rounded-full  bg-secondary text-primary border border-primary/20 hover:bg-primary/10 hover:text-accent hover:border-accent/40 10hover:bg-primary/20 hover:text-accent hover:border-accent/30 transition-all hover:scale-105">
                                                        {tag}
                                                    </span>))}
                                            </div>
                                        </div>
                                    </div>
                                </div>);})}
                    </div>)}

                {activeTab === "publications" && (
                    <div className="space-y-8">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-2xl p-8 hover:bg-secondary hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(86,185,242,0.15)] hover:-translate-y-1">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary transition-colors">
                                            {pub.title}
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <p className="text-primary font-medium group-hover:text-accent transition-colors">{pub.role}</p>
                                            <p className="text-muted group-hover:text-foreground/80 transition-colors">{pub.conference}</p>
                                            <p className="text-foreground/40 text-xs group-hover:text-,uted transition-colors">{pub.isbn}</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                                <Sparkles size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                MY CONTRIBUTIONS
                                            </h4>
                                            <ul className="space-y-2">
                                                {pub.myContributions.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground/70 group-hover:text-foreground/90 transition-colors">
                                                        <ChevronRight size={16} className="text-primary group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                                <Target size={16} className="text-primary group-hover:text-accent transition-colors" />
                                                KEY FINDINGS
                                            </h4>
                                            <ul className="space-y-2">
                                                {pub.keyFindings.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground/70 group-hover:text-foreground/90 transition-colors">
                                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary group-hover:bg-accent transition-colors flex-shrink-0" />
                                                        <span className="text-sm">{item}</span>
                                                    </li>))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {pub.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs rounded-full bg-secondary text-primary border border-primary/20 hover:bg-primary/10 hover:text-accent hover:border-accent/40 hover:bg-primary/20 hover:text-accent hover:border-accent/30 transition-all hover:scale-105">
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
                        className="group relative bg-card border border-border rounded-2xl p-8 hover:bg-secondary hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(86,185,242,0.15)] hover:-translate-y-1">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {activity.title}
                            </h3>
                            <p className="text-primary text-base mt-2 flex items-center gap-2 group-hover:text-accent transition-colors">
                                <Users size={16} className="text-primary/70 group-hover:text-accent transition-colors" />
                                {activity.organization}
                            </p>
                        </div>
                        {activity.type && (
                            <span className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary font-medium border border-primary/20 group-hover:bg-primary/20 group-hover:text-accent group-hover:border-accent/30 transition-all">
                                {activity.type}
                            </span>)}
                    </div>
                
                    {activity.period && (
                        <div className="flex items-center gap-2 text-foreground/70 text-base mb-6 bg-card/50 p-4 rounded-xl border border-border/50 group-hover:bg-secondary/50 group-hover:border-primary/30 transition-all">
                            <Calendar size={18} className="text-primary group-hover:text-accent transition-colors" />
                            <span className="font-medium group-hover:text-foreground/90 transition-colors">{activity.period}</span>
                        </div>)}
                
                    {activity.role && !activity.roles && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                <Sparkles size={16} className="text-primary group-hover:text-accent transition-colors" />
                                ROLE
                            </h4>
                            <p className="text-primary/90 text-base font-medium bg-primary/5 p-4 rounded-xl border-l-4 border-primary group-hover:bg-primary/10 group-hover:text-accent group-hover:border-accent transition-all">
                                {activity.role}
                            </p>
                        </div>
                    )}
                
                    {activity.description && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                <BookOpen size={16} className="text-primary group-hover:text-accent transition-colors" />
                                DESCRIPTION
                            </h4>
                            <p className="text-foreground/70 text-base leading-relaxed bg-card/50 p-4 rounded-xl border border-border/50 group-hover:bg-secondary/50 group-hover:text-foreground/90 group-hover:border-primary/30 transition-all">
                                {activity.description}
                            </p>
                        </div>
                    )}
                
                    {activity.roles && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                <Users size={16} className="text-primary group-hover:text-accent transition-colors" />
                                POSITIONS HELD
                            </h4>
                            <ul className="space-y-3">
                                {activity.roles.map((role, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/70 group-hover:text-foreground/90 transition-colors">
                                        <ChevronRight size={18} className="text-primary group-hover:text-accent transition-colors flex-shrink-0 mt-0.5" />
                                        <span className="text-base">{role}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                
                    {activity.achievements && (
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 group-hover:text-muted transition-colors mb-3 flex items-center gap-2">
                                <Target size={16} className="text-primary group-hover:text-accent transition-colors" />
                                KEY ACHIEVEMENTS
                            </h4>
                            <ul className="space-y-3">
                                {activity.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/70 bg-primary/5 p-4 rounded-xl border border-primary/10 group-hover:bg-primary/10 group-hover:text-foreground/90 group-hover:border-accent/30 transition-all">
                                        <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary group-hover:bg-accent transition-colors flex-shrink-0 shadow-lg shadow-primary/30" />
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
                                className="bg-card border border-border rounded-xl p-5 hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(86,185,242,0.1)] hover:-translate-y-1 group">
                                <div className="flex items-center gap-3">
                                    <Award size={24} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                                    <div>
                                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{cert.name}</p>
                                        <p className="text-xs text-foreground/40 group-hover:text-muted transition-colors text-left">{cert.issuer}</p>
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