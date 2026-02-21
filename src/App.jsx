import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';
import Docs from './components/Docs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <article id="home">
          <Hero />
          <Features />
          <HowItWorks />
        </article>
        <article id="get-started">
          <GetStarted />
        </article>
        <article id="docs">
          <Docs />
        </article>
        <article id="about">
          <About />
        </article>
        <article id="contact">
          <Contact />
        </article>
      </main>
      <Footer />
      <BackToTop />
      <Toast />
      <CookieConsent />
    </div>
  );
}

export default App;
