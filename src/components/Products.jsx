import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp } from 'lucide-react';
import './Products.css';

const products = [
  {
    name: 'Toyota Carbon LC 250 & 300 Steering',
    price: '₹28,500',
    originalPrice: '₹34,000',
    image: '/images/interior-mod.png',
    badge: 'Premium',
    rating: 4.9,
    reviews: 84,
  },
  {
    name: 'Nano Ceramic Sun Film',
    price: '₹8,500',
    originalPrice: '₹12,000',
    image: '/images/sticker-wrap.png',
    badge: 'Trending',
    rating: 4.7,
    reviews: 156,
  },
  {
    name: 'Aozoom W5 Bi-LED Projector',
    price: '₹18,700',
    originalPrice: '₹22,500',
    image: '/images/p2.jpeg',
    badge: 'Best Value',
    rating: 4.8,
    reviews: 92,
  },
  {
    name: 'Premium Rear Bumper Kit',
    price: '₹3,500',
    originalPrice: '₹5,000',
    image: '/images/body-kit.png',
    badge: 'New Arrival',
    rating: 4.6,
    reviews: 43,
  },
  {
    name: 'BMW F10 to M5 Full Conversion',
    price: '₹2,89,999',
    originalPrice: '₹3,50,000',
    image: '/images/p1.jpeg',
    badge: 'Masterpiece',
    rating: 5.0,
    reviews: 28,
  },
  {
    name: 'Crysta Type 2 Luxury Conversion',
    price: '₹34,499',
    originalPrice: '₹42,000',
    image: '/images/p3.jpeg',
    badge: 'Popular',
    rating: 4.8,
    reviews: 112,
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
