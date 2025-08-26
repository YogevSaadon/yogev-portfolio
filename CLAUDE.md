# Yogev Portfolio - Claude Code Configuration

This file contains configuration and documentation for the portfolio project to help Claude Code understand the project structure and provide better assistance.

## Project Overview
This is a professional React portfolio website built with Vite, featuring modern web development best practices including performance optimization, accessibility, SEO, and responsive design.

## Key Technologies
- **React 19** - Latest React version with modern features
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **Lucide React** - Icon library
- **React Helmet Async** - SEO meta tags management

## Project Structure
```
src/
├── components/
│   ├── common/          # Reusable components (ErrorBoundary, ThemeToggle, etc.)
│   ├── layout/          # Layout components (Header, Footer, Layout)
│   ├── Contact/         # Contact form component
│   ├── Education/       # Education section
│   ├── Header/          # Navigation header
│   ├── Hero/           # Hero section
│   ├── Projects/       # Projects showcase
│   └── Skills/         # Skills section
├── context/            # React Context (ThemeContext)
├── hooks/              # Custom React hooks
├── styles/             # Global styles and themes
├── utils/              # Utility functions
└── assets/             # Images and static files
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Key Features Implemented

### 1. Performance Optimization
- Lazy loading for components and images
- Performance monitoring with Core Web Vitals
- Bundle optimization and code splitting
- Image optimization utilities

### 2. Accessibility (a11y)
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- Focus management
- High contrast mode support

### 3. SEO Optimization
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Social media sharing optimization

### 4. Responsive Design
- Mobile-first approach
- Flexible grid system
- Touch-friendly interfaces
- Responsive images

### 5. Theme System
- Dark/light mode toggle
- System preference detection
- CSS custom properties
- Smooth theme transitions

### 6. Error Handling
- Error boundaries for React components
- Network status monitoring
- Offline functionality
- Graceful degradation

## Component Usage Examples

### Using the Theme System
```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  // Use theme state...
}
```

### Using Lazy Images
```jsx
import LazyImage from './components/common/LazyImage';

<LazyImage 
  src="/path/to/image.jpg"
  alt="Description"
  loading="lazy"
  className="my-image"
/>
```

### Using Animations
```jsx
import { useScrollAnimation } from './hooks/useAnimations';

function AnimatedComponent() {
  const [ref] = useScrollAnimation({ animationClass: 'animate-fade-in' });
  return <div ref={ref}>Content</div>;
}
```

## Styling Guidelines
- Use CSS custom properties for theming
- Follow mobile-first responsive design
- Use semantic HTML elements
- Maintain consistent spacing using design tokens
- Support both light and dark themes

## Browser Support
- Modern browsers (ES2020+)
- Progressive enhancement for older browsers
- Graceful degradation of advanced features

## Accessibility Guidelines
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use ARIA labels appropriately

## Performance Guidelines
- Lazy load below-the-fold content
- Optimize images (WebP format preferred)
- Minimize bundle size
- Use performance monitoring
- Cache assets appropriately

## SEO Best Practices
- Use proper heading hierarchy
- Optimize meta descriptions (120-160 chars)
- Include structured data
- Ensure mobile-friendly design
- Use canonical URLs

## Testing Considerations
- Test with screen readers
- Verify keyboard navigation
- Check mobile responsiveness
- Validate HTML and accessibility
- Test performance metrics

## Deployment Notes
- Build with `npm run build`
- Test production build with `npm run preview`
- Ensure environment variables are set
- Configure proper caching headers
- Set up analytics and monitoring

This project follows modern React and web development best practices for a professional portfolio website.

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

# GIT POLICY - CRITICAL RULE
NEVER push to GitHub unless the user EXPLICITLY tells you to push.
NEVER use git push commands unless specifically requested.
You can commit changes locally, but DO NOT push to remote unless asked.

# CRITICAL DEBUGGING RULE
ONLY FIX PROBLEMS IF YOU 100% IDENTIFIED THEM. IF NOT, ASK FOR WHAT TO DO.
IF YOU 100% FOUND THE PROBLEM, FIX IT ON YOUR OWN INSTEAD OF ASKING.