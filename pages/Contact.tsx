import React, { useState } from 'react';
import { api } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.sendMessage(msg);
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
           <h1 className="text-4xl font-bold text-blue-900 mb-6">{t('contact.title')}</h1>
           <p className="text-gray-600 mb-8 text-lg">{t('contact.subtitle')}</p>
           
           <div className="space-y-8">
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">📍</div>
               <div>
                 <h3 className="font-bold text-gray-800 text-lg">Address</h3>
                 <p className="text-gray-600">Bole Sub-city, Woreda 03<br/>Addis Ababa, Ethiopia</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">📞</div>
               <div>
                 <h3 className="font-bold text-gray-800 text-lg">Phone</h3>
                 <p className="text-gray-600">+251 911 234 567</p>
                 <p className="text-gray-500 text-sm">Mon - Fri, 8:00am - 4:00pm</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">📧</div>
               <div>
                 <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                 <p className="text-gray-600">info@abbapascal.edu.et</p>
               </div>
             </div>
           </div>

           {/* Mock Map */}
           <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-gray-500 relative">
             <img src="https://picsum.photos/600/400?grayscale&blur=5" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Map bg" />
             <span className="relative font-bold bg-white px-4 py-2 rounded shadow">Google Map Placeholder</span>
           </div>
        </div>

        <div className="bg-white p-10 shadow-xl rounded-2xl border border-gray-100">
          {sent ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">✓</div>
              <h3 className="text-2xl font-bold text-gray-800">{t('contact.success')}</h3>
              <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-blue-600 font-bold hover:underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.name')}</label>
                 <input required type="text" className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                  value={msg.name} onChange={e => setMsg({...msg, name: e.target.value})} placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.email')}</label>
                 <input required type="email" className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                  value={msg.email} onChange={e => setMsg({...msg, email: e.target.value})} placeholder="john@example.com" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.message')}</label>
                 <textarea required rows={5} className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 border"
                  value={msg.message} onChange={e => setMsg({...msg, message: e.target.value})} placeholder="How can we help you?" />
               </div>
               <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition transform hover:scale-[1.01] shadow-md">
                  {t('contact.send')}
               </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;