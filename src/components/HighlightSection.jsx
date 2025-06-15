import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/highlight.css'

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      <div className="container">
        <motion.div 
          className="highlight-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Hear the difference with CleanAudio</h2>
          <p>
            Experience crystal-clear audio quality with our advanced AI-powered noise reduction 
            and enhancement technology. Transform your recordings from amateur to professional 
            with just one click.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightSection