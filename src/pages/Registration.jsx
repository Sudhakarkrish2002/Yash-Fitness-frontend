import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'
import gymLogo from '../assets/gym logo.jpeg'

const Registration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    
    // Health Information
    height: '',
    weight: '',
    bloodGroup: '',
    medicalConditions: '',
    medications: '',
    allergies: '',
    
    // Fitness Information
    fitnessGoals: '',
    experienceLevel: '',
    preferredTime: '',
    
    // Membership Details
    membershipPlan: '',
    startDate: '',
    paymentMethod: '',
    
    // Additional Information
    howDidYouHear: '',
    specialRequirements: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/registration/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        alert('Registration submitted successfully! We will contact you soon.')
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '',
          address: '', city: '', state: '', pincode: '',
          emergencyName: '', emergencyPhone: '', emergencyRelation: '',
          height: '', weight: '', bloodGroup: '', medicalConditions: '', medications: '', allergies: '',
          fitnessGoals: '', experienceLevel: '', preferredTime: '',
          membershipPlan: '', startDate: '', paymentMethod: '',
          howDidYouHear: '', specialRequirements: ''
        })
        setCurrentStep(1)
      } else {
        alert(`Registration failed: ${result.message}`)
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep1 = () => (
    <div className="form-step">
      <h3>Personal Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="form-step">
      <h3>Address Information</h3>
      <div className="form-group">
        <label htmlFor="address">Complete Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          rows="3"
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="form-step">
      <h3>Emergency Contact</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="emergencyName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyName"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
          <input
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="emergencyRelation">Relationship</label>
        <select
          id="emergencyRelation"
          name="emergencyRelation"
          value={formData.emergencyRelation}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Relationship</option>
          <option value="spouse">Spouse</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="form-step">
      <h3>Health & Fitness Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fitnessGoals">Fitness Goals</label>
          <select
            id="fitnessGoals"
            name="fitnessGoals"
            value={formData.fitnessGoals}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Goals</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="strength-training">Strength Training</option>
            <option value="cardio-fitness">Cardio Fitness</option>
            <option value="flexibility">Flexibility</option>
            <option value="general-fitness">General Fitness</option>
          </select>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="experienceLevel">Fitness Experience</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="preferredTime">Preferred Time</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Time</option>
            <option value="morning">Morning (6 AM - 10 AM)</option>
            <option value="afternoon">Afternoon (10 AM - 2 PM)</option>
            <option value="evening">Evening (2 PM - 6 PM)</option>
            <option value="night">Night (6 PM - 10 PM)</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="medicalConditions">Medical Conditions (if any)</label>
        <textarea
          id="medicalConditions"
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleInputChange}
          rows="2"
          placeholder="Please mention any medical conditions..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="medications">Current Medications (if any)</label>
        <textarea
          id="medications"
          name="medications"
          value={formData.medications}
          onChange={handleInputChange}
          rows="2"
          placeholder="Please mention any medications..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="allergies">Allergies (if any)</label>
        <textarea
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleInputChange}
          rows="2"
          placeholder="Please mention any allergies..."
        />
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="form-step">
      <h3>Membership & Payment</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="membershipPlan">Membership Plan</label>
          <select
            id="membershipPlan"
            name="membershipPlan"
            value={formData.membershipPlan}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Plan</option>
            <option value="1-month">1 Month Plan - ₹1,399</option>
            <option value="3-months">3 Months Plan - ₹2,999</option>
            <option value="1-year">1 Year Plan - ₹7,499</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Preferred Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="howDidYouHear">How did you hear about us?</label>
        <select
          id="howDidYouHear"
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleInputChange}
        >
          <option value="">Select Option</option>
          <option value="social-media">Social Media</option>
          <option value="friend-recommendation">Friend Recommendation</option>
          <option value="online-search">Online Search</option>
          <option value="walk-in">Walk-in</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="specialRequirements">Special Requirements (if any)</label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          rows="3"
          placeholder="Any special requirements or preferences..."
        />
      </div>
    </div>
  )

  const renderProgressBar = () => (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentStep / 5) * 100}%` }}
        ></div>
      </div>
      <div className="progress-text">
        Step {currentStep} of 5
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch(currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      default: return renderStep1()
    }
  }

  return (
    <div className="registration">
      <section className="registration-container">
        <div className="container">
          <div className="registration-header">
            <img src={gymLogo} alt="Yash Fitness & Gym Logo" className="registration-logo" />
            <h2>Membership Registration</h2>
            <p>Join Yash Fitness & Gym and start your fitness journey today!</p>
          </div>
          
          <div className="registration-form-container">
            {renderProgressBar()}
            
            <form onSubmit={handleSubmit} className="registration-form">
              {renderStepContent()}
              
              <div className="form-navigation">
                {currentStep === 1 ? (
                  <Link to="/" className="btn-secondary-link">
                    <button 
                      type="button" 
                      className="btn-secondary"
                    >
                      Back to Home
                    </button>
                  </Link>
                ) : (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 5 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration 