import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content > *', {
        opacity: 0,
        y: 30,
      }, {
        scrollTrigger: {
          trigger: '.about',
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

  return (
    <section className="about section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>About Vela</h2>
          <p>Building the future of web development</p>
        </div>

        <div className="about-content">
          <div className="mission-block">
            <h3>Our Mission</h3>
            <p>
              Vela was created to simplify web development without sacrificing power or flexibility. 
              We believe building websites should be intuitive, fast, and enjoyable for developers 
              of all skill levels.
            </p>
          </div>

          <div className="mission-block">
            <h3>Why Vela Exists</h3>
            <p>
              Traditional web development requires juggling multiple languages, frameworks, and 
              build tools. We asked: what if there was a better way? Vela provides a unified, 
              declarative syntax that compiles to optimized web code—letting you focus on 
              building great experiences, not wrestling with configuration.
            </p>
          </div>

          <div className="principles">
            <h3>Core Principles</h3>
            <div className="principles-grid">
              <div className="principle-card">
                <div className="principle-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h4>Simplicity First</h4>
                <p>Clean syntax that's easy to learn and pleasant to use</p>
              </div>
              <div className="principle-card">
                <div className="principle-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h4>Speed</h4>
                <p>Lightning-fast compilation with optimized output</p>
              </div>
              <div className="principle-card">
                <div className="principle-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <h4>Modern Defaults</h4>
                <p>Responsive, accessible, and performant by default</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
