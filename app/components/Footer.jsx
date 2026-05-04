"use client";
import React from "react";

export default function Footer() {
  return (
    <footer style={{background:'#060608',paddingTop:60,position:'relative',overflow:'hidden',fontFamily:'"Outfit", sans-serif'}}>
      {/* Background Decorative Elements */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(139,43,226,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,43,226,0.03) 1px,transparent 1px)',backgroundSize:'40px 40px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:'100%',height:'1px',background:'linear-gradient(90deg, transparent, rgba(139,43,226,0.3), transparent)'}}/>
      
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 40px',position:'relative',zIndex:2}}>
        
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:60,paddingBottom:60}}>
          
          {/* Brand/About Section */}
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <div style={{fontSize:28,fontWeight:900,color:'#fff',letterSpacing:'-0.02em'}}>
             <span className="text-purple-600 font bold text-4xl">Junaid Arshad</span> PORTFOLIO<span style={{color:'#8B2BE2', textShadow:'0 0 15px rgba(139,43,226,0.5)'}}>.</span>
            </div>
            <p style={{fontSize:14,color:'rgba(255,255,255,0.5)',lineHeight:1.8,maxWidth:300}}>
              Specializing in <span style={{color:'#fff', fontWeight:600}}>High-End Video Editing</span> and cinematic storytelling. Turning your vision into digital reality.
            </p>
          </div>

          {/* Quick Links with Highlights */}
          {[
            {
              title: 'Navigation',
              links: [
                { name: 'Home', url: '/' },
                { name: 'Work', url: '#work' },
                { name: 'Services', url: '#services' },
                { name: 'Contact', url: '#contact' }
              ]
            },
            {
              title: 'Connect',
              links: [
                { name: 'Instagram', url: 'https://instagram.com/your-id' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/your-id' },
                { name: 'Behance', url: 'https://behance.net/your-id' },
                { name: 'Twitter', url: 'https://twitter.com/your-id' }
              ]
            }
          ].map((group) => (
            <div key={group.title}>
              <h4 style={{fontSize:11,letterSpacing:'0.3em',color:'#8B2BE2',textTransform:'uppercase',marginBottom:25,fontWeight:800}}>
                {group.title}
              </h4>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:14}}>
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url} 
                      style={{
                        fontSize:14,
                        color:'rgba(255,255,255,0.4)',
                        textDecoration:'none',
                        transition:'all 0.3s',
                        display:'inline-flex',
                        alignItems:'center',
                        gap:8
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{width:6,height:6,borderRadius:'50%',background:'#8B2BE2',boxShadow:'0 0 8px #8B2BE2'}}/>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',padding:'30px 0',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.3)',letterSpacing:'0.05em'}}>
            © Junaid Arshad 2026 All Rights Reserved
          </div>
          
          <div style={{fontSize:12,color:'rgba(255,255,255,0.3)',letterSpacing:'0.05em'}}>
            Developed by <span style={{color:'#fff', fontWeight:600, borderBottom:'1px solid #8B2BE2', paddingBottom:2}}>Imran Al Farabi</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap');
      `}</style>
    </footer>
  );
}