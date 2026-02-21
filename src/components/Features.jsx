import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Compile to HTML/CSS/JS',
    description: 'Vela compiles your DSL code into optimized HTML, CSS, and JavaScript instantly.'
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile-First',
    description: 'All generated websites are responsive by default with mobile-first design principles.'
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Theming',
    description: 'Define colors, fonts, and styles once. Apply them across your entire website effortlessly.'
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Components',
    description: 'Build reusable components and maintain consistency across your projects. (Planned)'
  },
  {
    icon: 'fa-solid fa-plug',
    title: 'Plugins',
    description: 'Extend Vela with custom plugins and generators for advanced functionality. (Planned)'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Developer Experience',
    description: 'Simple syntax, clear error messages, and fast compilation for a smooth workflow.'
  }
];

function Features() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card', {
        opacity: 0,
        y: 30,
      }, {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="features section-padding" ref={featuresRef}>
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to build modern websites with ease</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
