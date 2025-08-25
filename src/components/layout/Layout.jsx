import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`layout ${isScrolled ? 'layout--scrolled' : ''}`}>
      <Header />
      <main className="layout__main" role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;