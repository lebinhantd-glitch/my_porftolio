
const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skill", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
];
export const NavBar = () => {
    return (
       <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="container">

            <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">
                My Portfolio
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {navItems.map(item => (
                    <a href={item.href} key={item.name} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    >{item.name}</a>
                ))}
            </div>
            </div>
        </div>

       </nav>
    );
}