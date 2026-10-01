"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", href: "#home" },
    { name: "WORK", href: "#work" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 md:top-8 left-0 md:left-[3%] w-full md:w-[94%] z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-4 bg-canvas/80 backdrop-blur-md border-b md:border border-black/5 md:rounded-full md:shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="font-display font-bold text-base min-[360px]:text-xl tracking-tighter whitespace-nowrap">
            DEVANSH BHARDWAJ<span className="text-primary">®</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-text-main hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-main"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-canvas-dark text-canvas flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-canvas"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="font-display text-4xl font-bold tracking-tighter hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
