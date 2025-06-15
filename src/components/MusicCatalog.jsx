import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/catalog.css'

const MusicCatalog = () => {
  return (
    <section className="catalog-section">
      <div className="container">
        <motion.div 
          className="catalog-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="catalog-visual">
            <div className="catalog-interface">
              <div className="interface-header">
                <div className="interface-tabs">
                  <span className="tab active">Library</span>
                  <span className="tab">Playlists</span>
                  <span className="tab">Recent</span>
                </div>
                <div className="search-bar">
                  <span>🔍</span>
                </div>
              </div>
              
              <div className="music-list">
                <div className="music-item">
                  <div className="music-icon">🎵</div>
                  <div className="music-info">
                    <span className="music-title">Summer Vibes</span>
                    <span className="music-duration">3:24</span>
                  </div>
                </div>
                <div className="music-item">
                  <div className="music-icon">🎶</div>
                  <div className="music-info">
                    <span className="music-title">Acoustic Dreams</span>
                    <span className="music-duration">4:12</span>
                  </div>
                </div>
                <div className="music-item">
                  <div className="music-icon">🎸</div>
                  <div className="music-info">
                    <span className="music-title">Rock Anthem</span>
                    <span className="music-duration">5:03</span>
                  </div>
                </div>
                <div className="music-item">
                  <div className="music-icon">🎹</div>
                  <div className="music-info">
                    <span className="music-title">Piano Melody</span>
                    <span className="music-duration">2:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="catalog-text">
            <h2>Spice things up with our vast catalog of music & sounds</h2>
            <p>
              Save time with our extensive library of royalty-free music and sound effects. 
              From background music to sound effects, find the perfect audio to complement 
              your projects and enhance your creative workflow.
            </p>
            <ul className="catalog-features">
              <li>10,000+ royalty-free tracks</li>
              <li>Professional sound effects library</li>
              <li>Easy search and preview</li>
              <li>Instant download and integration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MusicCatalog