"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ক্লিক ফাংশন - 'work' আইডিতে স্মুথলি স্ক্রল করবে
  const handleScrollToWorks = (e) => {
    e.preventDefault();
    const worksSection = document.getElementById("work");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ---------- Particle network canvas ---------- */
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.6 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,43,226,${a})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,43,226,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [mounted]);

  /* ---------- Count-up for stats ---------- */
  useEffect(() => {
    if (!mounted) return;
    const countUp = (id, target, suffix, duration) => {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        el.textContent = Math.round(start) + suffix;
      }, 16);
    };
    const t = setTimeout(() => {
      countUp("stat-projects", 150, "+", 1500);
      countUp("stat-clients", 80, "+", 1400);
      countUp("stat-years", 5, "+", 1000);
    }, 1500);
    return () => clearTimeout(t);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;700&display=swap');

        @keyframes gridScroll {
          0%   { background-position: 0 0; }
          100% { background-position: 55px 55px; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitch1 {
          0%,90%,100% { transform: translateX(0); }
          92% { transform: translateX(-4px); }
          94% { transform: translateX(4px); }
          96% { transform: translateX(-2px); }
        }
        @keyframes glitch2 {
          0%,90%,100% { transform: translateX(0); }
          92% { transform: translateX(4px); }
          94% { transform: translateX(-4px); }
          96% { transform: translateX(2px); }
        }

        .anim-label   { opacity:0; animation: fadeUp 0.8s 0.3s ease forwards; }
        .anim-heading { opacity:0; animation: fadeUp 1s 0.7s ease forwards; }
        .anim-desc    { opacity:0; animation: fadeUp 0.8s 1s ease forwards; }
        .anim-btns    { opacity:0; animation: fadeUp 0.8s 1.2s ease forwards; }
        .anim-stats   { opacity:0; animation: fadeUp 0.8s 1.5s ease forwards; }

        .glitch-text { position: relative; }
        .glitch-text::before, .glitch-text::after {
          content: 'ALCHEMIST';
          position: absolute;
          top: 0; left: 0; width: 100%;
          background: linear-gradient(180deg, #fff 0%, #8B2BE2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glitch-text::before { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); animation: glitch1 6s 2s infinite; }
        .glitch-text::after { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); animation: glitch2 6s 2.1s infinite; }

        .btn-primary {
          position: relative;
          padding: 18px 45px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.35em;
          color: #fff;
          text-transform: uppercase;
          transition: all 0.3s;
          z-index: 50; /* এটি নিশ্চিত করে বাটন ক্যানভাসের উপরে আছে */
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #8B2BE2;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          transition: all 0.4s;
          z-index: -1;
        }
        .btn-primary:hover::before {
          background: #a040ff;
          box-shadow: 0 0 40px rgba(139,43,226,0.8);
          transform: scale(1.05);
        }
        .btn-primary:active { transform: scale(0.95); }
      `}</style>

      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#05000f" }}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(139,43,226,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(139,43,226,0.12) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
            animation: "gridScroll 18s linear infinite",
          }}
        />

        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />

        {/* Content Layer */}
        <div className="relative text-center px-6 mt-12" style={{ zIndex: 20 }}>
          <div className="anim-label flex items-center justify-center gap-4 mb-6">
            <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,transparent,#8B2BE2)" }} />
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.5em", color: "#8B2BE2", textTransform: "uppercase" }}>
              Mastering Motion & Light
            </span>
            <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,#8B2BE2,transparent)" }} />
          </div>

          <div className="anim-heading mb-5">
            <h1 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(48px,10vw,100px)", fontWeight: 900, color: "#fff", lineHeight: 0.9 }}>
              THE VISUAL
            </h1>
            <div className="glitch-text" style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(48px,10vw,100px)", fontWeight: 900, lineHeight: 0.9, background: "linear-gradient(180deg,#fff 0%,#8B2BE2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ALCHEMIST
            </div>
          </div>

          <p className="anim-desc max-w-xl mx-auto mb-10" style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            Crafting high-end cinematic experiences through advanced video editing,
            motion graphics & color grading. Elevating brands one frame at a time.
          </p>

          <div className="anim-btns">
            <button 
              className="btn-primary" 
              onClick={handleScrollToWorks}
            >
              <span>▶ Explore Works</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="anim-stats absolute flex gap-10" style={{ bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
          {[
            { id: "stat-projects", label: "Projects" },
            { id: "stat-clients", label: "Clients" },
            { id: "stat-years", label: "Years Exp." },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-10">
              {i > 0 && <div style={{ width: 1, height: 40, background: "linear-gradient(180deg,transparent,rgba(139,43,226,0.5),transparent)" }} />}
              <div className="text-center">
                <div id={s.id} style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>0+</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 10, color: "#8B2BE2", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}