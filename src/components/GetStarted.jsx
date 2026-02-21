import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GetStarted.css';

gsap.registerPlugin(ScrollTrigger);

function GetStarted() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.get-started .content-block', {
        opacity: 0,
        y: 30,
      }, {
        scrollTrigger: {
          trigger: '.get-started',
          start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Code copied to clipboard!' }
    }));
  };

  return (
    <section className="get-started section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Get Started</h2>
          <p>Start building with Vela in minutes</p>
        </div>

        <div className="content-block">
          <h3>📦 Installation</h3>
          <p>Vela requires Node.js 18 or higher. Install globally via npm:</p>
          <div className="code-block">
            <button 
              className="copy-btn"
              onClick={() => copyCode('npm install -g vela-dsl')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            </button>
            <pre><code>npm install -g vela-dsl</code></pre>
          </div>
          <p className="alt-text">Or use npx without installation:</p>
          <div className="code-block">
            <button 
              className="copy-btn"
              onClick={() => copyCode('npx vela-dsl init mysite')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            </button>
            <pre><code>npx vela-dsl init mysite</code></pre>
          </div>
        </div>

        <div className="content-block">
          <h3>🚀 Create and Build</h3>
          <p>Initialize a new project and start the development server:</p>
          <div className="code-block">
            <button 
              className="copy-btn"
              onClick={() => copyCode('vela init mysite\ncd mysite\nvela build\nvela dev')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            </button>
            <pre><code>{`vela init mysite
cd mysite
vela build
vela dev`}</code></pre>
          </div>
        </div>

        <div className="content-block">
          <h3>📁 Project Structure</h3>
          <p>Your Vela project will have the following structure:</p>
          <div className="code-block tree">
            <pre><code>{`my-site/
├── src/
│   └── main.vela
└── dist/
    ├── index.html
    ├── styles.css
    └── app.js`}</code></pre>
          </div>
        </div>

        <div className="content-block">
          <h3>👋 Your First Program</h3>
          <p>Create a simple landing page in <code>main.vela</code>:</p>
          <div className="code-block">
            <button 
              className="copy-btn"
              onClick={() => copyCode(`site "My First Site" {
  theme {
    primary "#6C5CE7"
    background "#FFFFFF"
  }

  page "/" {
    hero {
      title "Hello Vela!"
      subtitle "Building websites made simple"
      button "Learn More" -> "#features"
    }
  }
}`)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            </button>
            <pre><code>{`site "My First Site" {
  theme {
    primary "#6C5CE7"
    background "#FFFFFF"
  }

  page "/" {
    hero {
      title "Hello Vela!"
      subtitle "Building websites made simple"
      button "Learn More" -> "#features"
    }
  }
}`}</code></pre>
          </div>
          <p className="info-text">
            ✨ This compiles to a responsive HTML page with styled hero section, 
            automatic CSS generation, and smooth scroll behavior!
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
