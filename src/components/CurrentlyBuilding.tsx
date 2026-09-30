"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "SPONSORA", "✦", "WANTLE INDIA", "✦", "BUILD WITH DEV", "✦", "AI / ML EXPERIMENTS", "✦",
  "SPONSORA", "✦", "WANTLE INDIA", "✦", "BUILD WITH DEV", "✦", "AI / ML EXPERIMENTS", "✦",
];

export default function CurrentlyBuilding() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="mb-8 px-6 md:px-10 container mx-auto max-w-7xl">
        <p className="font-bold tracking-widest text-[11px] text-white/60 uppercase">Currently Building</p>
      </div>

      {/* Ticker */}
      <div className="relative flex overflow-hidden select-none" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <motion.div
          ref={trackRef}
          className="flex gap-8 flex-shrink-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, i) => (
            <span
              key={i}
              className={`font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter whitespace-nowrap ${
                item === "✦" ? "text-white/30" : "text-white"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
