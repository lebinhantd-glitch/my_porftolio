export const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-primary/20 to-primary/10">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-primary mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl text-foreground/80 mb-8">Showcasing my projects and skills</p>
                <a href="#projects" className="cosmic-button">
                    View Projects
                </a>
            </div>
        </section>
    );
}