import { NavBar } from "../components/NavBar";
import { HeroSection } from "../pages/HeroSection";
import { About} from "../pages/About";
// import { SkillsSection } from "../pages/Skills";
// import { ProjectsSection } from "../pages/Projects";
// import { ContactSection } from "../pages/Contact";
import { Footer } from "../pages/Footer";

export const Home = () => { 
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            <NavBar/> 
            
            <main>
                <HeroSection />
                <About />
                {/* <SkillsSection />
                <ProjectsSection /> */}
                {/* <ContactSection /> */}
            </main>
            
            <Footer />
        </div>
    );
};