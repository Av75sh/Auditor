import React from 'react'
import { motion } from 'framer-motion'
import '../styles/components/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <span>🎵</span>
                </div>
                <span className="logo-text">Auditor</span>
              </div>
              <p>
                The professional audio editing tool that makes your recordings 
                sound crystal clear with AI-powered noise reduction.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#download">Download</a>
                <a href="#tutorials">Tutorials</a>
              </div>
              
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              
              <div className="link-group">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#docs">Documentation</a>
                <a href="#community">Community</a>
                <a href="#status">Status</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="#twitter" className="social-link">🐦</a>
              <a href="#facebook" className="social-link">📘</a>
              <a href="#instagram" className="social-link">📷</a>
              <a href="#youtube" className="social-link">📺</a>
            </div>
            
            <div className="footer-legal">
              <span>&copy; 2025 Auditor. All rights reserved.</span>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer