import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gauge, Paintbrush, Lightbulb, CircleDot, Wind, Sparkles } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Gauge,
    title: 'Performance Upgrades',
    desc: 'Turbo kits, ECU tuning, air intakes & more to unleash your engine\'s true potential.',
    image: '/images/body-kit.png',
    color: 'green',
  },
  {
    icon: Paintbrush,
    title: 'Exterior Mods',
    desc: 'Body kits, wraps, spoilers & custom paint to make heads turn wherever you go.',
    image: '/images/sticker-wrap.png',
    color: 'red',
  },
  {
    icon: Lightbulb,
    title: 'Interior Mods',
    desc: 'Ambient lighting, premium seats, audio upgrades & dashboard customization.',
    image: '/images/interior-mod.png',
    color: 'green',
  },
  {
    icon: CircleDot,
    title: 'Alloy Wheels & Tires',
    desc: 'Premium aftermarket alloy wheels in all sizes. Perfect stance guaranteed.',
    image: '/images/alloy-wheels-product.png',
    color: 'red',
  },
  {
    icon: Wind,
    title: 'Exhaust Systems',
    desc: 'Sports exhaust, catalytic converters & titanium tips for that aggressive sound.',
    image: '/images/exhaust-product.png',
    color: 'green',
  },
  {
    icon: Sparkles,
    title: 'Car Care',
    desc: 'Interior deep cleaning, ceramic coating, car polishing & paint protection.',
    image: '/images/hero-car.png',
    color: 'red',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="services section">
      {/* Background glow */}
      <div className="services__glow" />

      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">⚡ Our Services</span>
          <h2 className="section-title">
            What We <span className="highlight">Offer</span>
          </h2>
          <p className="section-subtitle">
            From subtle upgrades to full beast-mode transformations — we do it all with precision and passion.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className={`service-card glass-card service-card--${service.color}`}
                variants={cardVariants}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-card__image-overlay" />
                </div>
                <div className="service-card__content">
                  <div className={`service-card__icon service-card__icon--${service.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
