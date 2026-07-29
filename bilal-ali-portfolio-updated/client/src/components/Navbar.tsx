/*
 * Navbar: Top navigation bar with scroll-aware sticky behavior
 * Style: Pure black bg, red accent text, star icon for freelance availability
 */
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50"
          : "bg-black border-b border-white/5"
      }`}
    >
      <div className="flex flex-col">
        <span className="text-white text-[11px] tracking-[0.3em] uppercase font-medium">
          AI Developer
        </span>
        <span className="text-[#CC0000] text-[11px] tracking-[0.3em] uppercase font-medium">
          Digital Creator
        </span>
      </div>
      <div className="flex items-center gap-2 text-white text-[11px] tracking-[0.2em] uppercase font-medium">
        Available for Freelance
        <Sparkles className="w-3.5 h-3.5 text-[#CC0000]" />
      </div>
    </nav>
  );
}
