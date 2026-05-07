import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Arun Kumar',
    car: 'Toyota Innova',
    rating: 5,
    text: 'Absolutely blown away by the transformation! Got a full body kit + alloy wheels + interior ambient lighting. My Innova looks like a different vehicle now.',
    date: '2 weeks ago',
  },
  {
    name: 'Priya Shankar',
    car: 'Hyundai Creta',
    rating: 5,
    text: 'Got my Creta fully detailed with ceramic coating and premium audio from JBL. The team is super professional and the finish is showroom quality.',
    date: '1 month ago',
  },
  {
    name: 'Vikram Raj',
    car: 'Toyota Fortuner',
    rating: 5,
    text: 'Barani Cars completely transformed my Fortuner. Sports exhaust, LED underglow, custom wrap — everything is top notch. These guys know car mods!',
    date: '3 weeks ago',
  },
  {
    name: 'Deepak M',
    car: 'Maruti Swift',
    rating: 5,
    text: 'Great experience! Got alloy wheels and interior cleaning done. The quality is premium and the prices are very reasonable. Will definitely come back.',
    date: '1 month ago',
  },
  {
    name: 'Karthik S',
    car: 'Honda City',
    rating: 5,
    text: 'Audio upgrade with Focal speakers and Alpine head unit. The sound quality is insane now! The installation was clean and professional.',
    date: '2 months ago',
  },
  {
    name: 'Ravi Prakash',
    car: 'Toyota Etios',
    rating: 5,
    text: 'Third time customer. Started with polishing, then alloy wheels, and now full interior mod. Barani Cars never disappoints. Best in Chinnamanur!',
    date: '1 week ago',
  },
  {
    name: 'Sanjay Ram',
    car: 'Mahindra Thar',
    rating: 5,
    text: 'The beast is ready! Lift kit, massive tires, and off-road lighting. Barani Cars transformed my Thar into a monster. Loving every bit of it.',
    date: '4 days ago',
  },
  {
    name: 'Meera Nair',
    car: 'Volkswagen Polo',
    rating: 5,
    text: 'Got a custom matte black wrap and interior detailing. My Polo looks so classy now. The attention to detail is truly impressive.',
    date: '2 months ago',
  },
  {
    name: 'Rajesh K',
    car: 'Skoda Slavia',
    rating: 5,
    text: 'Excellent service! The ceramic coating is perfect, and the new seat covers feel very premium. Best car service center around here.',
    date: '1 month ago',
  },
  {
    name: 'Anita B',
    car: 'MG Hector',
    rating: 5,
    text: 'Highly impressed with the tech upgrades. The new touchscreen and 360-degree camera work perfectly. Professional team and clean work.',
    date: '3 weeks ago',
  },
  {
    name: 'Suresh V',
    car: 'Tata Nexon',
    rating: 5,
    text: 'Great modification shop! The new underglow and custom decals look amazing on my Nexon. Fast delivery and high quality work.',
    date: '5 days ago',
  },
  {
    name: 'Gokul Nath',
    car: 'Kia Seltos',
    rating: 5,
    text: 'The best place for car enthusiasts. They suggest the best mods according to our budget. My Seltos sounds and looks premium now.',
    date: '2 months ago',
  },
  {
    name: 'Mani Maran',
    car: 'BMW 3 Series',
    rating: 5,
    text: 'Handled my BMW with extreme care. Got carbon fiber mirrors and a spoiler. The fit and finish are as good as factory work.',
    date: '1 week ago',
  },
  {
    name: 'Sathish J',
    car: 'Ford Endeavour',
    rating: 5,
    text: 'Huge transformation! My Endeavour looks much more aggressive with the new grille and lights. The team did a fantastic job.',
    date: '3 weeks ago',
  },
  {
    name: 'Prabhu T',
    car: 'Maruti Baleno',
    rating: 5,
    text: 'Amazing sound system upgrade! Recoil audio setup with a powerful subwoofer. My car is basically a moving concert now.',
    date: '1 month ago',
  },
  {
    name: 'Naveen R',
    car: 'Hyundai Verna',
    rating: 5,
    text: 'Got my Verna lowered and added some custom alloys. The stance is perfect now. Thanks to the experts at Barani Cars.',
    date: '2 weeks ago',
  },
  {
    name: 'Kishore L',
    car: 'Toyota Camry',
    rating: 5,
    text: 'Top tier service. The paint protection film was applied perfectly. My Camry looks brand new even after months. Very happy.',
    date: '4 months ago',
  },
  {
    name: 'Ashwin C',
    car: 'Mercedes C-Class',
    rating: 5,
    text: 'Professional mods for premium cars. Got the interior ambient lighting and detailing done. Highly satisfied with the results.',
    date: '1 month ago',
  }
];

export default function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Split reviews into two rows
  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  const ReviewCard = ({ review }) => (
    <div className="review-card glass-card">
      <Quote size={24} className="review-card__quote" />
      <div className="review-card__stars">
        {[...Array(review.rating)].map((_, j) => (
          <Star key={j} size={14} fill="var(--color-green)" stroke="var(--color-green)" />
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
    </div>
  );

  return (
    <section id="reviews" className="reviews section">
      <div className="container container--wide">
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
            Don't just take our word for it. Join 25,000+ happy car owners who transformed their rides with us.
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
            <span className="reviews__summary-count">Based on 1,500+ reviews</span>
          </div>
          <div className="reviews__summary-divider" />
          <div className="reviews__summary-stats">
            <div className="reviews__bar-row">
              <span>5★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '92%' }} /></div>
              <span>92%</span>
            </div>
            <div className="reviews__bar-row">
              <span>4★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '7%' }} /></div>
              <span>7%</span>
            </div>
            <div className="reviews__bar-row">
              <span>3★</span>
              <div className="reviews__bar"><div className="reviews__bar-fill" style={{ width: '1%' }} /></div>
              <span>1%</span>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="reviews__marquee-container">
          {/* Row 1: Right to Left */}
          <div className="reviews__marquee reviews__marquee--rtl">
            <div className="reviews__marquee-track">
              {[...row1, ...row1].map((review, i) => (
                <ReviewCard key={`row1-${i}`} review={review} />
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="reviews__marquee reviews__marquee--ltr">
            <div className="reviews__marquee-track">
              {[...row2, ...row2].map((review, i) => (
                <ReviewCard key={`row2-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
