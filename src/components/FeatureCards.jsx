import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/features.css'

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: 'Edit & Enhance Audio',
      description: 'Professional-grade editing tools with AI-powered enhancement for crystal clear sound quality.',
      icon: '🎛️',
      variant: 'white'
    },
    {
      id: 2,
      title: 'Create Music CDs',
      description: 'Burn your edited tracks directly to CD with professional mastering and track organization.',
      icon: '💿',
      variant: 'black'
    },
    {
      id: 3,
      title: 'Reduce Noise',
      description: 'Advanced noise reduction algorithms that eliminate background noise while preserving audio quality.',
      icon: '🔇',
      variant: 'white'
    },
    {
      id: 4,
      title: 'Capture Any Sound',
      description: 'Record from any source with high-fidelity capture and real-time monitoring capabilities.',
      icon: '🎤',
      variant: 'black'
    }
  ]

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`feature-card ${feature.variant}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards