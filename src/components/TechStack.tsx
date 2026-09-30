"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stacks = [
  { title: "FRONTEND", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "BACKEND", items: ["Node.js", "Express", "REST APIs", "SQL", "Supabase"] },
  { title: "AI / ML", items: ["Python", "Machine Learning", "Data Analysis", "Predictive Models"] },
  { title: "TOOLS", items: ["Git", "GitHub", "AWS", "Docker", "Vercel"] },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".tech-title", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(".tech-group", {
        scrollTrigger: { trigger: ".tech-title", start: "top 60%" },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-canvas-dark text-canvas px-6 md:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10">
          
          <div className="md:col-span-5 tech-title">
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              What I<br />Work With.
            </h2>
            <p className="mt-8 text-text-muted text-lg font-medium max-w-sm">
              I select the right tools for the problem, balancing performance, scalability, and developer experience.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col gap-12 md:gap-16">
            {stacks.map((stack, i) => (
              <div key={i} className="tech-group flex flex-col md:flex-row gap-4 md:gap-10 border-t border-white/10 pt-6">
                <div className="w-40 font-bold tracking-widest text-[10px] md:text-xs text-text-muted uppercase">
                  {stack.title}
                </div>
                <div className="flex-1 flex flex-wrap gap-4">
                  {stack.items.map((item, j) => (
                    <span 
                      key={j} 
                      className="text-lg md:text-2xl font-display font-medium hover:text-primary transition-colors cursor-default"
                    >
                      {item}{j !== stack.items.length - 1 ? <span className="text-white/20 ml-4">/</span> : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
