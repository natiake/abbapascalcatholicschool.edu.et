import React, { useState } from 'react';
import { api } from '../services/api';

const Contact: React.FC = () => {
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.sendMessage(msg);
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
           <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
           <p className="text-gray-600 mb-8">Have questions? We are here to help.</p>
           
           <div className="space-y-6">
             <div>
               <h3 className="font-bold text-gray-800">Address</h3>
               <p className="text-gray-600">Bole Sub-city, Woreda 03<br/>Addis Ababa, Ethiopia</p>
             </div>
             <div>
               <h3 className="font-bold text-gray-800">Phone</h3>
               <p className="text-gray-600">+251 911 234 567</p>
             </div>
             <div>
               <h3 className="font-bold text-gray-800">Email</h3>
               <p className="text-gray-600">info@abbapascal.edu.et</p>
             </div>
           </div>

           {/* Mock Map */}
           <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
             Google Map Embed Placeholder
           </div>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-xl">
          {sent ? (
            <div className="text-center py-20">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800">Message Sent</h3>
              <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                 <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                  value={msg.name} onChange={e => setMsg({...msg, name: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                 <input required type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                  value={msg.email} onChange={e => setMsg({...msg, email: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                 <textarea required rows={4} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                  value={msg.message} onChange={e => setMsg({...msg, message: e.target.value})} />
               </div>
               <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;