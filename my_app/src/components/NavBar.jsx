import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];
export const NavBar = () => {
    return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="container">
            <div className="flex items-center justify-between h-14 sm:h-16">

            <div className="text-lg sm:text-2xl font-bold text-primary whitespace-nowrap">
                My Portfolio
            </div>

            <div className="flex items-center gap-3 sm:gap-10 md:gap-16 flex-wrap">
                {navItems.map(item => (
                <a href={item.href}
                    key={item.name}
                    className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                </a>
            ))}
            </div>
            <ThemeToggle/>
            </div>
        </div>
    </nav>
    );
}