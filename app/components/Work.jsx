"use client";
import Link from "next/link";

const featuredVideos = [
  { id: 1, title: "Premium Brand Story", category: "Cinematic Editing", thumbnail: "https://via.placeholder.com/600x400" },
  { id: 2, title: "Viral Luxury Reel", category: "Motion Graphics", thumbnail: "https://via.placeholder.com/600x400" },
  { id: 3, title: "High-End Commercial", category: "Color Grading", thumbnail: "https://via.placeholder.com/600x400" },
];

export default function Work() {
  return (
    <section id="projects" className="py-32 bg-[#05000f] relative overflow-hidden">
      {/* Background VIP Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#8B2BE2]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4B0082]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* VIP Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#8B2BE2]"></span>
              <span className="text-[#8B2BE2] font-bold tracking-[0.5em] uppercase text-[11px]">
                Portfolio Excellence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2BE2] via-[#d49dff] to-[#4B0082]">WORKS</span>
            </h2>
          </div>
          <p className="text-white/40 font-medium max-w-xs text-sm leading-relaxed border-l border-[#8B2BE2]/30 pl-6">
            A curated collection of high-end visual stories and cinematic experiences crafted for global brands.
          </p>
        </div>

        {/* ৩টি VIP কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <div key={video.id} className="group relative">
              {/* Floating Glow on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-t from-[#8B2BE2] to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              
              <div className="relative overflow-hidden rounded-[35px] bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-[#8B2BE2]/40 group-hover:-translate-y-4">
                
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-[25px]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  
                  {/* Glass Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-700 shadow-[0_0_50px_rgba(139,43,226,0.3)]">
                       <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="text-[9px] font-bold text-white tracking-widest uppercase">{video.category}</span>
                  </div>
                </div>
                
                {/* Card Info */}
                <div className="mt-8 mb-2 flex items-center justify-between group/info">
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    {video.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#8B2BE2] transition-colors duration-500">
                     <span className="text-white text-lg">↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-24 flex justify-center">
          <Link href="/all-videos" className="group relative px-16 py-6 bg-white text-black font-black text-xs tracking-[0.5em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:tracking-[0.7em] hover:shadow-[0_0_40px_rgba(139,43,226,0.5)]">
             <span className="relative z-10">VIEW ALL SHOWREELS</span>
             {/* Dynamic background fill */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#8B2BE2] to-[#4B0082] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">VIEW ALL Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}