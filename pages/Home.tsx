import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Announcement } from '../types';

const Home: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    api.getAnnouncements().then(data => setAnnouncements(data.slice(0, 2)));
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-blue-900">
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" className="w-full h-full object-cover opacity-40" alt="School Building" />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Faith. Knowledge. Service.</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">Abba Pascal Catholic School provides world-class education rooted in strong moral values in the heart of Ethiopia.</p>
          <div className="flex justify-center gap-4">
            <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full transition">Apply Now</Link>
            <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white -mt-16 relative z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Academics', desc: 'Explore our curriculum.', link: '/academics', icon: '📚' },
            { title: 'Admissions', desc: 'Join our family.', link: '/admissions', icon: '📝' },
            { title: 'Portals', desc: 'Login for parents & students.', link: '/portal/login', icon: '🔐' },
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-blue-600">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Mission</h3>
              <p className="text-gray-700 leading-relaxed">To foster academic excellence and spiritual growth, empowering students to become responsible leaders who serve their community with integrity.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
              <p className="text-gray-700 leading-relaxed">To be the premier institution in Ethiopia for holistic education, recognized for producing compassionate and innovative citizens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-3xl font-bold text-gray-800">Latest Announcements</h2>
             <Link to="/announcements" className="text-blue-600 font-semibold hover:underline">View All</Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {announcements.map((news) => (
              <div key={news.id} className="border-l-4 border-blue-900 bg-gray-50 p-6 rounded-r-lg hover:bg-blue-50 transition">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{news.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{news.title}</h3>
                <p className="text-gray-600 line-clamp-2">{news.content}</p>
                <Link to="/announcements" className="text-blue-600 text-sm font-medium mt-4 inline-block">Read more &rarr;</Link>
              </div>
            ))}
            {announcements.length === 0 && <p className="text-gray-500">Loading news...</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;