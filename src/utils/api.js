// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// API endpoints
export const API_ENDPOINTS = {
  REGISTRATION: {
    SUBMIT: `${API_BASE_URL}/api/registration/submit`,
    ALL: `${API_BASE_URL}/api/registration/all`,
    BY_ID: (id) => `${API_BASE_URL}/api/registration/${id}`,
    UPDATE_STATUS: (id) => `${API_BASE_URL}/api/registration/${id}/status`,
    EXPORT_EXCEL: `${API_BASE_URL}/api/registration/export/excel`
  },
  CONTACT: {
    SUBMIT: `${API_BASE_URL}/api/contact/submit`,
    ALL: `${API_BASE_URL}/api/contact/all`,
    STATS: `${API_BASE_URL}/api/contact/stats`,
    BY_ID: (id) => `${API_BASE_URL}/api/contact/${id}`,
    UPDATE_STATUS: (id) => `${API_BASE_URL}/api/contact/${id}/status`,
    EXPORT_EXCEL: `${API_BASE_URL}/api/contact/export/excel`
  },
  EXPORT: {
    ALL_EXCEL: `${API_BASE_URL}/api/export/all/excel`,
    DOWNLOAD: (fileName) => `${API_BASE_URL}/api/export/download/${fileName}`
  },
  ADMIN: {
    DASHBOARD: `${API_BASE_URL}/api/admin/dashboard`,
    REGISTRATIONS: `${API_BASE_URL}/api/admin/registrations`,
    CONTACTS: `${API_BASE_URL}/api/admin/contacts`,
    STATS: `${API_BASE_URL}/api/admin/stats`
  },
  HEALTH: `${API_BASE_URL}/api/health`
};

// Default headers
const getHeaders = (customHeaders = {}) => ({
  'Content-Type': 'application/json',
  ...customHeaders
});

// Generic API request function
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: getHeaders(options.headers),
      ...options
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// API functions
export const api = {
  // Registration
  submitRegistration: (formData) => 
    apiRequest(API_ENDPOINTS.REGISTRATION.SUBMIT, {
      method: 'POST',
      body: JSON.stringify(formData)
    }),

  getAllRegistrations: () => 
    apiRequest(API_ENDPOINTS.REGISTRATION.ALL),

  getRegistrationById: (id) => 
    apiRequest(API_ENDPOINTS.REGISTRATION.BY_ID(id)),

  updateRegistrationStatus: (id, statusData) => 
    apiRequest(API_ENDPOINTS.REGISTRATION.UPDATE_STATUS(id), {
      method: 'PATCH',
      body: JSON.stringify(statusData)
    }),

  // Contact
  submitContact: (formData) => 
    apiRequest(API_ENDPOINTS.CONTACT.SUBMIT, {
      method: 'POST',
      body: JSON.stringify(formData)
    }),

  getAllContacts: () => 
    apiRequest(API_ENDPOINTS.CONTACT.ALL),

  getContactStats: () => 
    apiRequest(API_ENDPOINTS.CONTACT.STATS),

  getContactById: (id) => 
    apiRequest(API_ENDPOINTS.CONTACT.BY_ID(id)),

  updateContactStatus: (id, statusData) => 
    apiRequest(API_ENDPOINTS.CONTACT.UPDATE_STATUS(id), {
      method: 'PATCH',
      body: JSON.stringify(statusData)
    }),

  // Admin functions
  getAdminDashboard: () => 
    apiRequest(API_ENDPOINTS.ADMIN.DASHBOARD),

  getAdminRegistrations: (page = 1, limit = 10, status = '', search = '') => 
    apiRequest(`${API_ENDPOINTS.ADMIN.REGISTRATIONS}?page=${page}&limit=${limit}&status=${status}&search=${search}`),

  getAdminContacts: (page = 1, limit = 10, status = '', search = '') => 
    apiRequest(`${API_ENDPOINTS.ADMIN.CONTACTS}?page=${page}&limit=${limit}&status=${status}&search=${search}`),

  getAdminStats: () => 
    apiRequest(API_ENDPOINTS.ADMIN.STATS),

  // Export functions
  exportRegistrationsToExcel: () => 
    apiRequest(API_ENDPOINTS.REGISTRATION.EXPORT_EXCEL),

  exportContactsToExcel: () => 
    apiRequest(API_ENDPOINTS.CONTACT.EXPORT_EXCEL),

  exportAllDataToExcel: () => 
    apiRequest(API_ENDPOINTS.EXPORT.ALL_EXCEL),

  downloadExcelFile: (fileName) => 
    window.open(API_ENDPOINTS.EXPORT.DOWNLOAD(fileName), '_blank'),

  // Health check
  healthCheck: () => 
    apiRequest(API_ENDPOINTS.HEALTH)
};

export default api;
