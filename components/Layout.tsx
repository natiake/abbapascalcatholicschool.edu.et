import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserRole } from '../types';
import { api } from '../services/api';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
      }`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = api.getCurrentUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleLogout = () => {
    api.logout();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Addis Ababa, Ethiopia | 📞 +251 911 234 567</span>
          <div className="space-x-4">
            <Link to="/portal/login" className="hover:text-blue-200 font-semibold">Log In</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">AP</div>
               <span className="font-bold text-xl tracking-tight text-blue-900">Abba Pascal</span>
            </Link>
            
            <nav className="hidden md:flex space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/academics">Academics</NavLink>
              <NavLink to="/admissions">Admissions</NavLink>
              <NavLink to="/staff">Staff</NavLink>
              <NavLink to="/announcements">News</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {user && (
                <button onClick={handleLogout} className="ml-4 text-red-600 text-sm font-medium">Logout</button>
              )}
            </nav>

            {/* Mobile Menu Button (Placeholder) */}
            <div className="md:hidden">
                <button className="text-gray-500 hover:text-blue-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Abba Pascal School</h3>
            <p className="text-sm leading-relaxed">
              Empowering the next generation through Faith, Knowledge, and Service. Established 1998.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/downloads" className="hover:text-white">Downloads</Link></li>
              <li><Link to="/exam-results" className="hover:text-white">Check Exam Results</Link></li>
              <li><Link to="/portal/login" className="hover:text-white">Portals</Link></li>
              <li><Link to="/backend-guide" className="hover:text-white">System Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>P.O. Box 1234, Addis Ababa</li>
              <li>info@abbapascal.edu.et</li>
              <li>+251 911 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-xs mb-2">Subscribe for updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-l bg-gray-800 border-none text-white focus:ring-0" />
              <button className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700">Go</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Abba Pascal Catholic School. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;