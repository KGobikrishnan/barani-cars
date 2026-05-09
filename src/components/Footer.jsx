import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Camera, Share2, Earth, CirclePlay } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <a href="#hero" className="footer__logo">
              <img src={logo} alt="Barani Cars" className="footer__logo-img" />
            </a>
            <p className="footer__about">
              Premium car modification, accessories, and performance upgrades in Chinnamanur. Transforming rides into beasts since 2019.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link"><Camera size={20} /></a>
              <a href="#" className="footer__social-link"><Share2 size={20} /></a>
              <a href="#" className="footer__social-link"><Earth size={20} /></a>
              <a href="#" className="footer__social-link"><CirclePlay size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#transformation">Gallery</a></li>
              <li><a href="#brands">Brands</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <Phone size={18} className="footer__icon" />
                <a href="tel:8344431888">8344431888</a>
              </li>
              <li>
                <Mail size={18} className="footer__icon" />
                <a href="mailto:info@baranicars.com">info@baranicars.com</a>
              </li>
              <li className="footer__branch">
                <MapPin size={18} className="footer__icon" />
                <div>
                  <strong>Branch 1 (Chinnamanur)</strong>
                  <p>Theni Bypass Road</p>
                  <p>Chinnamanur - 625515</p>
                </div>
              </li>
              <li className="footer__branch">
                <MapPin size={18} className="footer__icon" />
                <div>
                  <strong>Branch 2 (Cumbum)</strong>
                  <p>Cumbum Bypass Road</p>
                  <p>Cumbum - 625516</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__credits">
            <p className="footer__copyright">
              © {currentYear} Barani Cars. All rights reserved.
            </p>
            <p className="footer__designer">
              Discovered, Designed & Crafted by <span className="highlight-text">Navi Promotions</span>
            </p>
          </div>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
