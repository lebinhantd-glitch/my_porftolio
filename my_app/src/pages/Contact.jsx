import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import { cn } from "../lib/utlis";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const contactInfo = {
        email: "lebinhantd@gmail.com",
        linkedin: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/",
        facebook: "https://www.facebook.com/nana.159919",
        github: "https://github.com/lebinhantd-glitch"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        { 
            icon: Mail, 
            href: `mailto:${contactInfo.email}`, 
            label: "Email", 
            value: contactInfo.email,
            bgHover: "hover:bg-red-500/10",
            iconHover: "group-hover:text-white-500",
            borderHover: "group-hover:border-red-500/30"
        },
        { 
            icon: Linkedin, 
            href: contactInfo.linkedin, 
            label: "LinkedIn", 
            value: "Connect with me",
            bgHover: "hover:bg-blue-600/10",
            iconHover: "group-hover:text-purple-600",
            borderHover: "group-hover:border-purple-600/30"
        },
        { 
            icon: Facebook, 
            href: contactInfo.facebook, 
            label: "Facebook", 
            value: "Follow me",
            bgHover: "hover:bg-blue-500/10",
            iconHover: "group-hover:text-blue-500",
            borderHover: "group-hover:border-blue-500/30"
        },
        { 
            icon: Github, 
            href: contactInfo.github, 
            label: "GitHub", 
            value: "View my code",
            bgHover: "hover:bg-gray-100/10 dark:hover:bg-white/10",
            iconHover: "group-hover:text-gray-900",
            borderHover: "group-hover:border-gray-400/30"
        }
    ];

    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Whether you have a question or an opportunity, I'm always open to connect
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6 hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(86,185,242,0.15)] hover:-translate-y-1 h-full">
                            <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">Let's Connect</h3>
                            <div className="space-y-4"> 
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.href}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group block">
                                        <div className={cn(
                                            "flex items-center gap-4 p-4 rounded-xl",
                                            "bg-background/50 border border-border",
                                            "transition-all duration-300",
                                            "hover:shadow-lg",
                                            social.bgHover,
                                            social.borderHover,
                                            "hover:-translate-y-0.5")}>
                                            <div className={cn(
                                                "p-3 rounded-xl bg-primary/10 transition-all duration-300 flex-shrink-0",
                                                "group-hover:scale-110 group-hover:rotate-3",
                                                social.iconHover,
                                                "group-hover:bg-primary/20"
                                            )}>
                                                <social.icon 
                                                    className={cn(
                                                        "text-primary transition-colors duration-300",
                                                        social.iconHover
                                                    )} 
                                                    size={20}/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 text-left">
                                                    {social.label}
                                                </p>
                                                <p className={cn(
                                                    "font-medium transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 text-left"
                                                )}>
                                                    {social.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="relative bg-card border border-border rounded-2xl p-8 hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(86,185,242,0.15)] hover:-translate-y-1 h-full">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl group-hover:opacity-100 transition-opacity" />
                            
                            <div className="pl-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Send a Message</h3>
                                <p className="text-foreground/60 mb-6 group-hover:text-foreground/80 transition-colors">
                                    I'll get back to you as soon as possible
                                </p>
                                
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group/input">
                                            <label className="block text-sm font-medium text-foreground/70 mb-2 text-left group-hover/input:text-primary transition-colors">
                                                Your Name
                                            </label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 focus:bg-secondary/50 focus:shadow-[0_0_0_4px_rgba(86,185,242,0.1)]"
                                                required
                                            />
                                        </div>
                                        <div className="group/input">
                                            <label className="block text-sm font-medium text-foreground/70 mb-2 text-left group-hover/input:text-primary transition-colors">
                                                Email Address
                                            </label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleChange} 
                                                placeholder="Your email address"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 focus:bg-secondary/50 focus:shadow-[0_0_0_4px_rgba(86,185,242,0.1)]"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="group/input">
                                        <label className="block text-sm font-medium text-foreground/70 mb-2 text-left group-hover/input:text-primary transition-colors">
                                            Your Message
                                        </label>
                                        <textarea 
                                            name="message" 
                                            value={formData.message}
                                            onChange={handleChange} 
                                            rows="5"
                                            placeholder="Hi An, I'd like to connect with you about..."
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 focus:bg-secondary/50 focus:shadow-[0_0_0_4px_rgba(86,185,242,0.1)] resize-none"
                                            required 
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full cosmic-button inline-flex items-center justify-center gap-2 py-4 group/btn relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(86,185,242,0.3)]"
                                    >
                                        <Send 
                                            size={18} 
                                            className="transition-all duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110" 
                                        />
                                        <span className="relative z-10">Send Message</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};