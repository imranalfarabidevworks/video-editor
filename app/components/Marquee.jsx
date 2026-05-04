"use client";
import React, { useState, useEffect } from "react";

export default function InfiniteMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = [
    "CASH COW EDITING",
    "VIRAL REELS",
    "MOTION GRAPHICS",
    "CINEMATIC LOOK",
    "STORYTELLING",
    "SOUND DESIGN",
    "COLOR GRADING"
  ];

  if (!isMounted) return null;

  return (
    <div className="bg-[#05000a] border-y border-white/5 py-6 md:py-8 overflow-hidden flex relative">
      {/* Moving Text Layer */}
      <div className="flex whitespace-nowrap animate-marquee-slow">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center">
            {items.map((text, idx) => (
              <div key={idx} className="flex items-center mx-8">
                {/* Medium Size Font with Constant Glow */}
                <span className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#8B2BE2] uppercase tracking-wider select-none drop-shadow-[0_0_15px_rgba(139,43,226,0.8)]">
                  {text}
                </span>
                {/* Floating Particle Divider */}
                <div className="w-2 h-2 bg-white/20 rounded-full mx-8" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          /* গতি আরও কমানো হয়েছে (45s) */
          animation: marquee 45s linear infinite;
        }
        /* Font Import - এটা তোমার layout.js এ থাকলে ভালো, নাহলে এখানেও কাজ করবে */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap');
      `}</style>
    </div>
  );
}