"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 bg-canvas px-6 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-3">
            <p className="about-text font-bold tracking-widest text-xs text-text-muted uppercase">
              About Me
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="about-text font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">
              I build products, <br className="hidden md:block"/>
              solve problems, <br className="hidden md:block"/>
              <span className="text-text-muted">and turn ideas <br className="hidden md:block"/>
              into working systems.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
              <p className="about-text text-lg md:text-xl font-medium leading-relaxed">
                As a Full-stack Developer at NIC, I contribute to web development projects using my expertise in full-stack and back-end architectures. My focus is on delivering high-quality, scalable solutions that align with complex technical requirements.
              </p>
              <p className="about-text text-lg md:text-xl font-medium leading-relaxed text-text-muted">
                Beyond writing code, I am deeply involved in the developer ecosystem—building communities, judging hackathons, speaking at technical events, and experimenting with AI/ML solutions to create impactful digital ecosystems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
