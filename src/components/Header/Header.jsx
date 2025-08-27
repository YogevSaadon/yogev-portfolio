import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { useMobile } from '../../hooks/useMobile';
import { useKeyboardNavigation } from '../../hooks/useAccessibility';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const { isMobile, shouldShowMobileNav } = useMobile();
  const [headerRef] = useScrollAnimation({ animationClass: 'animate-fade-in' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing Escape
  useKeyboardNavigation({
    onEscape: () => setIsMobileMenuOpen(false)
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.name}>Yogev Saadon</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => scrollToSection(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className={styles.headerActions}>
          <ThemeToggle 
            className={styles.themeToggle} 
            showLabel={false} 
          />
          
          {shouldShowMobileNav() && (
            <button
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {shouldShowMobileNav() && (
          <nav 
            className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileNavContent}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''} stagger-${index + 1}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}

        {/* Mobile Menu Backdrop */}
        {shouldShowMobileNav() && isMobileMenuOpen && (
          <div 
            className={styles.mobileMenuBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Header;