"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest(".hover-trigger")) {
        setIsHovered(true);
        const trigger = target.closest(".hover-trigger") as HTMLElement;
        if (trigger && trigger.dataset.cursorText) {
          setHoverText(trigger.dataset.cursorText);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center bg-primary rounded-full mix-blend-difference text-white font-sans text-[10px] uppercase font-bold tracking-widest"
      animate={{
        x: mousePosition.x - (isHovered && hoverText ? 40 : isHovered ? 24 : 8),
        y: mousePosition.y - (isHovered && hoverText ? 40 : isHovered ? 24 : 8),
        width: isHovered && hoverText ? 80 : isHovered ? 48 : 16,
        height: isHovered && hoverText ? 80 : isHovered ? 48 : 16,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    >
      {isHovered && hoverText && <span>{hoverText}</span>}
    </motion.div>
  );
}
