"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "FULL STACK\nDEVELOPMENT",
    desc: "End-to-end web applications — from pixel-perfect frontends to robust, scalable backend systems. React, Next.js, Node.js, REST APIs, and databases.",
    tags: ["React", "Next.js", "Node.js", "SQL"],
  },
  {
    num: "02",
    title: "AI / ML\nSOLUTIONS",
    desc: "Building and integrating intelligent systems — predictive models, data analysis pipelines, and AI-powered features that turn data into decisions.",
    tags: ["Python", "ML", "Data Analysis", "APIs"],
  },
  {
    num: "03",
    title: "PRODUCT\nDEVELOPMENT",
    desc: "From zero to shipped — rapid prototyping, SaaS architecture, multi-vendor platforms, and startup-ready product engineering.",
    tags: ["SaaS", "MVP", "Architecture"],
  },
  {
    num: "04",
    title: "HACKATHON &\nCOMMUNITY",
    desc: "Mentoring builders, judging hackathons, building developer communities, and creating ecosystems where ideas become working systems.",
    tags: ["Mentorship", "Events", "Community"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".service-item", {
        scrollTrigger: { trigger: ".service-header", start: "top 50%" },
        y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-canvas px-6 md:px-10 border-t border-black/5">
      <div className="container mx-auto max-w-7xl">

        <div className="service-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
            What I<br />Build.
          </h2>
          <p className="text-lg font-medium text-text-muted max-w-xs md:text-right">
            Focused on outcomes, not just output.
          </p>
        </div>

        <div className="border-t border-black/10">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-item group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-10 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-300 cursor-default"
            >
              <span className="font-bold text-xs text-text-muted/60 w-10 flex-shrink-0">{s.num}</span>

              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter whitespace-pre-line leading-[1] w-full md:w-64 flex-shrink-0 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>

              <p className="flex-1 text-lg font-medium text-text-muted leading-relaxed">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 flex-shrink-0 md:w-56">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] font-bold tracking-widest uppercase border border-black/15 px-3 py-1 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>

              <ArrowUpRight
                size={22}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-primary"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
