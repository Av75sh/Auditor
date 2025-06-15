import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/cta.css'

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Download the best audio editor for you 🎧</h2>
          <p>
            Get started with CleanAudio today and transform your audio editing workflow. 
            Available for Windows and Mac with full feature compatibility.
          </p>
          
          <div className="download-buttons">
            <motion.a 
              href="#download-windows" 
              className="download-btn windows"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="btn-icon">🪟</div>
              <div className="btn-text">
                <span className="btn-label">Download for</span>
                <span className="btn-platform">Windows</span>
              </div>
            </motion.a>
            
            <motion.a 
              href="#download-mac" 
              className="download-btn mac"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="btn-icon">🍎</div>
              <div className="btn-text">
                <span className="btn-label">Download for</span>
                <span className="btn-platform">Mac</span>
              </div>
            </motion.a>
          </div>
          
          <div className="cta-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Free 14-day trial</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Full feature access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction