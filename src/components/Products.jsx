import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp } from 'lucide-react';
import './Products.css';

const products = [
  {
    name: 'Sports Exhaust System',
    price: '₹18,999',
    originalPrice: '₹24,999',
    image: '/images/exhaust-product.png',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 142,
  },
  {
    name: 'LED Underglow Kit',
    price: '₹4,999',
    originalPrice: '₹7,499',
    image: '/images/underglow-product.png',
    badge: 'Trending',
    rating: 4.6,
    reviews: 89,
  },
  {
    name: 'Carbon Fiber Spoiler',
    price: '₹12,499',
    originalPrice: '₹16,999',
    image: '/images/spoiler-product.png',
    badge: 'Premium',
    rating: 4.9,
    reviews: 67,
  },
  {
    name: 'Alloy Wheels Set (4pc)',
    price: '₹32,999',
    originalPrice: '₹45,000',
    image: '/images/alloy-wheels-product.png',
    badge: 'Hot Deal',
    rating: 4.7,
    reviews: 213,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="products" className="products section">
      <div className="products__bg-accent" />

      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <TrendingUp size={12} /> Featured Products
          </span>
          <h2 className="section-title">
            Top <span className="highlight">Sellers</span>
          </h2>
          <p className="section-subtitle">
            Our most popular modifications hand-picked by car enthusiasts and professionals alike.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="products__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="product-card glass-card"
              variants={cardVariants}
            >
              <div className="product-card__badge">{product.badge}</div>
              <div className="product-card__image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-card__info">
                <div className="product-card__rating">
                  <Star size={14} fill="var(--color-green)" stroke="var(--color-green)" />
                  <span>{product.rating}</span>
                  <span className="product-card__reviews">({product.reviews})</span>
                </div>
                <h3 className="product-card__name">{product.name}</h3>
                <div className="product-card__pricing">
                  <span className="product-card__price">{product.price}</span>
                  <span className="product-card__original">{product.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
