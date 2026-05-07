import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import './Map.css';

export default function Map() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.475471845186!2d77.3789467746401!3d9.89431877484551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07137f8996b797%3A0xe5a36371891b9b1e!2sBarani%20Cars!5e0!3m2!1sen!2sin!4v1715083838914!5m2!1sen!2sin";
  const directLink = "https://maps.app.goo.gl/Nsef9fccAcqNeYRw6";

  return (
    <section className="map-section">
      <div className="container container--wide">
        <motion.div 
          className="map-container glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Overlay */}
          <div className="map-header">
            <div className="map-info">
              <div className="map-icon-bg">
                <MapPin className="map-icon" size={24} />
              </div>
              <div className="map-text">
                <h3>Visit Our Studio</h3>
                <p>Theni Main Road, Chinnamanur, Tamil Nadu</p>
              </div>
            </div>
            <a 
              href={directLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm map-btn"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>

          {/* Map Embed Wrapper */}
          <div className="map-wrapper" onClick={() => window.open(directLink, '_blank')}>
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barani Cars Location"
              className="map-iframe"
            ></iframe>
            
            {/* Click to Open Overlay */}
            <div className="map-click-overlay">
              <div className="map-click-content">
                <ExternalLink size={32} />
                <span>Open in Google Maps</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
