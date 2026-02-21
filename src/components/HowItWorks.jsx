import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Write .vela',
    description: 'Create your website using simple, readable Vela syntax'
  },
  {
    number: '02',
    title: 'Compile',
    description: 'Transform your code into optimized HTML, CSS, and JavaScript'
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Launch your website anywhere - Vercel, Netlify, or any host'
  }
];

function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-item', {
        opacity: 0,
        x: -30,
      }, {
        scrollTrigger: {
          trigger: '.steps-container',
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Get started in three simple steps</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
