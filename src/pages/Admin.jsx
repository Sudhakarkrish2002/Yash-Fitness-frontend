import { useState, useEffect } from 'react'
import { api } from '../utils/api'
import './Admin.css'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [dashboardData, setDashboardData] = useState(null)
  const [registrations, setRegistrations] = useState([])
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const result = await api.getAdminDashboard()
      setDashboardData(result.data)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch registrations
  const fetchRegistrations = async (page = 1, search = '', status = '') => {
    try {
      setLoading(true)
      const result = await api.getAdminRegistrations(page, 10, status, search)
      setRegistrations(result.data.registrations)
      setCurrentPage(result.data.pagination.currentPage)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch contacts
  const fetchContacts = async (page = 1, search = '', status = '') => {
    try {
      setLoading(true)
      const result = await api.getAdminContacts(page, 10, status, search)
      setContacts(result.data.contacts)
      setCurrentPage(result.data.pagination.currentPage)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  // Export data
  const handleExport = async (type) => {
    try {
      setLoading(true)
      let result
      
      switch (type) {
        case 'registrations':
          result = await api.exportRegistrationsToExcel()
          break
        case 'contacts':
          result = await api.exportContactsToExcel()
          break
        case 'all':
          result = await api.exportAllDataToExcel()
          break
        default:
          return
      }

      if (result.success) {
        api.downloadExcelFile(result.data.fileName)
        alert(`${type} exported successfully!`)
      }
    } catch (error) {
      console.error('Error exporting data:', error)
      alert('Error exporting data')
    } finally {
      setLoading(false)
    }
  }

  // Handle search
  const handleSearch = () => {
    if (activeTab === 'registrations') {
      fetchRegistrations(1, searchTerm, statusFilter)
    } else if (activeTab === 'contacts') {
      fetchContacts(1, searchTerm, statusFilter)
    }
  }

  // Handle status filter
  const handleStatusFilter = (status) => {
    setStatusFilter(status)
    if (activeTab === 'registrations') {
      fetchRegistrations(1, searchTerm, status)
    } else if (activeTab === 'contacts') {
      fetchContacts(1, searchTerm, status)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  useEffect(() => {
    if (activeTab === 'registrations') {
      fetchRegistrations()
    } else if (activeTab === 'contacts') {
      fetchContacts()
    }
  }, [activeTab])

  const renderDashboard = () => (
    <div className="dashboard">
      {dashboardData && (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Registrations</h3>
              <p className="stat-number">{dashboardData.overview.totalRegistrations}</p>
            </div>
            <div className="stat-card">
              <h3>Total Contacts</h3>
              <p className="stat-number">{dashboardData.overview.totalContacts}</p>
            </div>
            <div className="stat-card">
              <h3>Pending Registrations</h3>
              <p className="stat-number">{dashboardData.overview.pendingRegistrations}</p>
            </div>
            <div className="stat-card">
              <h3>New Contacts</h3>
              <p className="stat-number">{dashboardData.overview.newContacts}</p>
            </div>
          </div>

          <div className="recent-data">
            <div className="recent-section">
              <h3>Recent Registrations</h3>
              <div className="data-list">
                {dashboardData.recent.registrations.map((reg) => (
                  <div key={reg._id} className="data-item">
                    <div className="data-info">
                      <strong>{reg.firstName} {reg.lastName}</strong>
                      <span>{reg.email}</span>
                      <span className="status">{reg.status}</span>
                    </div>
                    <div className="data-date">
                      {new Date(reg.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="recent-section">
              <h3>Recent Contacts</h3>
              <div className="data-list">
                {dashboardData.recent.contacts.map((contact) => (
                  <div key={contact._id} className="data-item">
                    <div className="data-info">
                      <strong>{contact.name}</strong>
                      <span>{contact.email}</span>
                      <span className="status">{contact.status}</span>
                    </div>
                    <div className="data-date">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )

  const renderRegistrations = () => (
    <div className="data-section">
      <div className="controls">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <select value={statusFilter} onChange={(e) => handleStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={() => handleExport('registrations')} disabled={loading}>
          Export to Excel
        </button>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg._id}>
                <td>{reg.firstName} {reg.lastName}</td>
                <td>{reg.email}</td>
                <td>{reg.phone}</td>
                <td>{reg.membershipPlan}</td>
                <td><span className={`status ${reg.status}`}>{reg.status}</span></td>
                <td>{new Date(reg.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderContacts = () => (
    <div className="data-section">
      <div className="controls">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <select value={statusFilter} onChange={(e) => handleStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="closed">Closed</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={() => handleExport('contacts')} disabled={loading}>
          Export to Excel
        </button>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subjectDisplay || contact.subject}</td>
                <td><span className={`status ${contact.status}`}>{contact.status}</span></td>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="export-all">
          <button onClick={() => handleExport('all')} disabled={loading}>
            Export All Data
          </button>
        </div>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'registrations' ? 'active' : ''}
          onClick={() => setActiveTab('registrations')}
        >
          Registrations
        </button>
        <button
          className={activeTab === 'contacts' ? 'active' : ''}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts
        </button>
      </div>

      <div className="admin-content">
        {loading && <div className="loading">Loading...</div>}
        
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'registrations' && renderRegistrations()}
        {activeTab === 'contacts' && renderContacts()}
      </div>
    </div>
  )
}

export default Admin
