import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

// Moved outside component to prevent re-renders/remounts
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
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleLogout = () => {
    api.logout();
    navigate('/');
    window.location.reload();
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Addis Ababa, Ethiopia | 📞 +251 911 234 567</span>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="hover:bg-blue-800 px-2 py-1 rounded transition flex items-center gap-1"
            >
              <span>{language === 'en' ? '🇺🇸 English' : '🇪🇹 አማርኛ'}</span>
            </button>
            <Link to="/portal/login" className="hover:text-blue-200 font-semibold flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
              {t('nav.login')}
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
               <div className="w-9 h-9 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                 AP
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-lg tracking-tight text-blue-900 leading-tight">Abba Pascal</span>
                 <span className="text-[10px] text-gray-500 uppercase tracking-wider">Catholic School</span>
               </div>
            </Link>
            
            <nav className="hidden lg:flex space-x-1">
              <NavLink to="/">{t('nav.home')}</NavLink>
              <NavLink to="/about">{t('nav.about')}</NavLink>
              <NavLink to="/academics">{t('nav.academics')}</NavLink>
              <NavLink to="/admissions">{t('nav.admissions')}</NavLink>
              <NavLink to="/clubs">{t('nav.clubs')}</NavLink>
              <NavLink to="/staff">{t('nav.staff')}</NavLink>
              <NavLink to="/announcements">{t('nav.news')}</NavLink>
              <NavLink to="/contact">{t('nav.contact')}</NavLink>
              {user && (
                <button onClick={handleLogout} className="ml-4 text-red-600 text-sm font-medium hover:bg-red-50 px-2 py-1 rounded">{t('nav.logout')}</button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button className="text-gray-500 hover:text-blue-900 p-2">
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
      <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 text-white">
               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">AP</div>
               <span className="font-bold text-lg">Abba Pascal</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/downloads" className="hover:text-yellow-500 transition">Downloads</Link></li>
              <li><Link to="/exam-results" className="hover:text-yellow-500 transition">Check Exam Results</Link></li>
              <li><Link to="/portal/login" className="hover:text-yellow-500 transition">{t('nav.portals')}</Link></li>
              <li><Link to="/backend-guide" className="hover:text-yellow-500 transition">System Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span> <span>Bole Sub-city, Woreda 03<br/>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2"><span>📧</span> info@abbapascal.edu.et</li>
              <li className="flex items-center gap-2"><span>📞</span> +251 911 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">{t('footer.newsletter')}</h4>
            <p className="text-xs mb-2 text-gray-400">Subscribe for the latest school updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 text-white focus:ring-1 focus:ring-yellow-500 outline-none" />
              <button className="bg-yellow-500 px-4 py-2 rounded-r text-blue-900 font-bold hover:bg-yellow-400 transition">Go</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Abba Pascal Catholic School. {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
};

export default Layout;