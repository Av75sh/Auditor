import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/formats.css'

const FormatSupport = () => {
  const formats = [
    { name: 'MP3', color: '#FF6B6B', icon: '🎵' },
    { name: 'WAV', color: '#4ECDC4', icon: '🎶' },
    { name: 'FLAC', color: '#45B7D1', icon: '🎼' },
    { name: 'AAC', color: '#96CEB4', icon: '🎤' },
    { name: 'OGG', color: '#FFEAA7', icon: '🎧' },
    { name: 'M4A', color: '#DDA0DD', icon: '🎸' },
    { name: 'WMA', color: '#98D8C8', icon: '🎹' },
    { name: 'AIFF', color: '#F7DC6F', icon: '🥁' },
    { name: 'AU', color: '#BB8FCE', icon: '🎺' }
  ]

  return (
    <section className="formats-section">
      <div className="container">
        <motion.div 
          className="formats-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="formats-text">
            <h2>Supports every formats</h2>
            <p>
              Work with any audio format you need. CleanAudio supports all major audio 
              file types, from compressed formats like MP3 to lossless formats like FLAC. 
              Import, edit, and export in the format that works best for your project.
            </p>
          </div>
          
          <div className="formats-grid">
            {formats.map((format, index) => (
              <motion.div
                key={format.name}
                className="format-item"
                style={{ backgroundColor: format.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="format-icon">{format.icon}</div>
                <span className="format-name">{format.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FormatSupport