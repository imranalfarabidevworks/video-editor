"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Sparkles, Smartphone, Mic2 } from "lucide-react";

// --- Stat Card with Count & Infinite Border ---
const StatCard = ({ end, label, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "0px" });

  useEffect(() => {
    let start = 0;
    if (isInView) {
      const duration = 2000; 
      const increment = end / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    } else {
      setCount(0); // সেকশনের বাইরে গেলে ০ হয়ে যাবে যাতে আবার আসলে কাউন্ট হয়
    }
  }, [isInView, end]);

  return (
    <div className="relative p-[2px] rounded-3xl overflow-hidden bg-[#0c0c0c]">
      {/* 4-Side Infinite Rotating Border */}
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B2BE2_0%,transparent_50%,#8B2BE2_100%)]" />
      
      <div ref={ref} className="relative bg-[#0c0c0c] p-8 rounded-[22px] text-center h-full z-10">
        {/* Purple Count Color */}
        <h4 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#8B2BE2] drop-shadow-[0_0_15px_rgba(139,43,226,0.6)]">
          {count}+
        </h4>
        <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mt-2">
          {label}
        </p>
      </div>
    </div>
  );
};

// --- Skill Card with Rotating Border ---
const SkillCard = ({ label, icon: Icon, index }) => (
  <div className="relative p-[1.5px] rounded-2xl overflow-hidden">
    <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B2BE2_0%,transparent_50%,#8B2BE2_100%)]" />
    <div className="relative flex items-center gap-4 bg-[#0f0f0f] p-4 rounded-[14px] z-10">
      <div className="text-[#8B2BE2]"><Icon size={18} /></div>
      <span className="font-['Bebas_Neue'] text-xs tracking-widest text-white/80">{label}</span>
    </div>
  </div>
);

export default function About() {
  const skills = [
    { label: "Cash Cow Editing", icon: Play },
    { label: "Viral Reels", icon: Smartphone },
    { label: "Motion Graphics", icon: Sparkles },
    { label: "Podcast Design", icon: Mic2 },
  ];

  const stats = [
    { end: 50, label: "Projects Done" },
    { end: 30, label: "Happy Clients" },
    { end: 5, label: "Years Exp" },
    { end: 10, label: "Awards Won" },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#05000a] py-24 font-['Outfit'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl text-white">
            ABOUT <span className="text-[#8B2BE2]">ME</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Image with Inner Mask Rise Animation */}
          <div className="relative p-[2px] rounded-[42px] overflow-hidden">
            <div className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B2BE2_0%,transparent_40%,#8B2BE2_100%)]" />
            
            <div className="relative w-[280px] md:w-[350px] aspect-[4/5] rounded-[40px] bg-[#0c0c0c] overflow-hidden z-10">
               <motion.img 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                viewport={{ once: false }}
                src="https://i.ibb.co.com/s9tVz6SL/junaid.png" 
                alt="Junaid Arshad" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h3 className="font-['Bebas_Neue'] text-5xl text-white">
                I'm Junaid Arshad, <br />
                Your <span className="text-[#8B2BE2]">Pro Video Editor.</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed">
                Based in Chittagong, I specialize in high-retention video editing. 
                Every project I handle is crafted to deliver maximum visual impact.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <SkillCard key={i} {...skill} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid - Counting is FIXED here */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}