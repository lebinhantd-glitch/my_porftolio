import { Heart, ArrowUp, Mail, Github, Linkedin, Facebook, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
    const [showYear, setShowYear] = useState(new Date().getFullYear());
    
    useEffect(() => {
        setShowYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    const quickLinks = [
        { name: "Home", section: "home" },
        { name: "About", section: "about" },
        { name: "Skills", section: "skills" },
        { name: "Projects", section: "projects" },
        { name: "Contact", section: "contact" }
    ];

    const socialLinks = [
        { icon: Github, link: "https://github.com/lebinhantd-glitch", label: "GitHub", color: "hover:text-gray-300" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/", label: "LinkedIn", color: "hover:text-blue-400" },
        { icon: Facebook, link: "https://www.facebook.com/nana.159919", label: "Facebook", color: "hover:text-blue-500" },
        { icon: Mail, link: "mailto:lebinhantd@gmail.com", label: "Email", color: "hover:text-red-400" }
    ];

    const contactInfo = [
        { icon: Mail, info: "lebinhantd@gmail.com", link: "mailto:lebinhantd@gmail.com" },
        { icon: MapPin, info: "Ho Chi Minh City, Vietnam", link: null },
    ];

    return (
        <footer className="bg-card border-t border-border">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">LB An</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Aspiring Data Analyst passionate about leveraging data and AI 
                            to drive business decisions and create real-world impact.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-lg bg-background/50 hover:bg-primary/10 border border-border transition-all duration-300 hover:scale-110 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} className="text-foreground/70" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.section)}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-all"></span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-3 group"
                                        >
                                            <item.icon size={16} className="text-primary/70 group-hover:text-primary" />
                                            {item.info}
                                        </a>
                                    ) : (
                                        <div className="text-sm text-foreground/70 flex items-center gap-3">
                                            <item.icon size={16} className="text-primary/70" />
                                            {item.info}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/Update Section */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
                        </h4>
                        <p className="text-sm text-foreground/70">
                            Interested in collaboration or just want to say hi? I'd love to hear from you!
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-sm text-primary transition-all duration-300 hover:scale-105"
                        >
                            <Mail size={16} />
                            Send Message
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border bg-background/50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-xs sm:text-sm text-foreground/60 text-center md:text-left">
                            © {showYear} Lê Bình An. All rights reserved. 
                            <span className="hidden sm:inline mx-2">•</span>
                            <br className="sm:hidden" />
                            Built with passion for data and AI
                        </div>

                        {/* Made with love */}
                        <div className="text-xs sm:text-sm text-foreground/60 flex items-center gap-1">
                            Made with <Heart size={12} className="text-red-400 fill-red-400 animate-pulse" /> in Ho Chi Minh City
                        </div>

                        {/* Back to top & Tech stack */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-foreground/40 hidden lg:block">
                                React • Tailwind • Lucide
                            </span>
                            <button
                                onClick={scrollToTop}
                                className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border transition-all duration-300 hover:scale-110 group"
                                aria-label="Back to top"
                            >
                                <ArrowUp size={16} className="text-foreground/60 group-hover:text-primary transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};