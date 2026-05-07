import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Team.css';

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="team section">
      <div className="container">
        <motion.div
          className="team__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🛠 Our Team</span>
          <h2 className="section-title">
            Meet The <span className="highlight">Experts</span>
          </h2>
          <p className="section-subtitle">
            The passionate craftsmen behind every transformation at Barani Cars.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="team__content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="team__image-wrapper glass-card">
            {/* Using a placeholder-style image for team since I don't have a specific team photo */}
            <div className="team__image-placeholder">
              <img src="/images/team.jpeg" alt="Team at work" className="team__img" />
              <div className="team__overlay">
                <p>Our dedicated team working on a premium modification project.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
