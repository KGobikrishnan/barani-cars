import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Maximize2 } from 'lucide-react';
import './Gallery.css';

const galleryItems = [
  { id: 1, type: 'image', url: '/images/body-kit.png', title: 'Supra Body Kit', size: 'large', rotate: -2 },
  { id: 2, type: 'video', url: '/images/hero-car.png', title: 'Neon Night Run', size: 'medium', rotate: 3 },
  { id: 3, type: 'image', url: '/images/sticker-wrap.png', title: 'Matte Black Wrap', size: 'small', rotate: -1 },
  { id: 4, type: 'image', url: '/images/interior-mod.png', title: 'Ambient Lights', size: 'medium', rotate: 2 },
  { id: 5, type: 'video', url: '/images/exhaust-product.png', title: 'Exhaust Sound Check', size: 'small', rotate: -3 },
  { id: 6, type: 'image', url: '/images/alloy-wheels-product.png', title: 'Forged Alloys', size: 'medium', rotate: 1 },
  { id: 7, type: 'image', url: '/images/underglow-product.png', title: 'Underglow Kit', size: 'small', rotate: 4 },
  { id: 8, type: 'image', url: '/images/spoiler-product.png', title: 'Carbon Wing', size: 'medium', rotate: -2 },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [items, setItems] = useState(galleryItems);

  // Shuffle logic for that "dynamic" feel
  const shuffleGallery = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    const interval = setInterval(shuffleGallery, 10000); // Shuffle every 10s for dynamic feel
    return () => clearInterval(interval);
  }, [items]);

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__background-text">24<span>October</span></div>
      
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🔥 Latest Transformations</span>
          <h2 className="section-title">
            Recent <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Witness the beastly transformations from our workshop. Images and videos shuffled for your viewing pleasure.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="gallery__collage"
          layout
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotate: item.rotate * 2 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: item.rotate,
                  transition: { type: 'spring', damping: 20, stiffness: 100 }
                } : {}}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 10,
                  transition: { duration: 0.3 } 
                }}
                className={`gallery__card gallery__card--${item.size}`}
              >
                <div className="gallery__card-inner">
                  <div className="gallery__media">
                    <img src={item.url} alt={item.title} loading="lazy" />
                    {item.type === 'video' && (
                      <div className="gallery__play-btn">
                        <Play fill="white" size={24} />
                      </div>
                    )}
                    <div className="gallery__card-overlay">
                      <div className="gallery__card-info">
                        <h3>{item.title}</h3>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
