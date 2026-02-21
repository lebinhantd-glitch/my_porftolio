import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

export const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16">

          <Link
            to="/"
            className="text-lg sm:text-2xl font-bold text-primary whitespace-nowrap"
          >
            My Portfolio
          </Link>

          <div className="flex items-center gap-3 sm:gap-10 md:gap-16 flex-wrap">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <ThemeToggle />

        </div>
      </div>
    </nav>
  );
};