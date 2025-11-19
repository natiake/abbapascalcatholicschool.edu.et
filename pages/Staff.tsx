import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Teacher } from '../types';

const Staff: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getTeachers().then(data => {
      setTeachers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Teachers</h1>
      
      {loading ? (
        <div className="text-center text-gray-500">Loading staff directory...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden text-center pb-6">
              <div className="h-48 bg-gray-200 w-full">
                 <img src={teacher.photoUrl} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{teacher.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{teacher.subject}</p>
                <a href={`mailto:${teacher.email}`} className="text-sm text-gray-500 hover:text-gray-900">{teacher.email}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Staff;