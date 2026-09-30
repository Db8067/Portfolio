"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );
    }, containerRef);

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(textRef.current, { x: xPos * 2, y: yPos * 2, duration: 1, ease: "power2.out" });
      gsap.to(cardRef.current, { x: xPos * -1.5, y: yPos * -1.5, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-[90vh] md:min-h-screen bg-primary flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "100px 100px"
      }}></div>

      {/* Giant Background Typography */}
      <h1 
        ref={textRef}
        className="absolute w-full text-center font-display text-[15vw] leading-none font-bold text-white/20 select-none tracking-tighter mix-blend-overlay"
      >
        BUILDER
      </h1>

      <div className="container relative z-10 mx-auto px-6 md:px-10 h-full flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0 gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-white">
          <p className="hero-element font-bold tracking-widest text-xs mb-6 opacity-80">
            © 2026 // PORTFOLIO
          </p>
          <h2 className="hero-element font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
            Building<br />Digital<br />Products
          </h2>
          <p className="hero-element mt-6 max-w-md text-lg md:text-xl font-medium opacity-90">
            At the intersection of code, AI & creativity.
          </p>
        </div>

        {/* Right Portrait & Card */}
        <div className="flex-1 relative w-full h-[50vh] md:h-[70vh] flex items-end justify-center md:justify-end">
          <div className="hero-element relative w-[80%] h-full">
            {/* The portrait should ideally have a transparent background or be creatively masked. For now, object-cover masking. */}
            <Image 
              src="/profile.jpg" 
              alt="Devansh Bhardwaj" 
              fill 
              className="object-cover object-top filter contrast-125 saturate-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
            />
          </div>

          {/* Floating Card */}
          <div 
            ref={cardRef}
            className="hero-element absolute bottom-10 -left-4 md:-left-10 bg-canvas text-text-main p-6 shadow-2xl w-64 border border-black/5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative grayscale">
                <Image src="/profile.jpg" alt="Devansh" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm leading-tight">DEVANSH BHARDWAJ</h4>
                <p className="text-[10px] uppercase font-bold text-text-muted mt-1">Full Stack Developer</p>
              </div>
            </div>
            <div className="text-xs font-medium border-t border-black/10 pt-3">
              AI / ML • Product Builder
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
