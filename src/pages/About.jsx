import './About.css'
import gymLogo from '../assets/gym logo.jpeg'
import masterImage from '../assets/master-image.jpeg'
import transformation1 from '../assets/Transformation-1.jpeg'
import transformation2 from '../assets/Transformation-2.jpeg'
import transformation3 from '../assets/Transformation-3.jpeg'
import transformation4 from '../assets/Transformation-4.jpeg'
import transformation5 from '../assets/Transformation-5.jpeg'

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

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          
          {/* Owner & Trainer Section */}
          <div className="owner-section">
            <h3>Founder & Master Trainer</h3>
            <div className="owner-card">
              <div className="owner-image">
                <img src={masterImage} alt="Niruban - Founder & Master Trainer" className="owner-photo" />
              </div>
              <div className="owner-info">
                <h4>Niruban</h4>
                <p className="owner-title">Founder, Owner & Master Trainer</p>
                <p className="owner-description">
                  With over 8 years of experience in the fitness industry, Niruban founded Yash Fitness & Gym 
                  and personally trains all members. He specializes in strength training, bodybuilding, 
                  weight loss programs, and nutrition coaching. His hands-on approach ensures every member 
                  receives personalized attention and achieves their fitness goals.
                </p>
                <div className="owner-credentials">
                  <span className="credential">🏆 Certified Fitness Trainer</span>
                  <span className="credential">📚 Sports Science Degree</span>
                  <span className="credential">💪 8 Years Experience</span>
                  <span className="credential">🏋️‍♂️ Strength Training</span>
                  <span className="credential">🔥 Weight Loss Expert</span>
                  <span className="credential">🥗 Nutrition Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="container">
          <h2>Success Stories</h2>
          <p className="section-subtitle">Real transformations from our amazing members</p>
          
          <div className="transformations-grid">
            <div className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={transformation1} alt="Transformation 1" className="transformation-image" />
                    <span className="image-label">Transformation 1</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>Amazing Transformation</h4>
                <p className="transformation-duration">Incredible Results</p>
                <p className="transformation-description">
                  "The dedication and hard work paid off! Niruban's guidance made all the difference 
                  in achieving these amazing results."
                </p>
                <div className="transformation-stats">
                  <span className="stat">🏆 Outstanding Progress</span>
                  <span className="stat">💪 Life Changing</span>
                </div>
              </div>
            </div>

            <div className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={transformation2} alt="Transformation 2" className="transformation-image" />
                    <span className="image-label">Transformation 2</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>Incredible Journey</h4>
                <p className="transformation-duration">Remarkable Progress</p>
                <p className="transformation-description">
                  "From day one to now - the transformation has been incredible! 
                  Thank you Yash Fitness for this amazing journey."
                </p>
                <div className="transformation-stats">
                  <span className="stat">🔥 Amazing Results</span>
                  <span className="stat">🔴 Outstanding Work</span>
                </div>
              </div>
            </div>

            <div className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={transformation3} alt="Transformation 3" className="transformation-image" />
                    <span className="image-label">Transformation 3</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>Fitness Success</h4>
                <p className="transformation-duration">Exceptional Results</p>
                <p className="transformation-description">
                  "The commitment and consistency led to these fantastic results! 
                  Niruban's expertise guided me every step of the way."
                </p>
                <div className="transformation-stats">
                  <span className="stat">💪 Strength Built</span>
                  <span className="stat">🎯 Goals Achieved</span>
                </div>
              </div>
            </div>

            <div className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={transformation4} alt="Transformation 4" className="transformation-image" />
                    <span className="image-label">Transformation 4</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>Life Transformation</h4>
                <p className="transformation-duration">Phenomenal Progress</p>
                <p className="transformation-description">
                  "This transformation represents not just physical change, but a complete lifestyle transformation. 
                  Forever grateful to Yash Fitness!"
                </p>
                <div className="transformation-stats">
                  <span className="stat">🌟 Life Changed</span>
                  <span className="stat">💯 Complete Success</span>
                </div>
              </div>
            </div>

            <div className="transformation-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={transformation5} alt="Transformation 5" className="transformation-image" />
                    <span className="image-label">Transformation 5</span>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>Ultimate Success</h4>
                <p className="transformation-duration">Extraordinary Results</p>
                <p className="transformation-description">
                  "The ultimate proof that dedication and proper guidance can achieve incredible results. 
                  Thank you for believing in me!"
                </p>
                <div className="transformation-stats">
                  <span className="stat">🏆 Ultimate Success</span>
                  <span className="stat">🔴 Exceptional Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Members Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The trainers here are incredibly knowledgeable and supportive. They've helped me achieve 
                goals I never thought possible. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h5>Member Name 1</h5>
                  <span>Member since 2022</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Best gym in Trichy! The community here is amazing and the facilities are top-notch. 
                I've made incredible progress in just 6 months."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h5>Member Name 2</h5>
                  <span>Member since 2023</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The nutrition coaching changed my life! I learned how to eat properly and the results 
                speak for themselves. Thank you team!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h5>Member Name 3</h5>
                  <span>Member since 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 