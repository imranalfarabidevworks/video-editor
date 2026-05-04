"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Cinematic", "Motion Graphics", "Color Grade", "Short Film"];

const allVideos = [
  { id: 1,  title: "Premium Production 1",  category: "Cinematic",       duration: "2:34", tag: "4K",    hue: 170 },
  { id: 2,  title: "Premium Production 2",  category: "Motion Graphics",  duration: "0:58", tag: "Reel",   hue: 200 },
  { id: 3,  title: "Premium Production 3",  category: "Color Grade",       duration: "4:11", tag: "Film",   hue: 230 },
  { id: 4,  title: "Premium Production 4",  category: "Short Film",        duration: "1:47", tag: "BTS",    hue: 260 },
  { id: 5,  title: "Premium Production 5",  category: "Cinematic",       duration: "3:02", tag: "4K",    hue: 300 },
  { id: 6,  title: "Premium Production 6",  category: "Motion Graphics",  duration: "1:23", tag: "Loop",   hue: 170 },
  { id: 7,  title: "Premium Production 7",  category: "Color Grade",       duration: "5:15", tag: "Grade",  hue: 200 },
  { id: 8,  title: "Premium Production 8",  category: "Short Film",        duration: "0:44", tag: "Cuts",   hue: 230 },
  { id: 9,  title: "Premium Production 9",  category: "Cinematic",       duration: "2:58", tag: "4K",    hue: 260 },
  { id: 10, title: "Premium Production 10", category: "Motion Graphics",  duration: "3:30", tag: "Reel",   hue: 300 },
  { id: 11, title: "Premium Production 11", category: "Color Grade",       duration: "1:05", tag: "Edit",   hue: 170 },
  { id: 12, title: "Premium Production 12", category: "Cinematic",       duration: "4:48", tag: "Film",   hue: 200 },
];

function VideoCard({ video, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0d0d0d",
        border: `0.5px solid ${hovered ? "rgba(139,43,226,0.45)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.4s, transform 0.35s",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16/10", background: "#111", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, hsl(${video.hue},40%,12%) 0%, #0a0a0a 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered ? 1 : 0, transition: "opacity 0.4s" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, marginLeft: 3, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid #111" }} />
          </div>
        </div>
        <div style={{ position: "absolute", top: 10, left: 10, fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{num}</div>
        <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.72)", fontSize: 11, padding: "3px 8px", borderRadius: 6, color: "#ddd" }}>{video.duration}</div>
      </div>
      <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
        <div style={{ fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "#A855F7", marginBottom: 6 }}>{video.category}</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: "#fff", lineHeight: 1.4 }}>{video.title}</div>
      </div>
    </div>
  );
}

export default function AllVideos() {
  const [active, setActive] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = active === "All"
    ? allVideos
    : allVideos.filter((v) => v.category === active);

  if (!mounted) return null;

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#e8e8e8", padding: "2.5rem 1.5rem 5rem" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        .glow-text { text-shadow: 0 0 20px rgba(139, 43, 226, 0.3); }
        .nav-btn:hover { border-color: #8B2BE2 !important; color: #fff !important; background: rgba(139, 43, 226, 0.1) !important; }
      ` }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Back to Home Button */}
        <div style={{ marginBottom: "4rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="nav-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "10px 22px",
                borderRadius: "100px",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "11px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ fontSize: "16px" }}>←</span> Back to Home
            </motion.button>
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px, 15vw, 120px)", color: "#fff", marginBottom: "1rem" }}
            className="glow-text"
          >
            All <span style={{ color: "#8B2BE2" }}>PORTFOLIO</span>
          </motion.h1>
          <p style={{ color: "rgba(255,255,255,0.45)", margin: "0 auto", maxWidth: "550px" }}>A curated selection of cinematic excellence.</p>
        </div>

        {/* Filter Categories */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: "4rem", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActive(cat)} 
              style={{ 
                padding: "8px 24px", 
                borderRadius: 100, 
                border: `1px solid ${active === cat ? "#8B2BE2" : "rgba(255,255,255,0.1)"}`, 
                background: active === cat ? "#8B2BE2" : "transparent", 
                color: "#fff", 
                cursor: "pointer",
                fontSize: "13px",
                transition: "all 0.3s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          {filtered.map((video, i) => (
            <VideoCard key={video.id} video={video} index={allVideos.indexOf(video)} />
          ))}
        </div>
      </div>
    </main>
  );
}