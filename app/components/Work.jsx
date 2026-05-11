"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, ArrowUpRight, MonitorPlay, Sparkles, X } from "lucide-react";

const featuredVideos = [
  { 
    id: 1, 
    title: "Buraq Nezala Message Oil Ad", 
    category: "Corporate & Promotional", 
    embedId: "PiUBxf3C0uw", 
    desc: "Professional advertisement editing for Buraq Nezala."
  },
  { 
    id: 2, 
    title: "Cinematic Travel Story", 
    category: "Short-Video Editing", 
    embedId: "6_p8B92Y9e8", 
    desc: "High-retention storytelling with smooth transitions."
  },
  { 
    id: 3, 
    title: "Wedding Highlight Teaser", 
    category: "Wedding & Event", 
    embedId: "K_I0clkpS8E", 
    desc: "Emotional color grading and cinematic pacing."
  }
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="work" className="py-32 bg-[#05000a] relative overflow-hidden font-['Outfit']">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#8B2BE2]/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-[#8B2BE2]" size={20} />
              <span className="text-[#8B2BE2] text-xs font-black tracking-[0.5em] uppercase italic">Visual Masterpieces</span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-8xl md:text-[11rem] text-white tracking-tighter leading-[0.85]">
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2BE2] via-[#d896ff] to-[#8B2BE2] bg-[length:200%_auto] animate-gradient">WORKS</span>
            </h2>
          </motion.div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuredVideos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 group-hover:border-[#8B2BE2]/50 transition-all duration-500 shadow-2xl">
                <img 
                  src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/20 transition-all">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#8B2BE2] transition-all duration-500 shadow-2xl">
                    <Play className="text-white fill-white ml-1" size={28} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">{video.category}</span>
                </div>
              </div>

              <div className="mt-8 px-2">
                <h3 className="text-3xl font-bold text-white group-hover:text-[#8B2BE2] transition-colors">{video.title}</h3>
                <p className="text-white/30 text-base mt-2 italic">"{video.desc}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIP SHOW ALL BUTTON --- */}
        <div className="mt-32 text-center">
          <Link href="/all-videos">
            <motion.button whileHover={{ scale: 1.05 }} className="relative group p-[2px] rounded-full overflow-hidden inline-flex items-center justify-center">
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B2BE2_0%,transparent_50%,#8B2BE2_100%)]" />
              <div className="relative px-12 py-5 bg-[#05000a] rounded-full flex items-center gap-4 transition-all group-hover:bg-transparent">
                <span className="font-['Bebas_Neue'] text-2xl text-white tracking-widest">VIEW ALL PROJECTS</span>
                <ArrowUpRight size={20} className="text-[#8B2BE2] group-hover:text-white" />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* --- ULTRA VIP VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/90"
          >
            {/* Background Close Overlay */}
            <div className="absolute inset-0" onClick={() => setSelectedVideo(null)} />

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-[30px] overflow-hidden bg-black shadow-[0_0_100px_rgba(139,43,226,0.5)] border border-white/10"
            >
              {/* Close Button (VIP Look) */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-[#8B2BE2] backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all group"
              >
                <X className="text-white group-hover:rotate-90 transition-transform" size={24} />
              </button>

              {/* YouTube Iframe */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s linear infinite; }
      `}</style>
    </section>
  );
}