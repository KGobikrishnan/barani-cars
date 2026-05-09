import { useState } from 'react';
import { motion } from 'framer-motion';
import './Transformation.css';

export default function Transformation() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  return (
    <section id="transformation" className="transformation section">
      <div className="container">
        <motion.div
          className="transformation__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🔥 Before vs After</span>
          <h2 className="section-title">
            See The <span className="highlight">Transformation</span>
          </h2>
          <p className="section-subtitle">
            Drag the slider to witness the difference. This is what Barani Cars does — turning ordinary into extraordinary.
          </p>
        </motion.div>

        <motion.div
          className="transformation__slider"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After image (full width) */}
          <div className="transformation__after">
            <img src="/images/after-car.png" alt="After modification" loading="lazy" decoding="async" />
            <div className="transformation__label transformation__label--after">
              AFTER
            </div>
          </div>

          {/* Before image (clipped) */}
          <div
            className="transformation__before"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img src="/images/before-car.png" alt="Before modification" loading="lazy" />
            <div className="transformation__label transformation__label--before">
              BEFORE
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="transformation__handle"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="transformation__handle-line" />
            <div className="transformation__handle-knob">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="transformation__hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          ← Drag to compare →
        </motion.p>
      </div>
    </section>
  );
}
