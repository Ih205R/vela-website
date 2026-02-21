<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Vela Website Project

This is a modern, production-quality landing page for Vela - a Website Builder DSL (Domain-Specific Language).

## Tech Stack
- React 19.2.0
- Vite 7.3.1
- GSAP for animations
- CSS custom properties for theming

## Design Guidelines
- Use dark theme with gradients (purple/blue/pink)
- Follow mobile-first responsive design
- Maintain glassmorphism and modern UI patterns
- Use Inter for text and JetBrains Mono for code

## Code Style
- Use functional components with hooks
- Keep components focused and single-purpose
- Use CSS modules or separate CSS files per component
- Follow accessibility best practices (semantic HTML, ARIA labels, focus states)
- Support reduced motion preferences

## Animation Guidelines
- Use GSAP with ScrollTrigger for scroll animations
- Implement stagger effects for cards and lists
- Ensure smooth transitions (250ms ease)
- Respect prefers-reduced-motion

## Component Structure
Each component should have:
- .jsx file with the component logic
- .css file with component-specific styles
- Proper prop validation if needed
- GSAP animations where appropriate
