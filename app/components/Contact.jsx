"use client";
import { useState } from "react";
import { Phone, MapPin, Mail, Instagram, Linkedin, ArrowUp, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if(!form.name || !form.interest) return alert("Please fill the fields!");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", interest: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050208] relative overflow-hidden">
      {/* Deep Purple Ambient Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8B2BE2]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#4B0082]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#A855F7] font-bold tracking-[0.4em] text-[10px] uppercase mb-2">Get In Touch</p>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white tracking-wider uppercase">
            Ready to start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#D8B4FE]">Project?</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#8B2BE2] mt-4" />
        </div>

        {/* VIP Glassmorphism Form */}
        <div className="relative group">
          {/* Neon Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#8B2BE2] via-transparent to-[#8B2BE2] rounded-3xl blur-[2px] opacity-20 group-hover:opacity-60 transition duration-700"></div>
          
          <div className="relative bg-[#0F0716]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              
              {/* Name Field */}
              <div className="md:col-span-4 space-y-4">
                <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">
                  Your Identity
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white font-['Outfit'] py-3 text-lg transition-all duration-500 placeholder:text-white/5"
                />
              </div>

              {/* Interest Field */}
              <div className="md:col-span-5 space-y-4">
                <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">
                  Service Needed
                </label>
                <input
                  type="text"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  placeholder="e.g. Video Editing, Motion Graphics"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white font-['Outfit'] py-3 text-lg transition-all duration-500 placeholder:text-white/5"
                />
              </div>

              {/* Premium Purple Button */}
              <div className="md:col-span-3">
                <button
                  onClick={handleSend}
                  className={`w-full group flex items-center justify-center gap-3 py-5 rounded-2xl font-['Outfit'] font-bold text-sm tracking-[0.1em] transition-all duration-500 overflow-hidden relative ${
                    sent
                      ? "bg-green-500 text-white"
                      : "bg-[#8B2BE2] text-white hover:shadow-[0_0_40px_rgba(139,43,226,0.6)]"
                  }`}
                >
                  <span className="relative z-10">{sent ? "✓ DISPATCHED" : "SEND MESSAGE"}</span>
                  {!sent && <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info Strip */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-wrap justify-center gap-10">
            {/* Phone */}
            <a href="tel:+8801852220370" className="group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A0B2E] border border-[#8B2BE2]/20 flex items-center justify-center group-hover:bg-[#8B2BE2] group-hover:shadow-[0_0_20px_rgba(139,43,226,0.4)] transition-all duration-300">
                <Phone size={18} className="text-[#A855F7] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-white/60 group-hover:text-white transition-colors font-['Outfit'] tracking-wide">+880 1852 220370</p>
            </a>

            {/* Email */}
            <a href="mailto:junaidarsha2024@gmail.com" className="group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A0B2E] border border-[#8B2BE2]/20 flex items-center justify-center group-hover:bg-[#8B2BE2] group-hover:shadow-[0_0_20px_rgba(139,43,226,0.4)] transition-all duration-300">
                <Mail size={18} className="text-[#A855F7] group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm text-white/60 group-hover:text-white transition-colors font-['Outfit'] tracking-wide">junaidarsha2024@gmail.com</p>
            </a>
          </div>

          {/* Clean Social Section */}
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Network —</span>
            
            {/* Instagram */}
            <a href="#" className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-[#E4405F] transition-all duration-300 hover:scale-125">
              <Instagram size={24} />
            </a>

            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll to top */}
        <div className="mt-16 flex justify-center">
          <a href="#home" className="group flex flex-col items-center gap-2">
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#8B2BE2] to-transparent" />
            <span className="text-[9px] font-bold text-white/20 group-hover:text-[#A855F7] transition-colors uppercase tracking-[0.4em]">Top</span>
          </a>
        </div>
      </div>
    </section>
  );
}