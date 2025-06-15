import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/components/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="logo-icon">
              <span>🎵</span>
            </div>
            <span className="logo-text">Auditor</span>
          </div>
          
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features" className="navbar-link">Features</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#blog" className="navbar-link">Blog</a>
            <a href="#pricing" className="navbar-link">Pricing</a>
          </div>
          
          <div className="navbar-actions">
            <a href="#login" className="btn btn-outline">Log In</a>
            <a href="#signup" className="btn btn-primary">Get Started</a>
          </div>
          
          <button 
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar