import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Maximize2, Shuffle, Camera, Film } from 'lucide-react';
import './Gallery.css';

const initialItems = [
  { id: 1, type: 'image', url: '/gallery/1.jpeg', title: 'Carbon Fiber Detailing', aspect: 'square', category: 'photo' },
  { id: 2, type: 'image', url: '/gallery/2.jpeg', title: 'Performance Tuning', aspect: 'square', category: 'photo' },
  { id: 3, type: 'image', url: '/gallery/3.jpeg', title: 'Interior Luxury', aspect: 'landscape', category: 'photo' },
  { id: 4, type: 'image', url: '/gallery/4.jpeg', title: 'Matte Body Wrap', aspect: 'landscape', category: 'photo' },
  { id: 5, type: 'image', url: '/gallery/5.jpeg', title: 'Custom Alloy Wheels', aspect: 'square', category: 'photo' },
  { id: 6, type: 'video', url: '/gallery/6.mp4', title: 'Exhaust Sound Test', aspect: 'landscape', category: 'video' },
  { id: 7, type: 'image', url: '/gallery/7.jpeg', title: 'LED System Install', aspect: 'square', category: 'photo' },
  { id: 8, type: 'image', url: '/gallery/8.jpeg', title: 'Aerodynamic Kit', aspect: 'square', category: 'photo' },
  { id: 9, type: 'video', url: '/gallery/9.mp4', title: 'Night Run Lights', aspect: 'portrait', category: 'video' },
  { id: 10, type: 'video', url: '/gallery/10.mp4', title: 'Beast Unleashed', aspect: 'portrait', category: 'video' },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState('all');

  const shuffleGallery = () => {
    setItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  // Continuous auto-shuffle
  useEffect(() => {
    let interval;
    if (inView && filter === 'all') {
      interval = setInterval(shuffleGallery, 8000); // Shuffle every 8 seconds
    }
    return () => clearInterval(interval);
  }, [inView, filter]);

  const filteredItems = items.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__glow" />
      
      <div className="container container--wide">
        <div className="gallery__top">
          <motion.div
            className="gallery__header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">💎 Premium Portfolio</span>
            <h2 className="section-title text-left">
              The <span className="highlight">Beast</span> Gallery
            </h2>
            <p className="section-subtitle text-left">
              Explore our latest masterpieces. Shuffled dynamically to showcase the breadth of our craftsmanship.
            </p>
          </motion.div>

          <motion.div 
            className="gallery__controls"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gallery__filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'photo' ? 'active' : ''}`}
                onClick={() => setFilter('photo')}
              >
                <Camera size={14} /> Photos
              </button>
              <button 
                className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
                onClick={() => setFilter('video')}
              >
                <Film size={14} /> Videos
              </button>
            </div>
            <button className="shuffle-btn" onClick={shuffleGallery}>
              <Shuffle size={18} />
              <span>Shuffle</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="gallery__bento"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: 'spring', 
                  damping: 25, 
                  stiffness: 120,
                  layout: { duration: 0.8, ease: "easeInOut" }
                }}
                className={`gallery__bento-item gallery__bento-item--${item.aspect}`}
              >
                <div className="gallery__item-inner">
                  {item.type === 'video' ? (
                    <video 
                      src={item.url} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="gallery__video"
                    />
                  ) : (
                    <img src={item.url} alt={item.title} className="gallery__img" />
                  )}
                  
                  <div className="gallery__item-overlay">
                    <div className="gallery__item-info">
                      <span className="item-tag">{item.type}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="gallery__item-action">
                      <Maximize2 size={20} />
                    </div>
                  </div>

                  {item.type === 'video' && (
                    <div className="video-indicator">
                      <div className="video-dot" />
                      LIVE
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
