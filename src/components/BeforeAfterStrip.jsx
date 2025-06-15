import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/before-after.css'

const BeforeAfterStrip = () => {
  return (
    <section className="before-after-section">
      <div className="container">
        <motion.div 
          className="before-after-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="comparison-container">
            <div className="comparison-side before">
              <div className="comparison-header">
                <h3>Before</h3>
                <span className="timestamp">00:18:38</span>
              </div>
              <div className="waveform-preview noisy">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=100&fit=crop&crop=center" 
                  alt="Noisy waveform before cleaning"
                />
                <div className="noise-overlay"></div>
              </div>
              <p>Background noise and distortion make your audio unprofessional</p>
            </div>
            
            <div className="vs-divider">
              <span>VS</span>
            </div>
            
            <div className="comparison-side after">
              <div className="comparison-header">
                <h3>After</h3>
                <span className="timestamp">00:18:38</span>
              </div>
              <div className="waveform-preview clean">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=100&fit=crop&crop=center" 
                  alt="Clean waveform after processing"
                />
                <div className="clean-overlay"></div>
              </div>
              <p>Crystal clear audio that sounds professional and polished</p>
            </div>
          </div>
          
          <motion.a 
            href="#try-now" 
            className="btn btn-primary comparison-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try CleanAudio Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterStrip