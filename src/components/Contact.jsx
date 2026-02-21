import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      try {
        // Use environment variable or fallback to localhost
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        
        // Send email to backend
        const response = await fetch(`${apiUrl}/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Show success toast
          window.dispatchEvent(new CustomEvent('show-toast', {
            detail: { message: '✓ Message sent successfully! We\'ll be in touch soon.' }
          }));
          
          // Reset form
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: '✗ Failed to send message. Please try again later.' }
        }));
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="contact section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with the Vela team</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href="mailto:ihorr30@gmail.com">ihorr30@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fa-brands fa-discord"></i>
              </div>
              <h3>Community</h3>
              <p>Join our Discord server for discussions and support</p>
              <a href="https://discord.gg/vela" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <h3>GitHub</h3>
              <p>Report issues, contribute, or star the repo</p>
              <a href="https://github.com/Ih205R/Vela" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>

            <div className="social-links">
              <a href="https://x.com/velaofficial26" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://github.com/Ih205R/Vela" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows="6"
                placeholder="Your message..."
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Send Message
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
