import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, Wrench, Users, Zap } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src="/images/hero-car.png"
          alt="Modified car with green underglow"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__overlay" />
        <div className="hero__grain" />
      </div>

      {/* Animated particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__badge">
            <Zap size={12} />
            Since 2019 • Chinnamanur
          </div>

          <h1 className="hero__title">
            Transform Your
            <br />
            Ride Into A <span className="hero__title-accent">Beast</span>
          </h1>

          <p className="hero__subtitle">
            Performance Parts &bull; Custom Mods &bull; Professional Installation
          </p>

          <div className="hero__cta">
            <button className="btn btn-primary btn-lg" onClick={scrollToProducts}>
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={scrollToServices}>
              Explore Mods
            </button>
          </div>

          {/* Trust badges */}
          <motion.div
            className="hero__trust"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hero__trust-item">
              <ShieldCheck size={16} />
              <span>Certified Parts</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <Wrench size={16} />
              <span>Expert Installation</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <Users size={16} />
              <span>25,000+ Happy Customers</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">2000+</span>
            <span className="hero__stat-label">Cars Modified</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Toyota Full Mods</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-number">6+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-number">15+</span>
            <span className="hero__stat-label">Premium Brands</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
