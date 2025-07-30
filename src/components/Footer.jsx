import { Link } from 'react-router-dom'
import './Footer.css'
import gymLogo from '../assets/gym logo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Yash Fitness & Gym</h3>
          <p>Transform your life with our comprehensive fitness programs and expert guidance in Trichy.</p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📍 First Floor, Calpurnia Towers, Shanmuga Nagar, Tiruchirappalli, Sholanganallur, Tamil Nadu 620102</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@yashfitness.com</p>
            <p>🕒 Mon-Sat: 5AM-12AM & 5PM-10PM</p>
            <p>🕒 Sun: 6AM-10AM</p>
            <a href="https://maps.google.com/?q=Calpurnia+Towers+Shanmuga+Nagar+Tiruchirappalli+Sholanganallur+Tamil+Nadu+620102" target="_blank" rel="noopener noreferrer" className="map-link">
              🗺️ View on Google Maps
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Yash Fitness & Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 