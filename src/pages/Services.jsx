import './Services.css'
import gymLogo from '../assets/gym logo.jpeg'

const Services = () => {
  return (
    <div className="services">
      {/* Services Content */}
      <section className="services-container">
        <div className="container">
          <div className="services-header">
            <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="services-logo" />
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">💪</div>
              <h3>Personal Training</h3>
              <p>One-on-one sessions with certified personal trainers to help you reach your goals faster.</p>
              <ul>
                <li>Customized workout plans</li>
                <li>Progress tracking</li>
                <li>Nutrition guidance</li>
                <li>24/7 support</li>
              </ul>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🏃‍♂️</div>
              <h3>Group Classes</h3>
              <p>High-energy group workouts including HIIT, Yoga, Spinning, and more.</p>
              <ul>
                <li>HIIT Training</li>
                <li>Yoga & Pilates</li>
                <li>Spinning Classes</li>
                <li>Zumba & Dance</li>
              </ul>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🥗</div>
              <h3>Nutrition Coaching</h3>
              <p>Professional nutrition advice and meal planning to complement your fitness journey.</p>
              <ul>
                <li>Personalized meal plans</li>
                <li>Nutrition consultation</li>
                <li>Supplement guidance</li>
                <li>Progress monitoring</li>
              </ul>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🏋️‍♂️</div>
              <h3>Strength Training</h3>
              <p>Comprehensive strength training programs for all fitness levels.</p>
              <ul>
                <li>Weight training</li>
                <li>Functional training</li>
                <li>Core strengthening</li>
                <li>Flexibility work</li>
              </ul>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🎯</div>
              <h3>Fitness Assessment</h3>
              <p>Comprehensive fitness evaluations to track your progress and set realistic goals.</p>
              <ul>
                <li>Body composition analysis</li>
                <li>Fitness testing</li>
                <li>Goal setting</li>
                <li>Progress reports</li>
              </ul>
            </div>
            
            <div className="service-item">
              <div className="service-icon">👥</div>
              <h3>Group Training</h3>
              <p>Small group training sessions for motivation and camaraderie.</p>
              <ul>
                <li>Small group sessions</li>
                <li>Team building</li>
                <li>Motivational support</li>
                <li>Social fitness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="fees-section">
        <div className="container">
          <h2>Membership Plans & Fees</h2>
          <div className="fees-grid">
            <div className="fee-card basic">
              <div className="fee-header">
                <h3>Basic Plan</h3>
                <div className="fee-price">
                  <span className="amount">₹1,999</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="fee-features">
                <ul>
                  <li>✅ Access to gym equipment</li>
                  <li>✅ Group classes (limited)</li>
                  <li>✅ Locker room access</li>
                  <li>✅ Free parking</li>
                  <li>✅ Basic fitness assessment</li>
                  <li>❌ Personal training</li>
                  <li>❌ Nutrition consultation</li>
                </ul>
              </div>
              <button className="fee-button">Choose Basic</button>
            </div>

            <div className="fee-card premium featured">
              <div className="fee-badge">Most Popular</div>
              <div className="fee-header">
                <h3>Premium Plan</h3>
                <div className="fee-price">
                  <span className="amount">₹3,499</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="fee-features">
                <ul>
                  <li>✅ Everything in Basic</li>
                  <li>✅ Unlimited group classes</li>
                  <li>✅ Personal training (2 sessions/month)</li>
                  <li>✅ Nutrition consultation</li>
                  <li>✅ Recovery services</li>
                  <li>✅ Guest passes (2/month)</li>
                  <li>✅ Priority booking</li>
                </ul>
              </div>
              <button className="fee-button featured">Choose Premium</button>
            </div>

            <div className="fee-card elite">
              <div className="fee-header">
                <h3>Elite Plan</h3>
                <div className="fee-price">
                  <span className="amount">₹5,999</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="fee-features">
                <ul>
                  <li>✅ Everything in Premium</li>
                  <li>✅ Unlimited personal training</li>
                  <li>✅ Exclusive classes</li>
                  <li>✅ Monthly fitness assessment</li>
                  <li>✅ Guest passes (5/month)</li>
                  <li>✅ 24/7 access</li>
                  <li>✅ Personal locker</li>
                </ul>
              </div>
              <button className="fee-button">Choose Elite</button>
            </div>
          </div>

          {/* Additional Services Pricing */}
          <div className="additional-services">
            <h3>Additional Services</h3>
            <div className="service-pricing-grid">
              <div className="service-price-item">
                <h4>Personal Training</h4>
                <p className="price">₹2,500/session</p>
                <p className="description">One-on-one training with certified trainers</p>
              </div>
              <div className="service-price-item">
                <h4>Nutrition Coaching</h4>
                <p className="price">₹1,500/session</p>
                <p className="description">Professional nutrition consultation</p>
              </div>
              <div className="service-price-item">
                <h4>Fitness Assessment</h4>
                <p className="price">₹1,000</p>
                <p className="description">Comprehensive fitness evaluation</p>
              </div>
              <div className="service-price-item">
                <h4>Recovery Services</h4>
                <p className="price">₹1,200/session</p>
                <p className="description">Massage therapy & recovery treatments</p>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="payment-options">
            <h3>Payment Options</h3>
            <div className="payment-grid">
              <div className="payment-item">
                <span className="payment-icon">💳</span>
                <span>Credit/Debit Cards</span>
              </div>
              <div className="payment-item">
                <span className="payment-icon">🏦</span>
                <span>Bank Transfer</span>
              </div>
              <div className="payment-item">
                <span className="payment-icon">📱</span>
                <span>UPI Payment</span>
              </div>
              <div className="payment-item">
                <span className="payment-icon">💰</span>
                <span>Cash Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 