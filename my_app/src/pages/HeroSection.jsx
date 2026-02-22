import { Github, Linkedin, Mail, ArrowRight, FileText, Facebook } from "lucide-react";
import { cn } from "../lib/utlis";
import avatar from "../assets/avatar.png";
export const HeroSection = () => {
  const personalInfo = {
    name: "Lê Bình An",
    role: "Data Analyst",
    university: "University of Economics and Law (UEL)",
    major: "Digital Business & Artificial Intelligence",
    description:
      "A third-year Digital Business & AI student at UEL with  experience in data analytics, econometrics, and machine learning. Passionate about transforming complex data into actionable business insights to support risk management and strategic decision-making.",
    avatar: avatar,
    socials: [
      { icon: Github, link: "https://github.com/lebinhantd-glitch", label: "GitHub" },
      { icon: Linkedin, link: "https://www.linkedin.com/in/an-l%C3%AA-49b1122a6/", label: "LinkedIn" },
      { icon: Facebook, link: "https://www.facebook.com/nana.159919", label: "Facebook" },
      { icon: Mail, link: "mailto:lebinhantd@gmail.com", label: "Email" },
    ],
  };

  return (
    <section id="hero" className={cn( "relative min-h-screen flex items-center justify-center overflow-hidden")}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">

            <div className={cn( "inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6",
                "bg-primary/10 border border-primary/20")}>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                    {personalInfo.university} - {personalInfo.major}
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
                <button onClick={() => { const element = document.getElementById("projects"); element?.scrollIntoView({ 
                    behavior: "smooth" });}} className={cn( "cosmic-button group inline-flex items-center gap-2" )}> View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                
                </button>
                <button onClick={() => { const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });}} className="cosmic-border group inline-flex items-center gap-2">
                <Mail size={18} /> Contact Me
                </button>

                <a href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                  "px-6 py-3 rounded-full border border-border",
                  "hover:border-primary/50 hover:bg-primary/5",
                  "transition-all duration-300 inline-flex items-center gap-2",
                  "no-underline"
                )}
                >
                <FileText size={18} />Resume
                </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-sm text-foreground/60">
                    Connect with me:
                </span>

            {personalInfo.socials.map((social) => (
                <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                    "p-2 rounded-lg",
                    "bg-card border border-border",
                    "hover:bg-primary/20 hover:border-primary/50",
                    "transition-all duration-300 hover:scale-110",
                    "no-underline"
                    )}
                    aria-label={social.label}>
                    <social.icon size={20}
                    className="text-foreground/70 hover:text-primary transition-colors"/>
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
                className="w-full h-full object-cover object-[50%_10%] hover:scale-105 transition-transform duration-500"/>
            </div>
            </div>
            </div>

        </div>
    </div>
    </section>
  );
};