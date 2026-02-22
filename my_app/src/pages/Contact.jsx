import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react";
import { cn } from "../lib/utlis";

export const Contact = () => {
    const contactInfo = {
        email: "lebinhantd@gmail.com",
        linkedin: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/",
        facebook: "https://www.facebook.com/nana.159919",
        github: "https://github.com/lebinhantd-glitch"
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">Contact Me</h2>
                
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Let's Connect</h3>
                            <p className="text-foreground/70">
                                I'm always interested in hearing about new opportunities, 
                                collaborations, or just having a chat about data, AI, and business.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                                    <Mail className="text-primary" size={20} />
                                    <div>
                                        <div className="text-sm text-foreground/60">Email</div>
                                        <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                                    <Linkedin className="text-primary" size={20} />
                                    <div>
                                        <div className="text-sm text-foreground/60">LinkedIn</div>
                                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                                    <Facebook className="text-primary" size={20} />
                                    <div>
                                        <div className="text-sm text-foreground/60">Facebook</div>
                                        <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            Follow me
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                                    <Github className="text-primary" size={20} />
                                    <div>
                                        <div className="text-sm text-foreground/60">GitHub</div>
                                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            View my code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full cosmic-button inline-flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
