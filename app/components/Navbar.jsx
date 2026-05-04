"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু কন্ট্রোল করার জন্য

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const menuItems = ['Home', 'About', 'Contact'];

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#080808]/90 py-3 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="relative w-12 h-12 flex items-center justify-center border-2 border-[#8B2BE2] rounded-xl bg-[#080808]"
          >
            <span className="text-[16px] font-black text-white">JA</span>
          </motion.div>

          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              JUNAID <span className="text-[#8B2BE2]">ARSHAD</span>
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#8B2BE2] hover:text-white transition-all">
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#080808] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest text-white/70 hover:text-[#8B2BE2]"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#8B2BE2] text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}