/*
 * SkillsAndProcess Section: Skills on left, work process on right,
 * quote/testimonial at bottom right
 * Style: Dark charcoal bg, red section titles, skill badges, numbered process steps
 * Animation: Scroll-triggered fade-in with stagger
 */
import { Search, Lightbulb, Pencil, Code, Rocket } from "lucide-react";
import { skills, workProcess } from "@/data";
import { useInView } from "@/hooks/useInView";

const processIcons: Record<string, React.ReactNode> = {
  search: <Search className="w-4 h-4" />,
  lightbulb: <Lightbulb className="w-4 h-4" />,
  pencil: <Pencil className="w-4 h-4" />,
  code: <Code className="w-4 h-4" />,
  rocket: <Rocket className="w-4 h-4" />,
};

const skillCategories = [
  {
    title: "AI & Machine Learning",
    items: skills.filter((s) => [
      "Generative AI", "LLM Integration", "Prompt Engineering",
      "AI Workflow Design", "AI Automation", "AI Agent Development",
      "RAG Systems", "Knowledge Base Chatbots", "Document AI",
      "Semantic Search", "Custom Chatbots", "PDF Chatbots",
    ].includes(s)),
  },
  {
    title: "Programming",
    items: skills.filter((s) => ["Python", "HTML5", "CSS3", "JavaScript"].includes(s)),
  },
  {
    title: "Frontend Development",
    items: skills.filter((s) => [
      "Responsive Design", "Landing Pages", "Portfolio Websites",
      "Luxury UI Design", "Interactive Animations",
    ].includes(s)),
  },
  {
    title: "Deployment & Cloud",
    items: skills.filter((s) => [
      "GitHub", "Vercel", "Railway", "Render", "Fly.io", "Koyeb",
    ].includes(s)),
  },
  {
    title: "AI Platforms",
    items: skills.filter((s) => [
      "ChatGPT", "Claude", "Gemini", "OpenRouter", "Hugging Face", "Streamlit",
    ].includes(s)),
  },
  {
    title: "Additional Skills",
    items: skills.filter((s) => [
      "Social Media Management", "Content Creation", "Graphic Design",
      "Digital Products", "E-book Creation", "SEO Content",
    ].includes(s)),
  },
];

export default function SkillsAndProcess() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="w-full bg-[#0A0A0F] py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* LEFT: Skills */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-white font-display text-2xl md:text-3xl tracking-wider uppercase mb-8">
              Skills & Expertise
            </h2>

            <div className="flex flex-col gap-6">
              {skillCategories.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${catIdx * 60}ms` }}
                >
                  <h3 className="text-[#CC0000] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 border border-white/15 text-white/90 text-[10px] tracking-[0.1em] uppercase bg-white/[0.03] hover:border-[#CC0000]/40 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Work Process */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-white font-display text-2xl md:text-3xl tracking-wider uppercase mb-8">
              Work Process
            </h2>

            <div className="flex flex-col gap-7">
              {workProcess.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 transition-all duration-500"
                  style={{ transitionDelay: `${(i + 3) * 80}ms` }}
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-display text-2xl text-[#CC0000]">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000]">
                      {processIcons[step.icon] || <Rocket className="w-4 h-4" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#CC0000] text-[11px] tracking-[0.25em] uppercase font-bold mb-1">
                      {step.title}
                    </h4>
                    <p className="text-white/65 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote section */}
            <div
              className={`mt-14 border-t border-white/10 pt-8 transition-all duration-700 delay-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-[#CC0000] text-5xl font-display leading-none">&ldquo;</span>
              <p className="text-white/75 text-base md:text-lg italic mt-2 max-w-md leading-relaxed">
                Good design is not just how it looks, but how it works.
              </p>
              <p className="font-script text-[#CC0000] text-2xl mt-4">Bilal Ali</p>
              <p className="text-[#CC0000] text-[11px] tracking-[0.2em] uppercase mt-4">
                Let&apos;s create something great together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-16 md:mt-20" />
    </section>
  );
}
