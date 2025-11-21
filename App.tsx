import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Staff from './pages/Staff';
import Announcements from './pages/Announcements';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Clubs from './pages/Clubs';
import ExamResults from './pages/ExamResults';
import Login from './pages/Login';
import BackendGuide from './components/BackendGuide';

// Portals
import StudentPortal from './pages/portals/StudentPortal';
import ParentPortal from './pages/portals/ParentPortal';
import AdminDashboard from './pages/portals/AdminDashboard';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academics" element={<Academics />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="staff" element={<Staff />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="exam-results" element={<ExamResults />} />
            <Route path="backend-guide" element={<BackendGuide />} />
            
            {/* Auth Routes */}
            <Route path="portal/login" element={<Login />} />
            
            {/* Protected Portals */}
            <Route path="portal/student" element={<ProtectedRoute><StudentPortal /></ProtectedRoute>} />
            <Route path="portal/parent" element={<ProtectedRoute><ParentPortal /></ProtectedRoute>} />
            <Route path="portal/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;