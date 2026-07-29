/*
 * Contact Section: "Let's Work Together" footer with contact info and device mockup
 * Style: Dark charcoal bg, large heading, contact details with icons
 * Animation: Scroll-triggered fade-in
 */
import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data";
import { useInView } from "@/hooks/useInView";

const LAPTOP_IMAGE = "/manus-storage/laptop-mockup_5756b8f1.jpg";
const LOGO_IMAGE = "/manus-storage/logo-icon_2e16302f.png";

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  return (
    <footer id="contact" className="w-full bg-[#0A0A0F] py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Heading + CTA */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-white font-display text-3xl md:text-5xl tracking-wider uppercase mb-4 leading-[1.05]">
              Let&apos;s Work<br />Together
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">
              I&apos;m currently open for new projects and collaborations.
              Let&apos;s create something amazing that drives results.
            </p>
            <div className="flex items-center gap-3 text-[#CC0000] text-[11px] tracking-[0.2em] uppercase font-bold">
              <div className="w-8 h-8 rounded-full border border-[#CC0000] flex items-center justify-center hover:bg-[#CC0000]/10 transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
              {contactInfo.availability}
            </div>
          </div>

          {/* CENTER: Contact Info */}
          <div
            className={`lg:col-span-4 flex flex-col gap-5 pt-2 transition-all duration-700 delay-150 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#CC0000] shrink-0" />
              <span className="text-white/70 text-sm">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#CC0000] shrink-0" />
              <span className="text-white/70 text-sm">{contactInfo.website}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#CC0000] shrink-0" />
              <span className="text-white/70 text-sm">Contact via email</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#CC0000] shrink-0" />
              <span className="text-white/70 text-sm">{contactInfo.location}</span>
            </div>
          </div>

          {/* RIGHT: Laptop Mockup */}
          <div
            className={`lg:col-span-4 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative w-full max-w-xs">
              <img
                src={LAPTOP_IMAGE}
                alt="Portfolio preview"
                className="w-full h-auto opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMAGE} alt="Bilal Ali" className="w-7 h-7" />
            <span className="text-white/30 text-[11px] tracking-wider">
              &copy; 2025 Bilal Ali. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-[11px] hover:text-[#CC0000] transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-white/30 text-[11px] hover:text-[#CC0000] transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
