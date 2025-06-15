import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/effects.css'

const AudioEffects = () => {
  return (
    <section className="effects-section">
      <div className="container">
        <motion.div 
          className="effects-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="effects-text">
            <h2>Edit your Audio with awesome effects</h2>
            <p>
              CleanAudio lets you add professional-grade effects to enhance your audio. 
              From EQ and compression to reverb and creative filters, our intuitive 
              interface makes it easy to achieve studio-quality results.
            </p>
            <ul className="effects-list">
              <li>Professional EQ and dynamics processing</li>
              <li>Creative reverb and delay effects</li>
              <li>Real-time preview and adjustment</li>
              <li>One-click preset application</li>
            </ul>
          </div>
          
          <motion.div 
            className="effects-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="effects-image-container">
              <img 
                src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=500&h=400&fit=crop&crop=center" 
                alt="Audio effects interface"
                className="effects-image"
              />
              <div className="effects-overlay">
                <div className="effect-controls">
                  <div className="control-knob"></div>
                  <div className="control-knob"></div>
                  <div className="control-knob"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AudioEffects