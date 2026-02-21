# Vela Website

A modern, production-quality landing page for **Vela** - a Website Builder DSL (Domain-Specific Language).

## 🚀 Features

- **Modern Design**: Dark theme with vibrant gradients (purple/blue/pink)
- **Smooth Animations**: GSAP + ScrollTrigger for scroll-based animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Comprehensive Documentation**: Built-in docs section covering beginner to advanced topics
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **Performance**: Optimized animations with reduced-motion support

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **GSAP** - Professional-grade animations
- **CSS Custom Properties** - Modern theming system
- **Google Fonts** - Inter (text) and JetBrains Mono (code)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Email Server Setup

The contact form uses a Node.js/Express backend with Nodemailer to send emails.

### Starting the Email Server

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the server
npm start
```

The email server will run on `http://localhost:3001`.

### Important: Gmail App Password

**Note:** Gmail requires an App Password for third-party applications.

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → Enable **2-Step Verification**
3. Go to **App passwords** and create a new one for "Mail"
4. Update the password in `server/index.js` with the generated app password

See `server/README.md` for detailed setup instructions.

## 🎨 Design System

The site uses a comprehensive design system with CSS custom properties:

- **Colors**: Primary (#6C5CE7), Secondary (#C261FE), Accent Blue/Pink/Cyan
- **Spacing**: Consistent scale from xs (0.5rem) to 3xl (6rem)
- **Typography**: Inter for content, JetBrains Mono for code
- **Effects**: Glassmorphism, gradient borders, glow effects

## 📄 Sections

1. **Home** - Hero with code preview, features grid, how it works
2. **Get Started** - Installation, project structure, first program
3. **Docs** - Comprehensive documentation with sidebar navigation
4. **About** - Mission, team, timeline, core principles
5. **Contact** - Contact form with validation and social links

## 🎯 Component Structure

```
src/
├── components/
│   ├── Navbar.jsx/css      # Sticky navigation with active states
│   ├── Hero.jsx/css        # Hero section with code panel
│   ├── Features.jsx/css    # Feature cards grid
│   ├── HowItWorks.jsx/css  # 3-step process
│   ├── GetStarted.jsx/css  # Installation & setup guide
│   ├── Docs.jsx/css        # Full documentation with sidebar
│   ├── About.jsx/css       # Mission, team, roadmap
│   ├── Contact.jsx/css     # Contact form
│   ├── Footer.jsx/css      # Site footer
│   ├── BackToTop.jsx/css   # Scroll-to-top button
│   └── Toast.jsx/css       # Toast notifications
├── App.jsx                 # Main app component
├── App.css                 # App-level styles
├── index.css               # Global styles & design system
└── main.jsx                # Entry point
```

## 🎬 Animations

All animations use GSAP with ScrollTrigger:

- Hero entrance animation
- Scroll-triggered reveals with stagger
- Card hover effects
- Smooth scrolling between sections
- Respects `prefers-reduced-motion`

## 🚀 Deployment

Deploy your Vela website to production:

**Quick Start:**
See [QUICK-DEPLOY.md](QUICK-DEPLOY.md) for a fast 15-minute deployment guide.

**Detailed Guide:**
See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment instructions including:
- Vercel deployment (Frontend)
- Render deployment (Backend)
- Custom domain setup
- Environment variables
- Monitoring and troubleshooting

**Services:**
- **Frontend:** Vercel (recommended)
- **Backend:** Render (recommended)
- **Alternative:** Netlify (frontend), Railway/Heroku (backend)

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Vela principles

