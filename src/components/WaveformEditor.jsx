import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/components/waveform.css'

const WaveformEditor = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('00:00:05')
  const [totalTime] = useState('00:18:38')
  const [activeTrack, setActiveTrack] = useState(null)

  const tracks = [
    { id: 1, name: 'Audio 1', color: '#FFD700', waveform: generateWaveform(50, 0.6) },
    { id: 2, name: 'Audio 2', color: '#00CED1', waveform: generateWaveform(40, 0.8) },
    { id: 3, name: 'Audio 3', color: '#FF6B6B', waveform: generateWaveform(60, 0.7) },
    { id: 4, name: 'Audio 4', color: '#9B59B6', waveform: generateWaveform(80, 0.9) }
  ]

  function generateWaveform(count, intensity) {
    return Array.from({ length: count }, () => Math.random() * intensity + 0.1)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div 
      className="waveform-editor"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="editor-header">
        <div className="editor-tabs">
          <button className="tab active">File</button>
          <button className="tab">Edit</button>
          <button className="tab">Settings</button>
          <button className="tab">Tutorials</button>
        </div>
        <div className="editor-actions">
          <button className="btn btn-primary export-btn">Export</button>
          <div className="user-avatar">🎧</div>
        </div>
      </div>

      <div className="timeline">
        <div className="time-markers">
          <span>00:00</span>
          <span>00:05</span>
          <span>00:10</span>
          <span>00:15</span>
          <span>00:20</span>
        </div>
      </div>

      <div className="tracks-container">
        {tracks.map((track, index) => (
          <motion.div 
            key={track.id}
            className={`track ${activeTrack === track.id ? 'active' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setActiveTrack(track.id)}
          >
            <div className="track-label">{track.name}</div>
            <div className="track-waveform">
              <div className="waveform-container">
                {track.waveform.map((height, i) => (
                  <div
                    key={i}
                    className="waveform-bar"
                    style={{
                      height: `${height * 100}%`,
                      backgroundColor: track.color,
                      opacity: i < 25 ? 1 : 0.6
                    }}
                  />
                ))}
              </div>
              <div className="playhead" style={{ left: '25%' }}></div>
            </div>
          </motion.div>
        ))}
        
        <motion.button 
          className="add-track"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          + Add
        </motion.button>
      </div>

      <div className="editor-controls">
        <div className="time-display">
          {currentTime} / {totalTime}
        </div>
        <div className="playback-controls">
          <button className="control-btn">⏮</button>
          <motion.button 
            className="control-btn play-btn"
            onClick={handlePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>
          <button className="control-btn">⏭</button>
        </div>
        <div className="additional-controls">
          <button className="control-btn">🔊</button>
          <button className="control-btn">↶</button>
          <button className="control-btn">↷</button>
        </div>
      </div>
    </motion.div>
  )
}

export default WaveformEditor