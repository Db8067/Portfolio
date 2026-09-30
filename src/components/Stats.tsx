"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "3+", label: "YEARS BUILDING" },
  { value: "25+", label: "HACKATHONS MENTORED" },
  { value: "16+", label: "HACKATHONS JUDGED" },
  { value: "30+", label: "EVENTS ORGANIZED" },
  { value: "700+", label: "COMMUNITY MEMBERS" },
  { value: "SPEAKER", label: "MICROSOFT • PAYTM • UNSTOP" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-canvas px-6 md:px-10 border-t border-black/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-y-16 gap-x-10 justify-between items-end">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-item flex flex-col ${i === 5 ? 'w-full md:w-auto mt-10 md:mt-0' : ''}`}>
              <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-2 text-primary">
                {stat.value}
              </h3>
              <p className="font-bold tracking-widest text-[10px] md:text-xs text-text-muted uppercase max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
