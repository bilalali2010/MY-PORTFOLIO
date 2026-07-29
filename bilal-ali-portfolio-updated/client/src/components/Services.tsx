/*
 * Services Section: Grid of service offerings with icons
 * Style: Dark charcoal bg, red section title, grid layout
 * Animation: Scroll-triggered fade-in with stagger
 */
import {
  MessageSquare,
  Layout,
  Globe,
  Rocket,
  Briefcase,
  Terminal,
  Plug,
  Cog,
  Share2,
  Sparkles,
  Image,
  Calendar,
  PenTool,
  Package,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, React.ReactNode> = {
  "message-square": <MessageSquare className="w-4 h-4" />,
  layout: <Layout className="w-4 h-4" />,
  globe: <Globe className="w-4 h-4" />,
  rocket: <Rocket className="w-4 h-4" />,
  briefcase: <Briefcase className="w-4 h-4" />,
  terminal: <Terminal className="w-4 h-4" />,
  plug: <Plug className="w-4 h-4" />,
  cog: <Cog className="w-4 h-4" />,
  "share-2": <Share2 className="w-4 h-4" />,
  sparkles: <Sparkles className="w-4 h-4" />,
  image: <Image className="w-4 h-4" />,
  calendar: <Calendar className="w-4 h-4" />,
  "pen-tool": <PenTool className="w-4 h-4" />,
  package: <Package className="w-4 h-4" />,
};

export default function Services() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="w-full bg-[#0A0A0F] py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2
            className={`text-white font-display text-2xl md:text-3xl tracking-wider uppercase transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Services
          </h2>
          <a
            href="#contact"
            className={`text-[#CC0000] text-xs tracking-[0.2em] uppercase flex items-center gap-1 hover:text-[#E3000F] transition-all duration-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-black border border-white/8 rounded-sm p-4 hover:border-[#CC0000]/30 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000]/10 transition-colors duration-300">
                  {iconMap[service.icon] || <Sparkles className="w-4 h-4" />}
                </div>
                <span className="text-[#CC0000] text-xs font-display tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-white text-[13px] font-medium leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-16 md:mt-20" />
    </section>
  );
}
