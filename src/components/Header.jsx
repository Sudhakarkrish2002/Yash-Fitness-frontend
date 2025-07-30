import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import gymLogo from '../assets/gym logo.jpeg'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/home' && location.pathname === '/') ||
           (path === '/services' && location.pathname.startsWith('/services')) ||
           (path === '/services' && location.pathname.includes('-training')) ||
           (path === '/services' && location.pathname.includes('-classes'))
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="logo-image" />
            <h1>Yash Fitness & Gym</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link 
                to="/"
                className={`nav-link ${isActive('/home') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
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