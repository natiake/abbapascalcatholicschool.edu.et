import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Announcement } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    api.getAnnouncements().then(data => setAnnouncements(data.slice(0, 3)));
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/50 to-blue-900/90 z-10"></div>
            <img src="https://picsum.photos/1920/1080?grayscale&blur=1" className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow" alt="School Building" />
        </div>
        <div className="relative z-20 px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-500 text-yellow-300 text-sm font-bold mb-6 uppercase tracking-widest">
            Excellence Since 1998
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">{t('hero.title')}</h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full transition shadow-lg transform hover:-translate-y-1">
              {t('hero.apply')}
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-10 rounded-full transition shadow-lg hover:shadow-white/20">
              {t('hero.learn')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-blue-900 py-12 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">25+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{t('stats.years')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">1,500+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{t('stats.students')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">80+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{t('stats.teachers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">10k+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{t('stats.graduates')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 -mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('section.academics'), desc: t('section.academics.desc'), link: '/academics', icon: '📚', color: 'border-blue-500' },
              { title: t('section.admissions'), desc: t('section.admissions.desc'), link: '/admissions', icon: '📝', color: 'border-yellow-500' },
              { title: t('section.portals'), desc: t('section.portals.desc'), link: '/portal/login', icon: '🔐', color: 'border-green-500' },
            ].map((item, idx) => (
              <Link key={idx} to={item.link} className={`bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition border-t-4 ${item.color} group`}>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold">
                  Explore <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wide mb-2">Why Abba Pascal?</h4>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Moral & Academic Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Abba Pascal, we believe education goes beyond textbooks. We nurture the whole child—spiritually, intellectually, and socially. Our campus offers a safe, disciplined environment where every student is known and valued.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  'Consistently Top National Exam Scores',
                  'Modern Science & Computer Labs',
                  'Strong Catholic Values & Character Building',
                  'Vibrant Extra-curricular Programs'
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-400 rounded-lg"></div>
              <img src="https://picsum.photos/600/500?random=10" alt="Students in lab" className="rounded-lg shadow-lg relative z-10 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-gray-900">Latest from School</h2>
               <p className="text-gray-600 mt-2">Keep up with our latest events and announcements.</p>
             </div>
             <Link to="/announcements" className="hidden md:inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
               View All News <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src={`https://picsum.photos/400/250?random=${news.id}`} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">{news.author}</span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">{news.title}</h3>
                  <p className="text-gray-600 line-clamp-3 text-sm">{news.content}</p>
                  <Link to="/announcements" className="text-blue-600 text-sm font-bold mt-4 inline-block hover:underline">Read Full Story</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/announcements" className="text-blue-700 font-bold">View All News &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;