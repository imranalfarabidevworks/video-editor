"use client";
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: '#030005', 
      paddingTop: 80, 
      position: 'relative', 
      overflow: 'hidden', 
      fontFamily: '"Outfit", sans-serif'
    }}>
      
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      {/* Subtle Grid */}
      <div style={{
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'radial-gradient(rgba(139,43,226,0.15) 1px, transparent 1px)', 
        backgroundSize: '30px 30px', 
        pointerEvents: 'none',
        opacity: 0.4
      }}/>
      
      {/* Top Border Glow */}
      <div style={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '1px', 
        background: 'linear-gradient(90deg, transparent, #8B2BE2, transparent)',
        opacity: 0.5
      }}/>

      {/* Cinematic Ambient Light */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '300px',
        background: 'radial-gradient(circle, rgba(139,43,226,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 1
      }}/>

      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2}}>
        
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 60, 
          paddingBottom: 80
        }}>
          
          {/* Brand Identity Section */}
          <div style={{display: 'flex', flexDirection: 'column', gap: 25}}>
            <div style={{fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1}}>
              JUNAID <span style={{
                color: '#8B2BE2', 
                textShadow: '0 0 30px rgba(139,43,226,0.8)',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.2)'
              }}>ARSHAD</span>
              <div style={{fontSize: 10, letterSpacing: '0.6em', color: 'rgba(255,255,255,0.3)', marginTop: 8, fontWeight: 400}}>
                VISUAL STORYTELLER
              </div>
            </div>
            <p style={{fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 320, fontWeight: 300}}>
              Crafting <span style={{color: '#fff', fontWeight: 500}}>high-retention digital experiences</span> through elite video editing and motion design.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{display: 'flex', justifyContent: 'space-between', gap: 40}}>
            {[
              {
                title: 'Sitemap',
                links: ['Home', 'Work', 'Services', 'Contact']
              },
              {
                title: 'Socials',
                links: ['Instagram', 'LinkedIn', 'YouTube', 'Behance']
              }
            ].map((group) => (
              <div key={group.title}>
                <h4 style={{
                  fontSize: 11, 
                  letterSpacing: '0.4em', 
                  color: '#8B2BE2', 
                  textTransform: 'uppercase', 
                  marginBottom: 30, 
                  fontWeight: 800
                }}>
                  {group.title}
                </h4>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16}}>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase()}`} 
                        className="footer-link"
                        style={{
                          fontSize: 14,
                          color: 'rgba(255,255,255,0.4)',
                          textDecoration: 'none',
                          transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontWeight: 400
                        }}
                      >
                        <span className="link-dot" style={{
                          width: 4, 
                          height: 4, 
                          borderRadius: '50%', 
                          background: '#8B2BE2', 
                          opacity: 0,
                          transition: '0.4s'
                        }}/>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Availability Status */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '30px',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)',
            height: 'fit-content',
            backdropFilter: 'blur(10px)'
          }}>
             <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15}}>
                <div style={{width: 8, height: 8, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 12px #10b981'}}/>
                <span style={{fontSize: 12, color: '#fff', fontWeight: 600, letterSpacing: '0.1em'}}>AVAILABLE FOR PROJECTS</span>
             </div>
             <p style={{fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 20}}>
               Have a vision? Let's bring it to life with cinematic precision.
             </p>
             <a href="mailto:contact@junaid.com" style={{
               fontSize: 13, 
               color: '#8B2BE2', 
               textDecoration: 'none', 
               fontWeight: 700, 
               borderBottom: '1px solid rgba(139,43,226,0.3)',
               paddingBottom: 4
             }}>GET IN TOUCH →</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          padding: '40px 0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 20
        }}>
          <div style={{fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase'}}>
            © 2026 JUNAID ARSHAD • ALL RIGHTS RESERVED
          </div>
          
          <div style={{fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300}}>
            Crafted by <span style={{
              color: '#fff', 
              fontWeight: 600, 
              padding: '4px 12px', 
              background: 'rgba(139,43,226,0.1)', 
              borderRadius: '100px',
              border: '1px solid rgba(139,43,226,0.2)',
              marginLeft: 5
            }}>Imran Al Farabi</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;900&display=swap');
        
        .footer-link:hover {
          color: #fff !important;
          transform: translateX(8px);
        }
        
        .footer-link:hover .link-dot {
          opacity: 1 !important;
          box-shadow: 0 0 10px #8B2BE2;
        }
      `}</style>
    </footer>
  );
}