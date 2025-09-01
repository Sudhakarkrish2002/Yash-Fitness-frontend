// Debug utility for registration form
export const debugRegistration = {
  // Log form data
  logFormData: (formData) => {
    console.log('📋 Form Data:', formData);
    console.log('📋 Required Fields Check:');
    
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'gender',
      'address', 'city', 'state', 'pincode',
      'emergencyName', 'emergencyPhone', 'emergencyRelation',
      'height', 'weight', 'fitnessGoals', 'experienceLevel', 'preferredTime',
      'membershipPlan', 'startDate', 'paymentMethod'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      return false;
    } else {
      console.log('✅ All required fields present');
      return true;
    }
  },

  // Test API connection
  testAPI: async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      const data = await response.json();
      console.log('🌐 API Health Check:', data);
      return data.status === 'OK';
    } catch (error) {
      console.error('❌ API Connection Failed:', error);
      return false;
    }
  },

  // Test registration submission
  testSubmission: async (formData) => {
    try {
      console.log('🚀 Testing registration submission...');
      
      const response = await fetch('http://localhost:3001/api/registration/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('📤 Submission Result:', result);
      
      return result;
    } catch (error) {
      console.error('❌ Submission Test Failed:', error);
      throw error;
    }
  },

  // Validate form data
  validateFormData: (formData) => {
    const errors = [];
    
    // Check required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'gender',
      'address', 'city', 'state', 'pincode',
      'emergencyName', 'emergencyPhone', 'emergencyRelation',
      'height', 'weight', 'fitnessGoals', 'experienceLevel', 'preferredTime',
      'membershipPlan', 'startDate', 'paymentMethod'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors.push(`Missing required field: ${field}`);
      }
    });
    
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Invalid email format');
    }
    
    // Check phone format
    if (formData.phone && formData.phone.length < 10) {
      errors.push('Phone number too short');
    }
    
    // Check pincode format
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      errors.push('Pincode must be 6 digits');
    }
    
    // Check height and weight
    if (formData.height && (formData.height < 100 || formData.height > 250)) {
      errors.push('Height must be between 100-250 cm');
    }
    
    if (formData.weight && (formData.weight < 30 || formData.weight > 300)) {
      errors.push('Weight must be between 30-300 kg');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
};
