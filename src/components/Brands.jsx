import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Brands.css';

const brands = [
  'Aozoom', 'MOCO', 'Vextron', 'Morel', 'Dr Artex',
  'Audiblex', 'JBL', 'BLAUPUNKT', 'Alpine', 'Audison',
  'MTX', 'Hypersonic', 'Kicker', 'Focal',
];

export default function Brands() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="brands" className="brands section">
      <div className="container">
        <motion.div
          className="brands__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🏆 Trusted Brands</span>
          <h2 className="section-title">
            We Handle Only <span className="highlight">The Best</span>
          </h2>
          <p className="section-subtitle">
            Authorized dealer and installer for the world's leading car modification and audio brands.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="brands__marquee"
        >
          <div className="brands__track">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="brand-item glass-card">
                <span className="brand-item__name">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Static grid for reference */}
        <motion.div
          className="brands__grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              className="brands__grid-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
