import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ExamResult } from '../../types';

const StudentPortal: React.FC = () => {
  const user = api.getCurrentUser();
  const [results, setResults] = useState<ExamResult[]>([]);

  useEffect(() => {
    // Mock fetching results for logged in student
    api.getExamResults('APS001').then(data => setResults(data.results));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Hello, {user?.fullName}</h1>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Student Portal</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">My Grades (Term 1)</h2>
              <div className="space-y-2">
                  {results.map((r, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border-b last:border-0">
                          <span className="text-gray-700">{r.subject}</span>
                          <div className="flex items-center gap-4">
                              <span className="text-gray-500 text-sm">{r.score}%</span>
                              <span className="font-bold w-8 text-center bg-gray-100 rounded">{r.grade}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
              <ul className="space-y-4 text-sm">
                  <li className="flex gap-4">
                      <span className="font-mono text-gray-500">08:30</span>
                      <span className="font-bold">Mathematics</span>
                  </li>
                  <li className="flex gap-4">
                      <span className="font-mono text-gray-500">09:30</span>
                      <span className="font-bold">Physics</span>
                  </li>
                  <li className="flex gap-4">
                      <span className="font-mono text-gray-500">10:30</span>
                      <span className="text-gray-500 italic">Break</span>
                  </li>
                  <li className="flex gap-4">
                      <span className="font-mono text-gray-500">11:00</span>
                      <span className="font-bold">English</span>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default StudentPortal;