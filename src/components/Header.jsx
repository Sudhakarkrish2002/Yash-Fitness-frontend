import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'
import gymLogo from '../assets/gym logo.jpeg'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/home' && location.pathname === '/') ||
           (path === '/services' && location.pathname.startsWith('/services')) ||
           (path === '/services' && location.pathname.includes('-training')) ||
           (path === '/services' && location.pathname.includes('-classes'))
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav') && !e.target.closest('.hamburger')) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="logo-image" />
            <h1>Yash Fitness & Gym</h1>
          </Link>
        </div>
        
        {/* Menu Toggle Button - Hamburger or X */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>

        {/* Backdrop Overlay */}
        <div 
          className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/"
                className={`nav-link ${isActive('/home') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 