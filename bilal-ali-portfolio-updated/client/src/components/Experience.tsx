/*
 * Experience Section: Professional experience with key responsibilities
 * Style: Dark bg, red accents, numbered list
 * Animation: Scroll-triggered fade-in
 */
import { experience, strengths, careerObjective } from "@/data";
import { useInView } from "@/hooks/useInView";

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="w-full bg-black py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Experience */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-white font-display text-2xl md:text-3xl tracking-wider uppercase mb-2">
              Professional Experience
            </h2>
            <p className="text-[#CC0000] text-sm font-bold tracking-[0.15em] uppercase mb-5">
              {experience.role}
            </p>
            <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-xl">
              {experience.description}
            </p>

            <h3 className="text-[#CC0000] text-[11px] tracking-[0.25em] uppercase font-bold mb-5">
              Key Responsibilities
            </h3>
            <div className="flex flex-col gap-3">
              {experience.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 transition-all duration-500"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="text-[#CC0000] text-xs font-display mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Strengths + Objective */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="mb-10">
              <h3 className="text-white font-display text-xl tracking-wider uppercase mb-5">
                Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 border border-white/15 text-white/75 text-[10px] tracking-[0.1em] uppercase bg-white/[0.03]"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-white font-display text-xl tracking-wider uppercase mb-4">
                Career Objective
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {careerObjective}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-16 md:mt-20" />
    </section>
  );
}
