import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const velaCode = `site "Vela" {
  theme {
    primary "#6C5CE7"
    background "#0B1020"
    text "#EAF0FF"
  }

  page "/" {
    hero {
      title "Build websites with Vela"
      subtitle "Modern, fast, and clean DSL"
      button "Get Started" -> "#get-started"
    }

    section "Features" {
      card { title "Fast"; text "Compile to HTML/CSS instantly" }
      card { title "Readable"; text "Simple syntax for all levels" }
      card { title "Modern"; text "Responsive by default" }
    }

    footer { text "© 2026 Vela" }
  }
}`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-badge', {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
      .fromTo('.hero-title', {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.3')
      .fromTo('.hero-subtitle', {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.5')
      .fromTo('.hero-buttons', {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')
      .fromTo('.code-panel', {
        opacity: 0,
        x: 50,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
      }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(velaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    // Trigger toast event
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Code copied to clipboard!' }
    }));
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="container-wide">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Website Builder DSL • Open-source • Fast
            </div>
            
            <h1 className="hero-title">
              Vela — The Modern Language for Building Websites
            </h1>
            
            <p className="hero-subtitle">
              Write simple Vela code. Compile to HTML, CSS, and JavaScript. 
              Build beautiful, responsive websites with minimal effort.
            </p>
            
            <div className="hero-buttons">
              <a href="#get-started" className="btn btn-primary">
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#docs" className="btn btn-secondary">
                Read Docs
              </a>
              <a href="https://github.com/Ih205R/Vela" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="code-panel">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-filename">main.vela</span>
                <button 
                  className="btn-copy" 
                  onClick={handleCopy}
                  aria-label="Copy code"
                >
                  {copied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                    </svg>
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="code-content">
                <code>{velaCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
