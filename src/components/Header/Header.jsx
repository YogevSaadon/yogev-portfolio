import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.name}>Yogev Saadon</span>
        </div>
        
        <nav className={styles.nav}>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>

        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;