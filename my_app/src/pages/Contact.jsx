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
            color: "hover:text-red-500" 
        },
        { 
            icon: Linkedin, 
            href: contactInfo.linkedin, 
            label: "LinkedIn", 
            value: "Connect with me",
            color: "hover:text-blue-600" 
        },
        { 
            icon: Facebook, 
            href: contactInfo.facebook, 
            label: "Facebook", 
            value: "Follow me",
            color: "hover:text-blue-500" 
        },
        { 
            icon: Github, 
            href: contactInfo.github, 
            label: "GitHub", 
            value: "View my code",
            color: "hover:text-gray-900 dark:hover:text-white" 
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
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all h-full">
                <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4"> {socialLinks.map((social, index) => (
                    <a key={index} href={social.href}
                        target="_blank" rel="noopener noreferrer" className="group block">
                        <div className={cn(
                            "flex items-center gap-4 p-4 rounded-xl",
                            "bg-background/50 border border-border",
                            "hover:border-primary/30 transition-all duration-300",
                            "hover:shadow-md")}>
                            <div className={cn(
                                "p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0",
                                social.color)}>
                                <social.icon className="text-primary" size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-foreground/60 text-left">{social.label}</p>
                                <p className="font-medium group-hover:text-primary transition-colors truncate text-left">
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
                        <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all h-full">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl" />
                            
                            <div className="pl-4">
                                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                                <p className="text-foreground/60 mb-6">
                                    I'll get back to you as soon as possible
                                </p>
                                
                                <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground/70 mb-2 text-left">Your Name</label>
                                        <input type="text" name="name"value={formData.name} onChange={handleChange} placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none transition-all hover:border-primary/30"
                                        required/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground/70 mb-2 text-left">Email Address</label>
                                        <input type="email" name="email" value={formData.email}
                                        onChange={handleChange} placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none transition-all hover:border-primary/30"
                                        required/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground/70 mb-2 text-left">Your Message</label>
                                    <textarea name="message" value={formData.message}
                                    onChange={handleChange} rows="5"
                                    placeholder="Hi An."
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none transition-all hover:border-primary/30 resize-none"
                                    required />
                                </div>

                                <button type="submit" className="w-full cosmic-button inline-flex items-center justify-center gap-2 py-4">
                                <Send size={18} />
                                    Send Message
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