"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  Palette, 
  Volume2, 
  Sparkles, 
  Building2, 
  Heart,
  ArrowUpRight 
} from "lucide-react";

const services = [
  { title: "Short-Video Editing", desc: "Viral-ready reels and TikToks with high-retention cuts.", icon: Play, color: "#8B2BE2" },
  { title: "Wedding Highlights", desc: "Emotional storytelling with cinematic transitions.", icon: Heart, color: "#EC4899" },
  { title: "Corporate Ads", desc: "Professional promotional videos for brand growth.", icon: Building2, color: "#3B82F6" },
  { title: "Motion Graphics", desc: "Dynamic animations and VFX for visual impact.", icon: Sparkles, color: "#F59E0B" },
  { title: "Color Grading", desc: "Dramatic cinematic looks and color correction.", icon: Palette, color: "#10B981" },
  { title: "Sound Design", desc: "Immersive audio mixing and professional SFX.", icon: Volume2, color: "#6366F1" },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#05000a] relative overflow-hidden font-['Outfit']">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl text-white tracking-tighter">
            MY <span className="text-[#8B2BE2]">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              // --- এই অংশটি মাউস ছাড়াই সব সময় এনিমেট করবে ---
              animate={{ 
                y: [0, -15, 0], // উপরে-নিচে ভাসবে
                rotateX: [0, 3, -3, 0], // সামনে-পেছনে কাত হবে
                rotateY: [0, -3, 3, 0]  // ডানে-বামে ঘুরবে
              }}
              transition={{ 
                duration: 5, // এক একটি লুপ ৫ সেকেন্ডের হবে
                repeat: Infinity, // আজীবন চলতে থাকবে
                ease: "easeInOut",
                delay: i * 0.4 // একেকটা কার্ড একেক সময় শুরু হবে যাতে এলোমেলো এবং ন্যাচারাল লাগে
              }}
              className="group relative p-10 rounded-[45px] bg-[#0c0c0c] border border-white/5 hover:border-[#8B2BE2]/50 transition-all duration-500 shadow-2xl"
              style={{ perspective: "1000px" }}
            >
              {/* Active Glow for constant feel */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#8B2BE2]/30 to-transparent blur-xl rounded-[45px]" />
              </div>

              <div className="relative z-10">
                {/* Floating Icon */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2 
                  }}
                  className="w-16 h-16 rounded-3xl flex items-center justify-center mb-10"
                  style={{ 
                    backgroundColor: `${service.color}15`, 
                    color: service.color,
                    boxShadow: `0 0 25px ${service.color}15` 
                  }}
                >
                  <service.icon size={32} />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#8B2BE2] transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.desc}
                </p>

                <div className="mt-10 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-black tracking-[0.4em] text-[#8B2BE2] uppercase">Active Service</span>
                   <div className="w-10 h-10 rounded-full border border-[#8B2BE2]/30 flex items-center justify-center group-hover:bg-[#8B2BE2] group-hover:border-transparent transition-all">
                      <ArrowUpRight className="text-white" size={18} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#8B2BE2]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}