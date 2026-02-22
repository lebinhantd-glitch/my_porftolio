import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight, FileText, Facebook } from "lucide-react";
import { cn } from "../lib/utlis";

export const HeroSection = () => {
    const personalInfo = {
        name: "Lê Bình An",
        role: "Third-year Student - Digital Business & AI",
        university: "University of Economics and Law (UEL), VNU-HCM",
        description: "Passionate about leveraging data and AI to drive business decisions. Experienced in financial analysis, machine learning, and business intelligence.",
        avatar: "/avatar.jpg", // Thay bằng ảnh thật
        socials: [
            { icon: Github, link: "https://github.com/lebinhantd-glitch", label: "GitHub" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/", label: "LinkedIn" },
            { icon: Facebook, link: "https://www.facebook.com/nana.159919", label: "Facebook" },
            { icon: Mail, link: "mailto:lebinhantd@gmail.com", label: "Email" },
        ]
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-primary">
                                {personalInfo.university}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="gradient-text">Hi, I'm</span>
                            <br />
                            <span className="text-foreground">{personalInfo.name}</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl text-foreground/80 mb-4">
                            {personalInfo.role}
                        </h2>

                        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-8">
                            {personalInfo.description}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                            <Link
                                to="/projects"
                                className="cosmic-button group inline-flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link
                                to="/contact"
                                className="cosmic-border group inline-flex items-center gap-2"
                            >
                                <Mail size={18} />
                                Contact Me
                            </Link>

                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <FileText size={18} />
                                Resume
                            </a>
                        </div>

                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            <span className="text-sm text-foreground/60">Connect with me:</span>
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-card hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} className="text-foreground/70 hover:text-primary" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-float" />
                            
                            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background bg-card">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-2xl animate-pulse animation-delay-1000" />
                            
                            <div className="absolute -right-8 top-1/4 w-12 h-12 bg-card rounded-lg border border-primary/30 flex items-center justify-center animate-float animation-delay-1000 shadow-lg">
                                <span className="text-primary font-bold text-xs">Python</span>
                            </div>
                            <div className="absolute -left-8 bottom-1/4 w-12 h-12 bg-card rounded-lg border border-primary/30 flex items-center justify-center animate-float animation-delay-2000 shadow-lg">
                                <span className="text-primary font-bold text-xs">SQL</span>
                            </div>
                            <div className="absolute top-1/4 -right-12 w-12 h-12 bg-card rounded-lg border border-primary/30 flex items-center justify-center animate-float animation-delay-1500 shadow-lg">
                                <span className="text-primary font-bold text-xs">ML</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-sm text-foreground/60">Scroll Down</span>
                    <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center">
                        <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};