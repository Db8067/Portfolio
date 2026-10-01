"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BeyondCode() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".beyond-title", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });
      
      // Floating words effect
      gsap.to(".floating-word", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
        
        <h2 className="beyond-title font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-20 mix-blend-overlay opacity-80">
          More Than<br />Just Code.
        </h2>

        <div className="relative h-[26rem] md:h-[50vh] w-full max-w-4xl mx-auto">
          <span className="floating-word absolute top-0 left-0 text-3xl md:left-10 md:text-6xl font-display font-bold uppercase">Music</span>
          <span className="floating-word absolute top-[18%] right-0 text-2xl md:top-1/4 md:right-10 md:text-5xl font-display font-bold uppercase opacity-80">Theatre</span>
          <span className="floating-word absolute top-[40%] left-0 text-4xl md:top-1/2 md:left-20 md:text-7xl font-display font-bold uppercase opacity-90">Community</span>
          <span className="floating-word absolute bottom-[26%] right-0 text-3xl md:bottom-1/4 md:right-20 md:text-6xl font-display font-bold uppercase">Photography</span>
          <span className="floating-word absolute bottom-0 left-0 text-2xl md:left-1/4 md:text-5xl font-display font-bold uppercase opacity-70">Badminton</span>
          <span className="floating-word absolute top-[28%] right-0 text-xl md:top-1/3 md:right-auto md:left-1/2 md:-translate-x-1/2 md:text-4xl font-display font-bold uppercase opacity-60">Beatboxing</span>
          <span className="floating-word absolute bottom-[12%] left-0 text-2xl md:bottom-10 md:left-auto md:right-1/3 md:text-7xl font-display font-bold uppercase opacity-90 text-stroke">Band Ibadat</span>
        </div>

      </div>
    </section>
  );
}
