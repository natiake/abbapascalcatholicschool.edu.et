import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { AdmissionApplication, ContactMessage } from '../../types';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'admissions' | 'messages'>('overview');

  useEffect(() => {
    api.getStats().then(setStats);
    api.getApplications().then(setApplications);
    api.getMessages().then(setMessages);
  }, []);

  if (!stats) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="space-x-2">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}>Overview</button>
            <button onClick={() => setActiveTab('admissions')} className={`px-4 py-2 rounded ${activeTab === 'admissions' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}>Admissions</button>
            <button onClick={() => setActiveTab('messages')} className={`px-4 py-2 rounded ${activeTab === 'messages' ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}>Messages</button>
        </div>
      </div>

      {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500">
                <div className="text-gray-500">Total Students</div>
                <div className="text-3xl font-bold">{stats.students}</div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-green-500">
                <div className="text-gray-500">Total Teachers</div>
                <div className="text-3xl font-bold">{stats.teachers}</div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-yellow-500">
                <div className="text-gray-500">Pending Applications</div>
                <div className="text-3xl font-bold">{stats.applications}</div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-red-500">
                <div className="text-gray-500">Messages</div>
                <div className="text-3xl font-bold">{stats.messages}</div>
            </div>
          </div>
      )}

      {activeTab === 'admissions' && (
          <div className="bg-white rounded shadow overflow-hidden">
              <div className="p-4 border-b font-bold">New Applications</div>
              <table className="min-w-full text-left">
                  <thead className="bg-gray-50">
                      <tr>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Student</th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Grade</th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Parent</th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Contact</th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                      {applications.map(app => (
                          <tr key={app.id}>
                              <td className="px-6 py-4">{app.studentName}</td>
                              <td className="px-6 py-4">{app.gradeApplied}</td>
                              <td className="px-6 py-4">{app.parentName}</td>
                              <td className="px-6 py-4">{app.phone}</td>
                              <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{app.status}</span></td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      )}

      {activeTab === 'messages' && (
          <div className="space-y-4">
              {messages.map(m => (
                  <div key={m.id} className="bg-white p-4 rounded shadow">
                      <div className="flex justify-between mb-2">
                          <span className="font-bold">{m.name} ({m.email})</span>
                          <span className="text-xs text-gray-500">{new Date(m.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700">{m.message}</p>
                  </div>
              ))}
              {messages.length === 0 && <p>No messages.</p>}
          </div>
      )}
    </div>
  );
};

export default AdminDashboard;