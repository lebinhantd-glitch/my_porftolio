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
        }
        }, []);

    const toggleTheme=()=>{
        if (isDarkMode){document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false)}
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        setIsDarkMode(true)
        }
    }

    return <button onClick={toggleTheme} className={cn("p-2 rounded-full border border-border bg-card hover:bg-primary/10 hover:scale-110 transition-all duration-300 focus:outline-none")}> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-300"/>}</button>;
}