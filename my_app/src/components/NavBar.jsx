import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { cn } from "../lib/utlis";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          "border-b border-border/30",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
            : "py-5 bg-background"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">

            <Link
              to="/"
              className="text-lg sm:text-2xl font-bold text-primary whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              My Portfolio
            </Link>

            <div className="hidden md:flex items-center gap-3 sm:gap-10 md:gap-16">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg",
                      "text-xs sm:text-sm font-semibold text-foreground/80 whitespace-nowrap",
                      "transition-all duration-300",

                      isActive
                        ? "text-primary bg-primary/15 shadow-md"
                        : `
                          text-foreground/80
                          hover:text-primary
                          hover:bg-primary/10
                          hover:shadow-lg
                          hover:shadow-primary/20
                        `
                    )}
                  >
                    {item.name}

                    <span
                      className={cn(
                        "absolute left-1/2 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                        isActive
                          ? "w-3/4 -translate-x-1/2"
                          : "w-0 group-hover:w-3/4 -translate-x-1/2"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-foreground/80" />
                ) : (
                  <Menu size={24} className="text-foreground/80" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-[57px] bg-background/95 backdrop-blur-md z-40",
          "transition-all duration-300 md:hidden",
          "border-b border-border/30",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center py-8">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "w-full text-center py-4 text-base font-semibold rounded-lg",
                  "transition-all duration-300",
                  isActive
                    ? "text-primary bg-primary/15 shadow-md"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/10 hover:shadow-md",
                  "opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="h-[57px] sm:h-[65px]"></div>
    </>
  );
};