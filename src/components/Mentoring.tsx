"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mentions = [
  { org: "MICROSOFT", role: "Speaker" },
  { org: "PAYTM", role: "Mentor" },
  { org: "UNSTOP", role: "Judge" },
  { org: "MASTERS' UNION", role: "Speaker" },
  { org: "SIH ECOSYSTEM", role: "Mentor" },
  { org: "IIT BHU", role: "Winner — Music" },
  { org: "COLLEGES & UNIVERSITIES", role: "Guest Speaker" },
];

const activities = [
  { label: "HACKATHON JUDGE", count: "16+" },
  { label: "HACKATHON MENTOR", count: "25+" },
  { label: "EVENTS ORGANIZED", count: "30+" },
  { label: "COMMUNITY MEMBERS", count: "700+" },
];

export default function Mentoring() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".mentor-title", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
      });
      gsap.from(".mentor-mention", {
        scrollTrigger: { trigger: ".mentor-title", start: "top 50%" },
        x: -30, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power2.out",
      });
      gsap.from(".mentor-stat", {
        scrollTrigger: { trigger: ".mentor-title", start: "top 50%" },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-canvas-dark text-canvas px-6 md:px-10">
      <div className="container mx-auto max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 mb-20">
          <div className="md:col-span-7 mentor-title">
            <p className="font-bold tracking-widest text-[11px] text-white/40 uppercase mb-6">Beyond The Code</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Builder<br />Beyond<br />The Screen.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 md:justify-end">
            {activities.map((a, i) => (
              <div key={i} className="mentor-stat flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-bold tracking-widest text-[11px] text-white/50 uppercase">{a.label}</span>
                <span className="font-display text-3xl font-bold text-primary">{a.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal scrolling mentions list */}
        <div className="flex flex-wrap gap-4 mt-10">
          {mentions.map((m, i) => (
            <div
              key={i}
              className="mentor-mention group border border-white/10 px-6 py-4 hover:border-primary transition-colors duration-300 cursor-default"
            >
              <p className="font-display font-bold text-xl uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{m.org}</p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mt-1">{m.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
