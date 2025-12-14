import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { useMobile } from '../../hooks/useMobile';
import { useKeyboardNavigation } from '../../hooks/useAccessibility';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const { shouldShowMobileNav } = useMobile();
  const [headerRef] = useScrollAnimation({ animationClass: 'animate-fade-in' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section on home page
      if (isHomePage) {
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
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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

  const pageLinks = [
    { path: '/about', label: 'About Me' },
    { path: '/academic', label: 'Grades' }
  ];

  const getPageTitle = () => {
    if (location.pathname === '/about') return 'About Me';
    if (location.pathname === '/academic') return 'Academic Progress';
    return '';
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        {!isHomePage ? (
          // Sub-page header with back button
          <>
            <button
              onClick={() => navigate('/')}
              className={styles.backButton}
              aria-label="Back to home"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
            <div className={styles.pageTitle}>
              {getPageTitle()}
            </div>
          </>
        ) : (
          // Home page header
          <>
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

              <div className={styles.navDivider}></div>

              {pageLinks.map((link) => (
                <button
                  key={link.path}
                  className={styles.pageLink}
                  onClick={() => !link.disabled && navigate(link.path)}
                  aria-label={`Navigate to ${link.label}`}
                  disabled={link.disabled}
                  style={link.disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </>
        )}

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
        {shouldShowMobileNav() && isHomePage && (
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