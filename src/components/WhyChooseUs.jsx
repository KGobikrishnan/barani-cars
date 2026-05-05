import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Wrench, Zap, Truck } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality Parts',
    desc: 'We source only from authorized dealers. Every part comes with warranty and certification.',
    stat: '100%',
    statLabel: 'Genuine',
    color: 'green',
  },
  {
    icon: Wrench,
    title: 'Expert Installation Team',
    desc: '6+ years of hands-on experience with 2000+ cars modified. Your ride is in safe hands.',
    stat: '2000+',
    statLabel: 'Cars Done',
    color: 'red',
  },
  {
    icon: Zap,
    title: 'Performance Guaranteed',
    desc: 'Every mod is tested and tuned to perfection. We don\'t just install — we optimize.',
    stat: '100%',
    statLabel: 'Satisfaction',
    color: 'green',
  },
  {
    icon: Truck,
    title: 'Fast Shipping & Service',
    desc: 'Quick turnaround times and pan-India shipping for parts. Get modding faster.',
    stat: '24hr',
    statLabel: 'Turnaround',
    color: 'red',
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" className="why-us section">
      <div className="why-us__bg-line" />

      <div className="container">
        <div className="why-us__layout">
          <motion.div
            className="why-us__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">💪 Why Us</span>
            <h2 className="section-title">
              Why Car Enthusiasts
              <br />
              Choose <span className="highlight">Barani Cars</span>
            </h2>
            <p className="section-subtitle">
              We don't just sell parts — we build dreams. Since 2019, we've been the go-to
              destination for car modification in Chinnamanur and beyond.
            </p>

            <div className="why-us__counter">
              <div className="why-us__counter-item">
                <span className="why-us__counter-number">25,000+</span>
                <span className="why-us__counter-label">Happy Customers</span>
              </div>
              <div className="why-us__counter-item">
                <span className="why-us__counter-number">25+</span>
                <span className="why-us__counter-label">Toyota Full Mods</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="why-us__right"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  className={`why-us__card glass-card why-us__card--${reason.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <div className={`why-us__card-icon why-us__card-icon--${reason.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="why-us__card-content">
                    <h3 className="why-us__card-title">{reason.title}</h3>
                    <p className="why-us__card-desc">{reason.desc}</p>
                  </div>
                  <div className={`why-us__card-stat why-us__card-stat--${reason.color}`}>
                    <span className="why-us__card-stat-number">{reason.stat}</span>
                    <span className="why-us__card-stat-label">{reason.statLabel}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
