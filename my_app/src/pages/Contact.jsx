import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import { cn } from "../lib/utlis";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const contactInfo = {
        email: "lebinhantd@gmail.com",
        linkedin: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/",
        facebook: "https://www.facebook.com/nana.159919",
        github: "https://github.com/lebinhantd-glitch",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
    {
        icon: Mail,
        href: `mailto:${contactInfo.email}`,
        label: "Email",
        value: contactInfo.email,
    },
    {
        icon: Linkedin,
        href: contactInfo.linkedin,
        label: "LinkedIn",
        value: "Connect with me",
    },
    {
        icon: Facebook,
        href: contactInfo.facebook,
        label: "Facebook",
        value: "Follow me",
    },
    {
        icon: Github,
        href: contactInfo.github,
        label: "GitHub",
        value: "View my code",
    },
    ];

    return (
    <section id="contact" className="relative py-24 px-4">
        <div className="container relative z-10">
            <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
            Whether you have a question or an opportunity, I'm always open to connect
            </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
            <div className="h-full glass-effect rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 text-primary">
                Let's Connect
            </h3>

        <div className="space-y-4"> {socialLinks.map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className={cn( "flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:bg-secondary hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5")}>
                    <div className="p-3 rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <social.icon size={20} className="text-primary"/>
                    </div>

                    <div className="flex-1 text-left">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                    </p>
                    <p className="text-sm text-muted">
                        {social.value}
                    </p>
                    </div>
                </div>
            </a>))}
        </div>
        </div>
        </div>

    <div className="lg:col-span-3">
        <div className="h-full glass-effect rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1">
        <h3 className="text-2xl font-bold mb-2 text-primary">
            Send a Message
        </h3>
        <p className="text-muted mb-8">
            I'll get back to you as soon as possible
        </p>

    <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
            <label className="block text-sm font-medium text-muted mb-2 text-left">
                Your Name
            </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                required/>
            </div>

        <div>
            <label className="block text-sm font-medium text-muted mb-2 text-left">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
        required/>
        </div>
        </div>

    <div>
        <label className="block text-sm font-medium text-muted mb-2 text-left"> Your Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange}rows="5" placeholder="Hi An." className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-all resize-none focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"required/>
    </div>

    <button type="submit" className="w-full cosmic-button inline-flex items-center justify-center gap-2">
    <Send size={18} />Send Message</button>
</form>
</div>
</div>

</div>
</div>
</section>
);
};