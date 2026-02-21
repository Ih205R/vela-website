import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Docs.css';

gsap.registerPlugin(ScrollTrigger);

function Docs() {
  const [activeDoc, setActiveDoc] = useState('what-is-vela');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exampleLevel, setExampleLevel] = useState('beginner');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.docs-content > *', {
        opacity: 0,
        y: 20,
      }, {
        scrollTrigger: {
          trigger: '.docs-wrapper',
          start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeDoc]);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Code copied to clipboard!' }
    }));
  };

  const docSections = [
    { id: 'what-is-vela', title: 'What is Vela?', category: 'Basics' },
    { id: 'key-concepts', title: 'Key Concepts', category: 'Basics' },
    { id: 'simple-example', title: 'Simple Landing Page', category: 'Basics' },
    { id: 'common-mistakes', title: 'Common Mistakes', category: 'Basics' },
    { id: 'theming', title: 'Theme Tokens', category: 'Practical' },
    { id: 'layouts', title: 'Layout Options', category: 'Practical' },
    { id: 'components', title: 'Reusable Components', category: 'Practical' },
    { id: 'assets', title: 'Assets & Images', category: 'Practical' },
    { id: 'seo', title: 'SEO Basics', category: 'Practical' },
    { id: 'compilation', title: 'How Compilation Works', category: 'Advanced' },
    { id: 'performance', title: 'Performance Notes', category: 'Advanced' },
    { id: 'extending', title: 'Extending Vela', category: 'Advanced' },
    { id: 'roadmap', title: 'Roadmap', category: 'Advanced' },
  ];

  const scrollToSection = (id) => {
    setActiveDoc(id);
    setSidebarOpen(false);
    const element = document.getElementById(`doc-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="docs section-padding" ref={sectionRef}>
      <div className="container-wide">
        <div className="section-header">
          <h2>Documentation</h2>
          <p>Complete guide for all skill levels</p>
        </div>

        <button 
          className="mobile-docs-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '✕ Close' : '☰ Menu'}
        </button>

        <div className="docs-wrapper">
          <aside className={`docs-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-section">
              <h4>📚 Basics (Junior)</h4>
              {docSections.filter(s => s.category === 'Basics').map(section => (
                <button
                  key={section.id}
                  className={`sidebar-link ${activeDoc === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="sidebar-section">
              <h4>🛠️ Practical (Mid-level)</h4>
              {docSections.filter(s => s.category === 'Practical').map(section => (
                <button
                  key={section.id}
                  className={`sidebar-link ${activeDoc === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="sidebar-section">
              <h4>🚀 Advanced (Senior)</h4>
              {docSections.filter(s => s.category === 'Advanced').map(section => (
                <button
                  key={section.id}
                  className={`sidebar-link ${activeDoc === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="docs-content">
            {/* What is Vela */}
            <div id="doc-what-is-vela" className="doc-section">
              <h3>What is Vela?</h3>
              <p>
                Vela is a modern Domain-Specific Language (DSL) designed specifically for building 
                websites. It allows you to describe your website structure, styling, and behavior 
                using a clean, readable syntax that compiles to optimized HTML, CSS, and JavaScript.
              </p>
              <p>
                Unlike traditional web development where you juggle multiple files and syntaxes, 
                Vela provides a unified, declarative approach. Perfect for rapid prototyping, 
                landing pages, and content-focused websites.
              </p>
            </div>

            {/* Key Concepts */}
            <div id="doc-key-concepts" className="doc-section">
              <h3>Key Concepts</h3>
              <ul className="concept-list">
                <li><strong>site</strong> - The root container for your website configuration</li>
                <li><strong>page</strong> - Individual pages with routes (e.g., "/", "/about")</li>
                <li><strong>hero</strong> - Large introductory section with title, subtitle, CTA</li>
                <li><strong>section</strong> - Content blocks with titles and nested elements</li>
                <li><strong>card</strong> - Reusable content containers for features, testimonials, etc.</li>
                <li><strong>text</strong> - Paragraph or body text content</li>
                <li><strong>button</strong> - Interactive buttons with links or actions</li>
                <li><strong>image</strong> - Image elements with source paths</li>
                <li><strong>footer</strong> - Bottom section with copyright, links, etc.</li>
              </ul>
            </div>

            {/* Simple Example */}
            <div id="doc-simple-example" className="doc-section">
              <h3>Simple Landing Page Example</h3>
              <p>Here's a complete example of a simple landing page:</p>
              <div className="code-block">
                <button className="copy-btn" onClick={() => copyCode(`site "My Startup" {
  theme {
    primary "#6C5CE7"
    background "#FFFFFF"
    text "#1F2937"
  }

  page "/" {
    hero {
      title "Build Something Amazing"
      subtitle "The best platform for your next project"
      button "Get Started" -> "/signup"
      button "Learn More" -> "#features"
    }

    section "Features" {
      card {
        title "Fast"
        text "Lightning-fast performance"
      }
      card {
        title "Secure"
        text "Enterprise-grade security"
      }
      card {
        title "Scalable"
        text "Grows with your business"
      }
    }

    footer {
      text "© 2026 My Startup. All rights reserved."
    }
  }
}`)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                </button>
                <pre><code>{`site "My Startup" {
  theme {
    primary "#6C5CE7"
    background "#FFFFFF"
    text "#1F2937"
  }

  page "/" {
    hero {
      title "Build Something Amazing"
      subtitle "The best platform for your next project"
      button "Get Started" -> "/signup"
      button "Learn More" -> "#features"
    }

    section "Features" {
      card {
        title "Fast"
        text "Lightning-fast performance"
      }
      card {
        title "Secure"
        text "Enterprise-grade security"
      }
      card {
        title "Scalable"
        text "Grows with your business"
      }
    }

    footer {
      text "© 2026 My Startup. All rights reserved."
    }
  }
}`}</code></pre>
              </div>
            </div>

            {/* Common Mistakes */}
            <div id="doc-common-mistakes" className="doc-section">
              <h3>Common Mistakes</h3>
              <div className="mistake-card">
                <h4>❌ Forgetting closing braces</h4>
                <p>Every opening brace <code>{'{'}</code> must have a matching closing brace <code>{'}'}</code></p>
                <div className="code-block error">
                  <pre><code>{`site "Example" {
  page "/" {
    hero {
      title "Hello"
    // Missing } here!
}`}</code></pre>
                </div>
              </div>

              <div className="mistake-card">
                <h4>❌ Invalid color format</h4>
                <p>Colors must be valid hex codes with # prefix</p>
                <div className="code-block error">
                  <pre><code>{`theme {
  primary "purple"  // ❌ Wrong
  primary "#6C5CE7" // ✅ Correct
}`}</code></pre>
                </div>
              </div>

              <div className="mistake-card">
                <h4>💡 Helpful Tips</h4>
                <ul>
                  <li>Use consistent indentation (2 or 4 spaces)</li>
                  <li>Quote all string values</li>
                  <li>Button arrows use <code>-&gt;</code> syntax</li>
                  <li>Check compiler errors carefully - they point to exact lines</li>
                </ul>
              </div>
            </div>

            {/* Theming */}
            <div id="doc-theming" className="doc-section">
              <h3>Theme Tokens</h3>
              <p>Define your design system once and use it throughout your site:</p>
              <div className="code-block">
                <button className="copy-btn" onClick={() => copyCode(`theme {
  primary "#6C5CE7"
  secondary "#C261FE"
  background "#0B1020"
  text "#EAF0FF"
  accent "#3B82F6"
}`)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                </button>
                <pre><code>{`theme {
  primary "#6C5CE7"
  secondary "#C261FE"
  background "#0B1020"
  text "#EAF0FF"
  accent "#3B82F6"
}`}</code></pre>
              </div>
              <p>These colors are automatically applied to buttons, headings, and interactive elements.</p>
            </div>

            {/* Layout Options */}
            <div id="doc-layouts" className="doc-section">
              <h3>Layout Options</h3>
              <p>Control how content is displayed with layout modifiers:</p>
              <div className="code-block">
                <pre><code>{`section "Features" {
  layout "grid"     // Options: grid, columns, stack
  columns 3         // For grid/columns layouts
  
  card { ... }
  card { ... }
  card { ... }
}`}</code></pre>
              </div>
              <p><strong>Layout types:</strong></p>
              <ul>
                <li><code>grid</code> - Responsive grid with auto-fit columns</li>
                <li><code>columns</code> - Fixed column count</li>
                <li><code>stack</code> - Vertical stacking (default)</li>
              </ul>
            </div>

            {/* Components */}
            <div id="doc-components" className="doc-section">
              <h3>Reusable Components (Planned)</h3>
              <p>Future versions will support defining reusable components:</p>
              <div className="code-block">
                <pre><code>{`component FeatureCard {
  props {
    icon
    title
    description
  }
  
  render {
    card {
      image props.icon
      title props.title
      text props.description
    }
  }
}

// Usage
section "Features" {
  FeatureCard { icon "rocket.svg"; title "Fast"; description "..." }
  FeatureCard { icon "shield.svg"; title "Secure"; description "..." }
}`}</code></pre>
              </div>
            </div>

            {/* Assets */}
            <div id="doc-assets" className="doc-section">
              <h3>Assets & Images</h3>
              <p>Reference images from your assets folder:</p>
              <div className="code-block">
                <pre><code>{`page "/" {
  hero {
    title "Welcome"
    image "assets/hero-image.jpg"
  }
  
  section "Gallery" {
    image "assets/photo1.jpg"
    image "assets/photo2.jpg"
  }
}`}</code></pre>
              </div>
              <p>Images are automatically optimized during compilation.</p>
            </div>

            {/* SEO */}
            <div id="doc-seo" className="doc-section">
              <h3>SEO Basics (Planned)</h3>
              <p>Upcoming feature for meta tags and SEO configuration:</p>
              <div className="code-block">
                <pre><code>{`page "/" {
  meta {
    title "My Amazing Site"
    description "The best website for..."
    keywords "vela, website builder, DSL"
    ogImage "assets/og-image.jpg"
  }
  
  hero { ... }
}`}</code></pre>
              </div>
            </div>

            {/* Compilation */}
            <div id="doc-compilation" className="doc-section">
              <h3>How Compilation Works</h3>
              <p>Vela uses a multi-stage compilation process:</p>
              <ol>
                <li><strong>Lexical Analysis</strong> - Tokenizes your .vela file</li>
                <li><strong>Parsing</strong> - Builds an Abstract Syntax Tree (AST)</li>
                <li><strong>Validation</strong> - Checks for errors and type consistency</li>
                <li><strong>Code Generation</strong> - Produces HTML, CSS, and JS files</li>
                <li><strong>Optimization</strong> - Minifies and optimizes output</li>
              </ol>
              <p>All files are written to the <code>dist/</code> folder.</p>
            </div>

            {/* Performance */}
            <div id="doc-performance" className="doc-section">
              <h3>Performance Notes</h3>
              <ul>
                <li>Vela generates minimal JavaScript by default</li>
                <li>CSS is scoped and tree-shaken automatically</li>
                <li>Images are lazy-loaded when appropriate</li>
                <li>Output is production-ready with no runtime dependencies</li>
                <li>Average site compiles in under 100ms</li>
              </ul>
            </div>

            {/* Extending */}
            <div id="doc-extending" className="doc-section">
              <h3>Extending Vela</h3>
              <p>Planned plugin system for custom functionality:</p>
              <div className="code-block">
                <pre><code>{`// vela.config.js
export default {
  plugins: [
    '@vela/analytics',
    '@vela/forms',
    './custom-plugin.js'
  ],
  generators: {
    custom: './generators/custom-gen.js'
  }
}`}</code></pre>
              </div>
              <p>Plugins can extend the parser, add new blocks, or modify output generation.</p>
            </div>

            {/* Roadmap */}
            <div id="doc-roadmap" className="doc-section">
              <h3>Roadmap</h3>
              <div className="roadmap">
                <div className="roadmap-item">
                  <span className="status done">✓</span>
                  <div>
                    <strong>v0.1</strong> - Core DSL, Basic compilation
                  </div>
                </div>
                <div className="roadmap-item">
                  <span className="status done">✓</span>
                  <div>
                    <strong>v0.2</strong> - Theming system, Responsive layouts
                  </div>
                </div>
                <div className="roadmap-item">
                  <span className="status progress">●</span>
                  <div>
                    <strong>v0.3</strong> - Component system, Asset optimization
                  </div>
                </div>
                <div className="roadmap-item">
                  <span className="status planned">○</span>
                  <div>
                    <strong>v0.4</strong> - Plugin architecture, SEO features
                  </div>
                </div>
                <div className="roadmap-item">
                  <span className="status planned">○</span>
                  <div>
                    <strong>v1.0</strong> - Forms, Auth integrations, Export to React/Next.js
                  </div>
                </div>
              </div>
            </div>

            {/* Example Toggle */}
            <div className="doc-section">
              <h3>Interactive Examples</h3>
              <div className="example-toggle">
                <button 
                  className={exampleLevel === 'beginner' ? 'active' : ''}
                  onClick={() => setExampleLevel('beginner')}
                >
                  Beginner
                </button>
                <button 
                  className={exampleLevel === 'advanced' ? 'active' : ''}
                  onClick={() => setExampleLevel('advanced')}
                >
                  Advanced
                </button>
              </div>

              {exampleLevel === 'beginner' ? (
                <div className="code-block">
                  <pre><code>{`site "Simple Site" {
  page "/" {
    hero {
      title "Hello World"
      button "Click Me" -> "#next"
    }
  }
}`}</code></pre>
                </div>
              ) : (
                <div className="code-block">
                  <pre><code>{`site "Advanced Site" {
  theme {
    primary "#6C5CE7"
    secondary "#C261FE"
  }
  
  page "/" {
    hero {
      title "Professional Landing"
      subtitle "With full features"
      button "Primary CTA" -> "/signup"
      button "Secondary" -> "#learn"
      image "assets/hero.jpg"
    }
    
    section "Pricing" {
      layout "grid"
      columns 3
      
      card {
        title "Starter"
        text "$9/mo"
        button "Choose" -> "/buy?plan=starter"
      }
      card {
        title "Pro"
        text "$29/mo"
        button "Choose" -> "/buy?plan=pro"
      }
      card {
        title "Enterprise"
        text "Custom"
        button "Contact" -> "/contact"
      }
    }
  }
}`}</code></pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docs;
