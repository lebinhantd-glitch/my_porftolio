import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../pages/HeroSection";
export const Home = () => { 
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            
            {/* NavBar */}
            <NavBar/> 
            
            {/* Main Content/} */}
            <main>
                <HeroSection>

                </HeroSection>
            </main>
            
            {/* {/* Footer */}
        </div>
    );
};