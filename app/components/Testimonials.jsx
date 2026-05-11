"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Fahim Adnan",
    role: "Owner of Buraq Oil",
    initials: "FA",
    text: "Junaid is a magician! My retention rate went up by 40% after he started editing my videos. Absolutely mind-blowing results.",
    avatarColor: "rgba(139,43,226,0.1)",
    textColor: "#c084fc",
  },
  {
    name: "Masudur Rahman",
    role: "Owner Of Muslim Child Acadamy",
    initials: "MR",
    text: "The motion graphics and pacing are world-class. Best editor I've ever worked with — completely transformed my channel.",
    avatarColor: "rgba(168,85,247,0.1)",
    textColor: "#a855f7",
  },
  {
    name: "David Chen",
    role: "Marketing Head",
    initials: "DC",
    text: "Professional, fast, and has a great eye for detail. Highly recommended — our brand videos have never looked better.",
    avatarColor: "rgba(192,132,252,0.1)",
    textColor: "#8B2BE2",
  },
];

export default function Testimonials() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .vip-section { position: relative; overflow: hidden; }

        .vip-glow::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(139,43,226,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: vip-pulse 4s ease-in-out infinite;
        }

        @keyframes vip-pulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }

        .vip-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: vip-float linear infinite;
          opacity: 0;
        }

        @keyframes vip-float {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 0.6; transform: translateY(-20px) scale(1); }
          90% { opacity: 0.2; }
          100% { transform: translateY(-300px) scale(0.5); opacity: 0; }
        }

        .vip-fade-up {
          opacity: 0;
          animation: vip-fadeup 0.7s ease forwards;
        }

        @keyframes vip-fadeup {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .vip-card {
          position: relative;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          padding: 36px 32px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
        }

        .vip-card.card-visible {
          animation: vip-card-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        @keyframes vip-card-in {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .vip-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          background: linear-gradient(135deg, transparent, rgba(139,43,226,0.3), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .vip-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
          transition: left 0.7s ease;
          pointer-events: none;
        }

        .vip-card:hover::before { opacity: 1; }
        .vip-card:hover::after { left: 150%; }
        .vip-card:hover {
          border-color: rgba(139,43,226,0.4);
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(139,43,226,0.15), 0 0 0 1px rgba(139,43,226,0.1);
        }

        .vip-quote { transition: transform 0.3s ease, color 0.3s ease; }
        .vip-card:hover .vip-quote { transform: scale(1.1) rotate(-5deg); color: #a855f7; }

        .vip-divider {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, #8B2BE2, transparent);
          margin-bottom: 20px;
          transition: width 0.4s ease;
        }
        .vip-card:hover .vip-divider { width: 100%; }

        .vip-avatar { transition: border-color 0.3s ease, box-shadow 0.3s ease; }
        .vip-card:hover .vip-avatar {
          border-color: #8B2BE2 !important;
          box-shadow: 0 0 16px rgba(139,43,226,0.4);
        }

        .vip-shimmer {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #8B2BE2, #c084fc, #8B2BE2, transparent);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: vip-shimmer 2s linear infinite;
        }

        @keyframes vip-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .vip-card:hover .vip-shimmer { opacity: 1; }

        .vip-star { display: inline-block; }
        .vip-card:hover .vip-star:nth-child(1) { animation: star-pop 0.3s ease 0s forwards; }
        .vip-card:hover .vip-star:nth-child(2) { animation: star-pop 0.3s ease 0.05s forwards; }
        .vip-card:hover .vip-star:nth-child(3) { animation: star-pop 0.3s ease 0.1s forwards; }
        .vip-card:hover .vip-star:nth-child(4) { animation: star-pop 0.3s ease 0.15s forwards; }
        .vip-card:hover .vip-star:nth-child(5) { animation: star-pop 0.3s ease 0.2s forwards; }

        @keyframes star-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.4) rotate(10deg); }
          100% { transform: scale(1); }
        }
      `}</style>

      <section
        id="reviews"
        className="vip-section vip-glow py-24 bg-[#0c0c0c]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Floating Particles */}
        {[
          { left: "10%", size: 3, color: "#8B2BE2", dur: "6s", delay: "0s" },
          { left: "25%", size: 2, color: "#c084fc", dur: "8s", delay: "1.5s" },
          { left: "45%", size: 4, color: "#8B2BE2", dur: "5s", delay: "0.5s" },
          { left: "65%", size: 2, color: "#a855f7", dur: "7s", delay: "2s" },
          { left: "80%", size: 3, color: "#c084fc", dur: "6s", delay: "3s" },
          { left: "90%", size: 2, color: "#8B2BE2", dur: "9s", delay: "0.8s" },
        ].map((p, i) => (
          <div
            key={i}
            className="vip-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              bottom: "5%",
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}

        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <p
            className="vip-fade-up text-center mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 11,
              letterSpacing: "0.5em",
              color: "#8B2BE2",
              animationDelay: "0.2s",
            }}
          >
            ★ Trusted Worldwide ★
          </p>
          <h2
            className="vip-fade-up text-center mb-16"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 300,
              color: "#fff",
              animationDelay: "0.4s",
            }}
          >
            Client{" "}
            <em
              style={{
                background: "linear-gradient(135deg, #8B2BE2, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reviews
            </em>
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((rev, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="vip-card"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="vip-shimmer" />

                {/* Quote */}
                <span
                  className="vip-quote block mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 64,
                    lineHeight: 1,
                    color: "#8B2BE2",
                    fontStyle: "italic",
                  }}
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="vip-star" style={{ color: "#f59e0b", fontSize: 13 }}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p
                  className="mb-7"
                  style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}
                >
                  {rev.text}
                </p>

                {/* Divider */}
                <div className="vip-divider" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="vip-avatar flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: rev.avatarColor,
                      color: rev.textColor,
                      border: "1.5px solid rgba(139,43,226,0.4)",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>{rev.name}</p>
                    <p
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        color: "#8B2BE2",
                      }}
                    >
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="vip-fade-up flex justify-center gap-12 mt-16"
            style={{ animationDelay: "1.2s" }}
          >
            {[
              { num: "50+", label: "Happy Clients" },
              { num: "40%", label: "Avg. Retention Boost" },
              { num: "5★", label: "Avg. Rating" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 36,
                    color: "#fff",
                    letterSpacing: "0.04em",
                    display: "block",
                  }}
                >
                  <span style={{ color: "#8B2BE2" }}>{s.num.slice(0, -1)}</span>
                  {s.num.slice(-1)}
                </span>
                <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: 4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}