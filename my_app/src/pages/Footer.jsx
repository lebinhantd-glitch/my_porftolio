import { Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-foreground/60">
                        © 2024 Le Binh An. All rights reserved.
                    </div>

                    <div className="text-sm text-foreground/60 flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-400 fill-red-400" /> in Ho Chi Minh City
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border transition-all duration-300 hover:scale-110"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={18} className="text-foreground/60" />
                    </button>
                </div>
            </div>
        </footer>
    );
};