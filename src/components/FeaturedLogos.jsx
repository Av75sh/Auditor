import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/featured.css'

const FeaturedLogos = () => {
  const logos = [
    'Cloud', 'Proline', 'Leafe', 'Penta', 'Recharge',
    'Snowflake', 'Hues', 'Cactus', 'Vision', 'Greenish'
  ]

  return (
    <section className="featured-section">
      <div className="container">
        <motion.div 
          className="featured-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="featured-text">We are Featured In</p>
          <div className="logos-grid">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                className="logo-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="logo-text">{logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedLogos