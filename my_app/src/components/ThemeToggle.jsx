import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utlis";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "p-2 rounded-full transition-all duration-300",
                "bg-card hover:bg-primary/10",
                "border border-border",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                isDarkMode ? "text-yellow-300" : "text-blue-300"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
                <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
        </button>
    );
};