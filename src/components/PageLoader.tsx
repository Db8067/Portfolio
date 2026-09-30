"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [phase, setPhase] = useState(0); // 0 = name, 1 = role, 2 = done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 4;
      });
    }, 24);

    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1400);

    return () => {
      clearInterval(timer);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-canvas-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.h1
                  key="name"
                  className="font-display text-5xl md:text-8xl font-bold uppercase text-canvas tracking-tighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  DEVANSH<span className="text-primary">®</span>
                </motion.h1>
              )}
              {phase === 1 && (
                <motion.h2
                  key="role"
                  className="font-display text-2xl md:text-4xl font-bold uppercase text-canvas/60 tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Full Stack Developer
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
