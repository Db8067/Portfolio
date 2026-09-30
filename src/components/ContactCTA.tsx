"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        scale: 0.95, y: 50, opacity: 0, duration: 1, ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-canvas px-6 md:px-10 border-t border-black/10">
      <div className="container mx-auto max-w-7xl">
        <div className="cta-content flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          
          <div>
            <h2 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-6">
              Let&apos;s<br />Build<br />Something.
            </h2>
            <p className="text-xl md:text-2xl font-medium text-text-muted max-w-md">
              Available for Full Stack Development, AI/ML Projects, Technical Mentorship & Collaborations.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a 
              href="mailto:devanshb3456@gmail.com" 
              className="group hover-trigger relative overflow-hidden bg-primary text-white font-bold text-lg md:text-xl py-6 px-10 flex items-center justify-between gap-8 uppercase tracking-wider"
              data-cursor-text="EMAIL"
            >
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">Let&apos;s Talk</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/devanshbhar" 
              target="_blank"
              className="group hover-trigger relative overflow-hidden border-2 border-black text-black font-bold text-lg md:text-xl py-6 px-10 flex items-center justify-between gap-8 uppercase tracking-wider"
              data-cursor-text="LINKEDIN"
            >
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">LinkedIn</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
