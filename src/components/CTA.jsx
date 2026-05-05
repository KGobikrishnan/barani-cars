import { motion } from 'framer-motion';
import { Calendar, ShoppingBag } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    window.location.href = 'tel:8344431888';
  };

  return (
    <section id="contact" className="cta section">
      <div className="container">
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta__content">
            <h2 className="cta__title">Ready to <span className="highlight">Upgrade</span> Your Car?</h2>
            <p className="cta__text">
              Join 25,000+ happy customers and transform your vehicle today. Expert advice and professional installation are just a click away.
            </p>
            <div className="cta__buttons">
              <button className="btn btn-primary btn-lg" onClick={handleBookConsultation}>
                <Calendar size={20} />
                Book Consultation
              </button>
              <button className="btn btn-secondary btn-lg" onClick={scrollToProducts}>
                <ShoppingBag size={20} />
                Browse Products
              </button>
            </div>
          </div>
          <div className="cta__image-container">
             <img src="/images/hero-car.png" alt="Modified car silhouette" className="cta__image" />
             <div className="cta__image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
