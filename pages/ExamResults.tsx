import React, { useState } from 'react';
import { api } from '../services/api';
import { ExamResult, Student } from '../types';

const ExamResults: React.FC = () => {
  const [id, setId] = useState('');
  const [dob, setDob] = useState(''); // Mock DOB for security
  const [data, setData] = useState<{ student: Student | undefined; results: ExamResult[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setData(null);
    
    // Mock DOB check - just allow any date for demo
    if (!id || !dob) {
        setError("Please fill all fields");
        setLoading(false);
        return;
    }

    const res = await api.getExamResults(id);
    if (res.student && res.results.length > 0) {
        setData(res);
    } else {
        setError("No results found for this ID.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Student Result Portal</h1>
      
      <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-200">
        <form onSubmit={handleCheck} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Student ID (e.g., APS001)</label>
                <input type="text" value={id} onChange={e => setId(e.target.value)} className="w-full p-2 border rounded mt-1 uppercase" placeholder="APS..." />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full p-2 border rounded mt-1" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">
                {loading ? 'Checking...' : 'Check Results'}
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>

      {data && data.student && (
          <div className="mt-8 bg-white p-8 shadow rounded-xl animate-fade-in">
              <div className="border-b pb-4 mb-4">
                  <h2 className="text-xl font-bold">{data.student.name}</h2>
                  <p className="text-gray-600">Grade: {data.student.grade} | ID: {data.student.studentId}</p>
              </div>
              <table className="min-w-full">
                  <thead>
                      <tr className="text-left text-sm text-gray-500">
                          <th className="pb-2">Subject</th>
                          <th className="pb-2">Score</th>
                          <th className="pb-2">Grade</th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-800">
                      {data.results.map(r => (
                          <tr key={r.id} className="border-t">
                              <td className="py-2">{r.subject}</td>
                              <td className="py-2">{r.score}</td>
                              <td className="py-2 font-bold">{r.grade}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
              <div className="mt-6 pt-4 border-t text-center">
                  <p className="font-bold text-lg">Average: {data.results.reduce((a, b) => a + b.score, 0) / data.results.length}</p>
              </div>
          </div>
      )}
    </div>
  );
};

export default ExamResults;