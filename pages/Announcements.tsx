import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Announcement } from '../types';

const Announcements: React.FC = () => {
  const [list, setList] = useState<Announcement[]>([]);

  useEffect(() => {
    api.getAnnouncements().then(setList);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 border-b pb-4">School Announcements</h1>
      <div className="space-y-8">
        {list.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.date}</span>
            </div>
            <p className="text-gray-700">{item.content}</p>
            <p className="text-sm text-gray-400 mt-4 italic">Posted by {item.author}</p>
          </div>
        ))}
        {list.length === 0 && <p>No announcements found.</p>}
      </div>
    </div>
  );
};

export default Announcements;