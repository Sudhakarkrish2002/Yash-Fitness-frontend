import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import Admin from './pages/Admin'
import TestRegistration from './pages/TestRegistration'
import Footer from './components/Footer'
import useScrollToTop from './hooks/useScrollToTop'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  // Use the scroll to top hook inside Router context
  useScrollToTop()

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test-registration" element={<TestRegistration />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
