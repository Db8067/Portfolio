"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    name: "SPONSORA",
    cat: "SaaS / Platform",
    year: "2026",
    desc: "A platform designed to simplify sponsorship discovery and management for hackathons and events, connecting organizers, sponsors and communities.",
    align: "left", // Image on left
    color: "bg-[#F4F4F4]",
    image: "/sponsora.jpg",
    imageClass: "object-contain p-6",
    href: "https://www.intersponsora.space/"
  },
  {
    num: "02",
    name: "WANTLE INDIA",
    cat: "E-Commerce / Marketplace",
    year: "2025",
    desc: "A multi-vendor platform designed to help small brands list and sell online without needing to build their own website.",
    align: "right",
    color: "bg-[#111111]",
    textColor: "text-white",
    image: "/wantle-india.jpg"
  },
  {
    num: "03",
    name: "E-RESQ",
    cat: "IoT / AI",
    year: "2025",
    desc: "An emergency-response IoT concept using ESP32-CAM, sensors and automated alerts to improve emergency communication.",
    align: "full",
    color: "bg-[#E8491C]",
    textColor: "text-white",
    image: "/hero-new-bg.png"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".proj-header", {
        scrollTrigger: {
          trigger: ".proj-header",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-32 bg-white px-6 md:px-10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="proj-header mb-24 md:mb-40">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
            Selected<br />Projects.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className={`project-card flex flex-col ${
                proj.align === 'full' ? '' : 
                proj.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-10 md:gap-16 group hover-trigger md:cursor-none`}
              data-cursor-text="VIEW"
            >
              
              {/* Image Block */}
              <div 
                className={`relative overflow-hidden ${
                  proj.align === 'full' ? 'w-full aspect-[4/3] md:aspect-auto md:h-[70vh]' : 'w-full aspect-[4/3] md:w-[65%] md:aspect-auto md:h-[60vh]'
                } ${proj.color} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src={proj.image} 
                  alt={proj.name} 
                  fill
                  className={`${proj.imageClass ?? "object-cover"} group-hover:scale-[1.03] transition-transform duration-700 ease-out grayscale group-hover:grayscale-0`}
                />
              </div>

              {/* Text Block */}
              <div className={`flex flex-col justify-center ${proj.align === 'full' ? 'w-full md:w-1/2' : 'w-full md:w-[35%]'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-bold text-xs text-text-muted">{proj.num}</span>
                  <span className="h-[1px] w-10 bg-black/20"></span>
                  <span className="font-bold text-[10px] tracking-widest uppercase text-text-muted">{proj.cat}</span>
                </div>
                
                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors duration-300">
                  {proj.name}
                </h3>
                
                <p className="text-lg font-medium text-text-muted mb-8 leading-relaxed">
                  {proj.desc}
                </p>

                {proj.href ? (
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex w-fit items-center gap-2 font-bold text-sm tracking-widest uppercase opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <div className="mt-auto flex items-center gap-2 font-bold text-sm tracking-widest uppercase opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
