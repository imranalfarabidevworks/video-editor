"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Video, Zap, Layers, Volume2, ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, desc, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative group overflow-hidden rounded-[32px] bg-[#0c0c0c] p-[2px]"
  >
    {/* Always Spinning Border Beam */}
    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0,transparent_75%,#8B2BE2_100%)] animate-[spin_5s_linear_infinite]" />
    
    <div className="relative z-10 bg-[#0f0f0f] rounded-[30px] p-8 h-full flex flex-col justify-between group-hover:bg-[#0f0f0f]/80 transition-all duration-500">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-[#8B2BE2]/10 flex items-center justify-center text-[#8B2BE2] mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} />
        </div>
        <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-widest mb-4 group-hover:text-[#8B2BE2] transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed font-light">
          {desc}
        </p>
      </div>
      
      <div className="mt-8 flex items-center gap-2 text-[#8B2BE2] opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Learn More</span>
        <ArrowUpRight size={14} />
      </div>
    </div>
  </motion.div>
);

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const serviceList = [
    { title: "CASH COW EDITING", desc: "High-retention editing for YouTube automation channels that keeps viewers hooked.", icon: Video },
    { title: "VIRAL REELS", desc: "Fast-paced, high-energy edits for TikTok and IG Reels designed for the algorithm.", icon: Zap },
    { title: "MOTION GRAPHICS", desc: "Advanced 2D/3D animations and dynamic typography to elevate your message.", icon: Layers },
    { title: "SOUND DESIGN", desc: "Immersive SFX and cinematic audio mixing for a complete sensory experience.", icon: Volume2 },
  ];

  if (!isMounted) return null;

  return (
    <section className="bg-[#05000a] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl text-white leading-none">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2BE2] to-[#c084fc]">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}