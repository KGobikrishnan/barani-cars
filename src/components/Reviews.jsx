import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Arun Kumar',
    car: 'Toyota Innova',
    rating: 5,
    text: 'Absolutely blown away by the transformation! Got a full body kit + alloy wheels + interior ambient lighting. My Innova looks like a different vehicle now. Best in Chinnamanur!',
    date: '2 weeks ago',
  },
  {
    name: 'Priya Shankar',
    car: 'Hyundai Creta',
    rating: 5,
    text: 'Got my Creta fully detailed with ceramic coating and premium audio from JBL. The team is super professional and the finish is showroom quality. Highly recommend!',
    date: '1 month ago',
  },
  {
    name: 'Vikram Raj',
    car: 'Toyota Fortuner',
    rating: 5,
    text: 'Barani Cars completely transformed my Fortuner. Sports exhaust, LED underglow, custom wrap — everything is top notch. These guys know what they\'re doing!',
    date: '3 weeks ago',
  },
  {
    name: 'Deepak M',
    car: 'Maruti Swift',
    rating: 4,
    text: 'Great experience! Got alloy wheels and interior cleaning done. The quality is premium and the prices are very reasonable. Will definitely come back for more mods.',
    date: '1 month ago',
  },
  {
    name: 'Karthik S',
    car: 'Honda City',
    rating: 5,
    text: 'Audio upgrade with Focal speakers and Alpine head unit. The sound quality is insane now! The installation was clean and professional. Worth every rupee!',
    date: '2 months ago',
  },
  {
    name: 'Ravi Prakash',
    car: 'Toyota Etios',
    rating: 5,
    text: 'Third time customer. Started with polishing, then alloy wheels, and now full interior mod. Barani Cars never disappoints. Best car modification shop in the area!',
    date: '1 week ago',
  },
];

export default function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <motion.div
          className="reviews__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">⭐ Reviews</span>
          <h2 className="section-title">
            What Our <span className="highlight">Customers</span> Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what car enthusiasts say after getting their rides transformed.
          </p>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          className="reviews__summary glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="reviews__summary-rating">
            <span className="reviews__summary-number">4.9</span>
            <div className="reviews__summary-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="var(--color-green)" stroke="var(--color-green)" />
              ))}
            </div>
            <span className="reviews__summary-count">Based on 500+ reviews</span>
          </div>
          <div className="reviews__summary-divider" />
          <div className="reviews__summary-stats">
            <div className="reviews__bar-row">
              <span>5★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '85%' }} /></div>
              <span>85%</span>
            </div>
            <div className="reviews__bar-row">
              <span>4★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '12%' }} /></div>
              <span>12%</span>
            </div>
            <div className="reviews__bar-row">
              <span>3★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '3%' }} /></div>
              <span>3%</span>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="reviews__grid">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="review-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
            >
              <Quote size={24} className="review-card__quote" />
              <div className="review-card__stars">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--color-green)" stroke="var(--color-green)" />
                ))}
                {[...Array(5 - review.rating)].map((_, j) => (
                  <Star key={j} size={14} stroke="var(--color-gray-400)" />
                ))}
              </div>
              <p className="review-card__text">{review.text}</p>
              <div className="review-card__author">
                <div className="review-card__avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="review-card__info">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__car">{review.car} • {review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
