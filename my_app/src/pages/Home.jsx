import { NavBar } from "../components/NavBar";
import { HeroSection } from "../pages/HeroSection";
// import { About} from "../pages/About";
// import { Skills from "../pages/Skills";
// import { Projects} from "../pages/Projects";
// import { ContactS } from "../pages/Contact";
// import { Footer } from "../components/Footer";

export const Home = () => { 
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            <NavBar/> 
            
            <main>
                <HeroSection />
                {/* <About /> */}
                {/* <Skills />
                <Projects /> */}
                {/* <Contact/> */}
            </main>
            
            {/* <Footer /> */}
        </div>
    );
};