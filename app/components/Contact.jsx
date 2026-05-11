"use client";
import { useState } from "react";
import { Phone, Mail, Instagram, Linkedin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    // তোমার Web3Forms Access Key এখানে বসাও
    formData.append("access_key", "dbee4ccc-2200-4a59-aa82-d03931d274f6"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050208] relative overflow-hidden font-['Outfit']">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8B2BE2]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-[#A855F7] font-bold tracking-[0.4em] text-[10px] uppercase mb-2">Get In Touch</p>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white tracking-wider uppercase">
            Ready to start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#D8B4FE]">Project?</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#8B2BE2] mt-4" />
        </div>

        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#8B2BE2] via-transparent to-[#8B2BE2] rounded-3xl blur-[2px] opacity-20 group-hover:opacity-60 transition duration-700"></div>
          
          <div className="relative bg-[#0F0716]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 shadow-2xl">
            
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
                
                {/* Name Field */}
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">Your Identity</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white py-3 text-lg transition-all placeholder:text-white/5"
                  />
                </div>

                {/* Email Field - এটি নতুন যোগ করা হয়েছে */}
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">Email Address</label>
                  <input
                    type="email"
                    name="email" // Web3Forms স্বয়ংক্রিয়ভাবে রিপ্লাই অ্যাড্রেস হিসেবে এটি ধরবে
                    required
                    placeholder="example@mail.com"
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white py-3 text-lg transition-all placeholder:text-white/5"
                  />
                </div>

                {/* Interest Field */}
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">Service Needed</label>
                  <input
                    type="text"
                    name="interest"
                    required
                    placeholder="Video Editing, etc."
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white py-3 text-lg transition-all placeholder:text-white/5"
                  />
                </div>
              </div>

              {/* Message/Project Detail Field */}
              <div className="space-y-4">
                <label className="text-[11px] font-black text-[#A855F7] tracking-[0.2em] uppercase">Project Details (Optional)</label>
                <textarea
                  name="message"
                  rows="1"
                  placeholder="Tell me a bit about your vision..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#A855F7] outline-none text-white py-3 text-lg transition-all placeholder:text-white/5 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`min-w-[240px] group flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-sm tracking-[0.1em] transition-all duration-500 relative overflow-hidden ${
                    status === "success" ? "bg-green-600" : "bg-[#8B2BE2] hover:shadow-[0_0_40px_rgba(139,43,226,0.6)]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : status === "success" ? (
                      "✓ SENT SUCCESSFULLY"
                    ) : (
                      <>SEND PROPOSAL <Send size={16} /></>
                    )}
                  </span>
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs mt-4 uppercase tracking-widest text-center">Something went wrong. Please try again!</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Strips */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 text-white/60">
          <div className="flex flex-wrap justify-center gap-10">
            <a href="tel:+8801852220370" className="flex items-center gap-4 hover:text-white transition-all group">
              <div className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-[#8B2BE2]/20 flex items-center justify-center group-hover:bg-[#8B2BE2] transition-all"><Phone size={16}/></div>
              <span className="text-sm">+880 1852 220370</span>
            </a>
            <a href="mailto:junaidarsha2024@gmail.com" className="flex items-center gap-4 hover:text-white transition-all group">
              <div className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-[#8B2BE2]/20 flex items-center justify-center group-hover:bg-[#8B2BE2] transition-all"><Mail size={16}/></div>
              <span className="text-sm">junaidarsha2024@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Instagram className="hover:text-[#E4405F] cursor-pointer transition-all hover:scale-125" size={22} />
            <Linkedin className="hover:text-[#0A66C2] cursor-pointer transition-all hover:scale-125" size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}