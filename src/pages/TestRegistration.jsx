import { useState } from 'react'
import { debugRegistration } from '../utils/debug'
import { api } from '../utils/api'

const TestRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    dateOfBirth: '1990-01-01',
    gender: 'male',
    address: 'Test Address',
    city: 'Test City',
    state: 'Test State',
    pincode: '123456',
    emergencyName: 'Emergency Contact',
    emergencyPhone: '0987654321',
    emergencyRelation: 'friend',
    height: 170,
    weight: 70,
    fitnessGoals: 'weight-loss',
    experienceLevel: 'beginner',
    preferredTime: 'morning',
    membershipPlan: '1-month',
    startDate: '2024-01-15',
    paymentMethod: 'cash'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)
    
    try {
      console.log('🧪 TEST: Starting registration test...')
      
      // Step 1: Validate form data
      console.log('📋 Step 1: Validating form data...')
      const validation = debugRegistration.validateFormData(formData)
      console.log('Validation result:', validation)
      
      if (!validation.isValid) {
        setResult({ success: false, message: `Validation failed: ${validation.errors.join(', ')}` })
        return
      }
      
      // Step 2: Test API connection
      console.log('🌐 Step 2: Testing API connection...')
      const apiConnected = await debugRegistration.testAPI()
      console.log('API connection result:', apiConnected)
      
      if (!apiConnected) {
        setResult({ success: false, message: 'API connection failed' })
        return
      }
      
      // Step 3: Submit registration
      console.log('🚀 Step 3: Submitting registration...')
      const response = await api.submitRegistration(formData)
      console.log('Submission response:', response)
      
      setResult(response)
      
    } catch (error) {
      console.error('❌ Test failed:', error)
      setResult({ 
        success: false, 
        message: error.message || 'Unknown error occurred',
        error: error.toString()
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🧪 Registration Form Test</h1>
      <p>This page helps debug registration form submission issues.</p>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Height (cm):</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Membership Plan:</label>
            <select
              name="membershipPlan"
              value={formData.membershipPlan}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="1-month">1 Month</option>
              <option value="3-months">3 Months</option>
              <option value="1-year">1 Year</option>
            </select>
          </div>
          <div>
            <label>Payment Method:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: isSubmitting ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Testing...' : 'Test Registration'}
        </button>
      </form>

      {result && (
        <div style={{ 
          padding: '15px', 
          borderRadius: '5px', 
          backgroundColor: result.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${result.success ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          <h3>{result.success ? '✅ Success' : '❌ Failed'}</h3>
          <p><strong>Message:</strong> {result.message}</p>
          {result.data && (
            <div>
              <p><strong>Registration ID:</strong> {result.data.id}</p>
              <p><strong>Name:</strong> {result.data.fullName}</p>
              <p><strong>Email:</strong> {result.data.email}</p>
            </div>
          )}
          {result.error && (
            <div>
              <p><strong>Error Details:</strong></p>
              <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '3px' }}>
                {result.error}
              </pre>
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>🔍 Debug Information</h3>
        <p>Check the browser console (F12) for detailed debug information.</p>
        <button 
          onClick={() => debugRegistration.testAPI()}
          style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Test API Connection
        </button>
        <button 
          onClick={() => debugRegistration.logFormData(formData)}
          style={{ padding: '8px 16px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Log Form Data
        </button>
      </div>
    </div>
  )
}

export default TestRegistration
