// Home.jsx
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => { 
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            {/* { ThemeToggle/} */}
            <ThemeToggle />
            
            {/* NavBar */}
            <NavBar/> 
            
            {/* Main Content/}
            <div className="container mx-auto px-4 pt-20">
            </div>
            
            {/* Footer */}
        </div>
    );
};