import './Home.css'
import gymLogo from '../assets/gym logo.jpeg'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">
              <span>🏆 #1 Fitness Center in Trichy</span>
            </div>
            <h1>Transform Your Life at Yash Fitness & Gym</h1>
            <p>Join our community of fitness enthusiasts and transform your life with expert guidance, state-of-the-art equipment, and unwavering support.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Expert Trainers</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary">Join Now</button>
              <button className="btn-secondary">Free Trial</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="gym-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Yash Fitness & Gym?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals dedicated to helping you achieve your fitness goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art fitness equipment for all your training needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Community</h3>
              <p>Join a supportive community of fitness enthusiasts and make new friends.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Personalized Plans</h3>
              <p>Custom workout and nutrition plans tailored to your specific goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Personal Training</h3>
              <p>One-on-one sessions with certified personal trainers to help you reach your goals faster.</p>
            </div>
            <div className="service-card">
              <h3>Group Classes</h3>
              <p>High-energy group workouts including HIIT, Yoga, Spinning, and more.</p>
            </div>
            <div className="service-card">
              <h3>Nutrition Coaching</h3>
              <p>Professional nutrition advice and meal planning to complement your fitness journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 