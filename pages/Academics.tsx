import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Academic Excellence</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">We follow the Ethiopian National Curriculum enriched with holistic development programs.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {['Kindergarten', 'Primary (1-8)', 'High School (9-12)'].map((level, idx) => (
           <div key={idx} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition">
             <h2 className="text-2xl font-bold text-gray-800 mb-4">{level}</h2>
             <ul className="list-disc list-inside text-gray-600 space-y-2">
               <li>Core Subjects</li>
               <li>Moral Education</li>
               <li>Physical Education</li>
               <li>Computer Science</li>
             </ul>
           </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Calendar</h2>
        <p className="mb-6 text-gray-700">Download our yearly plan to stay updated with exam dates, holidays, and events.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Download 2017 E.C. Calendar (PDF)
        </button>
      </div>
    </div>
  );
};

export default Academics;