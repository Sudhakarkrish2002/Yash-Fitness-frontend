import './About.css'
import gymLogo from '../assets/gym logo.jpeg'

const About = () => {
  return (
    <div className="about">
      {/* About Content */}
      <section className="about-container">
        <div className="container">
          <div className="about-header">
            <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="about-logo" />
            <h2>About Yash Fitness & Gym</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Yash Fitness & Gym is more than just a gym - it's a community dedicated to transforming lives through fitness. 
                Founded with the vision of making fitness accessible to everyone, we provide world-class facilities, 
                expert guidance, and a supportive environment where members can achieve their fitness goals.
              </p>
              <p>
                Our state-of-the-art facility features the latest equipment, diverse class offerings, and certified trainers 
                who are passionate about helping you succeed. Whether you're a beginner or an experienced athlete, 
                we have programs tailored to your needs and goals.
              </p>
              <p>
                Join our community of fitness enthusiasts and start your journey towards a healthier, stronger you. 
                At Yash Fitness & Gym, we believe that everyone deserves to feel confident, strong, and healthy.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Expert Trainers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 