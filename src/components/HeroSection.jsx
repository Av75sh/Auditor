import React from 'react'
import { motion } from 'framer-motion'
import WaveformEditor from './WaveformEditor'
import '../styles/components/hero.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-text">
            <h1>
              Stop wasting hours editing your Audio 🎵 file 🗂️
            </h1>
            <p>
              Automatically removes background noise and enhances your speech using 
              the latest advancement in audio processing.
            </p>
            <motion.a 
              href="#try-free" 
              className="btn btn-primary hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try For Free
            </motion.a>
          </div>
          
          <motion.div 
            className="hero-editor"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WaveformEditor />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection