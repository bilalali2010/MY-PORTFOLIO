/*
 * Hero Section: Massive "PORTFOLIO" background text, portrait photo,
 * name/title/description on left, stats on right
 * Style: Pure black bg, crimson red accents, Anton display font
 * Animations: Staggered entrance for text elements
 */
import { Globe } from "lucide-react";
import { personalInfo } from "@/data";

const HERO_IMAGE = "/manus-storage/hero-portrait_fd9393c4.png";

export default function Hero() {
  return (
    <section className="relative w-full bg-black min-h-[92vh] flex items-center overflow-hidden">
      {/* Oversized "PORTFOLIO" background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#660000] font-display text-[22vw] md:text-[25vw] leading-[0.85] tracking-wider whitespace-nowrap select-none pointer-events-none opacity-70">
        PORTFOLIO
      </div>

      <div className="container relative z-10 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left: Text content */}
          <div className="lg:col-span-4 z-20">
            <p className="font-script text-3xl md:text-4xl text-[#CC0000] mb-1 animate-fade-in-up">
              {personalInfo.greeting}
            </p>
            <h1 className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-white leading-[0.95] tracking-wide mb-3 animate-fade-in-up animation-delay-100">
              {personalInfo.name.split(" ")[0]}<br />
              {personalInfo.name.split(" ")[1]}
            </h1>
            <p className="text-[#CC0000] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-5 animate-fade-in-up animation-delay-200">
              AI Developer &<br />Frontend Designer
            </p>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-5 animate-fade-in-up animation-delay-300">
              {personalInfo.description}
            </p>
            <div className="flex items-center gap-2 text-white/60 text-[11px] tracking-[0.15em] uppercase animate-fade-in-up animation-delay-400">
              <Globe className="w-3.5 h-3.5 text-[#CC0000]" />
              {personalInfo.available}
            </div>
          </div>

          {/* Center: Portrait image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center z-10">
            <div className="relative w-[260px] md:w-[300px] lg:w-[360px] animate-fade-in animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10 pointer-events-none" />
              <img
                src={HERO_IMAGE}
                alt={personalInfo.name}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-8 z-20">
            <div className="text-right animate-fade-in-up animation-delay-300">
              <p className="text-white/70 text-sm leading-relaxed max-w-[180px]">
                {personalInfo.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
                  <div className="w-1 h-8 bg-[#CC0000]" />
                  <div>
                    <span className="font-display text-3xl md:text-4xl text-white">
                      {stat.number}
                    </span>
                    <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom red divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#CC0000]" />
    </section>
  );
}
