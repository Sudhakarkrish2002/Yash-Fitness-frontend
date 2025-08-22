import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        alert(`Message failed to send: ${result.message}`)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Message failed to send. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or to start your fitness journey in Trichy</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="nutrition">Nutrition Consultation</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Address</h3>
                <p>Yash Fitness & Gym<br />First Floor, Calpurnia Towers<br />Shanmuga Nagar, Tiruchirappalli<br />Sholanganallur, Tamil Nadu 620102<br />India</p>
                <a href="https://maps.app.goo.gl/NbpupsXFiZpdWkfZ6?g_st=ac" target="_blank" rel="noopener noreferrer" className="map-link">
                  🗺️ View on Google Maps
                </a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@yashfitness.com</p>
                <p>support@yashfitness.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Hours</h3>
                <p><strong>Monday - Saturday:</strong></p>
                <p>Morning: 5:00 AM - 12:00 PM</p>
                <p>Evening: 5:00 PM - 10:00 PM</p>
                <p><strong>Sunday:</strong> 6:00 AM - 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us in Trichy</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.45678901234!2d78.6569!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf3670e5a6721%3A0x6c38c3e8b8b8b8b8!2sYash+Fitness+%26+Gym!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yash Fitness & Gym Location"
            ></iframe>
            <div className="map-overlay">
              <div className="map-info">
                <h3>📍 Yash Fitness & Gym</h3>
                <p>First Floor, Calpurnia Towers</p>
                <p>Shanmuga Nagar, Tiruchirappalli</p>
                <p>Sholanganallur, Tamil Nadu 620102</p>
                <p>Easily accessible by public transport</p>
                <p>Free parking available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 