import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Home, Wrench, Image as ImageIcon, Star, MoreHorizontal } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Services', href: '#services', icon: Wrench },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#transformation', icon: ImageIcon },
  { label: 'Brands', href: '#brands' },
  { label: 'Reviews', href: '#reviews', icon: Star },
  { label: 'Contact', href: '#contact', icon: Phone },
];

const mobileBottomLinks = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Services', href: '#services', icon: Wrench },
  { label: 'Contact', href: 'tel:8344431888', icon: Phone, isDial: true },
  { label: 'Gallery', href: '#transformation', icon: ImageIcon },
  { label: 'Reviews', href: '#reviews', icon: Star },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, e) => {
    if (e && href.startsWith('#')) e.preventDefault();
    if (href.startsWith('tel:')) return;
    
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick('#hero', e)}>
            <img src={logo} alt="Barani Cars Logo" className="navbar__logo-img" />
          </a>

          <ul className="navbar__links desktop-only">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(link.href, e)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a href="tel:8344431888" className="navbar__phone desktop-only">
              <Phone size={16} />
              <span>834 443 1888</span>
            </a>
            <button
              className="navbar__menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
              <span className="mobile-only-text">More</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation (Flipkart Style) */}
      <nav className="bottom-nav mobile-only">
        <div className="bottom-nav__inner">
          {mobileBottomLinks.map(link => {
            const Icon = link.icon;
            const isActive = !link.isDial && activeSection === link.href.slice(1);
            
            return (
              <a
                key={link.label}
                href={link.href}
                className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
                onClick={(e) => handleNavClick(link.href, e)}
              >
                <div className="bottom-nav__icon-wrapper">
                  <Icon size={20} />
                </div>
                <span className="bottom-nav__label">{link.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu__content">
                <div className="mobile-menu__header">
                  <img src={logo} alt="Logo" className="mobile-menu__logo" />
                  <button onClick={() => setMobileOpen(false)}><X size={24} /></button>
                </div>
                <ul className="mobile-menu__links">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        className={`mobile-menu__link ${activeSection === link.href.slice(1) ? 'mobile-menu__link--active' : ''}`}
                        onClick={(e) => handleNavClick(link.href, e)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-menu__footer">
                  <a href="tel:8344431888" className="btn btn-primary mobile-menu__cta">
                    <Phone size={18} />
                    Call Expert
                  </a>
                  <div className="mobile-menu__info">
                    <MapPin size={14} />
                    <span>Next to The New Karnas Hotel, Chinnamanur</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
