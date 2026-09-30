"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".exp-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(".exp-item", {
        scrollTrigger: { trigger: ".exp-header", start: "top 50%" },
        x: -30, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-32 bg-canvas px-6 md:px-10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="exp-header mb-24 max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Experience<br />That Moves<br />From Idea<br />To Execution.
          </h2>
        </div>

        <div className="flex flex-col border-t border-black/10">
          
          {/* Item 1 */}
          <div className="exp-item group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-black/10 hover:bg-black/5 transition-colors duration-500">
            <div className="md:col-span-3">
              <span className="font-bold tracking-widest text-[10px] md:text-xs text-text-muted uppercase">JUL 2025 — PRESENT</span>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">National Informatics Centre (NIC)</h3>
                <p className="text-lg font-bold text-text-muted">Full Stack Developer</p>
              </div>
              <div className="flex-1">
                <ul className="text-lg font-medium text-text-muted leading-relaxed space-y-2">
                  <li>• Developing full stack applications within a government tech environment.</li>
                  <li>• Integrating AI/ML workflows to identify user behavior patterns.</li>
                  <li>• Focus on scalable frontend development and complex data analysis.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="exp-item group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-black/10 hover:bg-black/5 transition-colors duration-500">
            <div className="md:col-span-3">
              <span className="font-bold tracking-widest text-[10px] md:text-xs text-text-muted uppercase">MAY 2024 — JUN 2025</span>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">Glocal View</h3>
                <p className="text-lg font-bold text-text-muted">Full Stack Developer</p>
              </div>
              <div className="flex-1">
                <ul className="text-lg font-medium text-text-muted leading-relaxed space-y-2">
                  <li>• Built a real-time multi-vendor SaaS platform.</li>
                  <li>• Improved operational efficiency for 25+ business owners.</li>
                  <li>• Handled CRM onboarding and lead generation tech.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
