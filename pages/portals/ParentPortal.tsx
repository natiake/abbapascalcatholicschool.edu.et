import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { FeeRecord } from '../../types';

const ParentPortal: React.FC = () => {
  const user = api.getCurrentUser();
  const [fees, setFees] = useState<FeeRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
        // In a real app, we'd get the student IDs linked to the parent
        api.getFees('APS001').then(data => {
            setFees(data);
            setLoading(false);
        });
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Welcome, {user?.fullName}</h1>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Parent Portal</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fee Status */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">School Fees & Payments</h2>
              <div className="overflow-x-auto">
                  <table className="min-w-full">
                      <thead>
                          <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                              <th className="pb-3">Description</th>
                              <th className="pb-3">Amount (ETB)</th>
                              <th className="pb-3">Due Date</th>
                              <th className="pb-3">Status</th>
                              <th className="pb-3">Action</th>
                          </tr>
                      </thead>
                      <tbody className="text-sm">
                          {fees.map(fee => (
                              <tr key={fee.id} className="border-b last:border-0">
                                  <td className="py-4">{fee.reason}</td>
                                  <td className="py-4 font-mono">{fee.amount.toLocaleString()}</td>
                                  <td className="py-4">{fee.dueDate}</td>
                                  <td className="py-4">
                                      <span className={`px-2 py-1 rounded text-xs font-bold ${fee.status === 'PAID' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                          {fee.status}
                                      </span>
                                  </td>
                                  <td className="py-4">
                                      {fee.status === 'UNPAID' && (
                                          <button className="text-blue-600 hover:underline font-medium">Pay Now</button>
                                      )}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              
              <div className="mt-8 border-t pt-6">
                  <h3 className="font-bold text-gray-700 mb-3">Payment Methods Accepted</h3>
                  <div className="flex gap-4">
                      <div className="bg-yellow-500 text-white px-4 py-2 rounded font-bold text-sm">Telebirr</div>
                      <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold text-sm">CBE Birr</div>
                      <div className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-sm">Amole</div>
                  </div>
              </div>
          </div>

          {/* Student Info Card */}
          <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">My Student</h2>
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div>
                      <div className="font-bold text-lg">Yonas Alemu</div>
                      <div className="text-gray-500">Grade 10A</div>
                  </div>
              </div>
              <div className="space-y-3 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Attendance</span>
                      <span className="font-bold text-green-600">95%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Current Rank</span>
                      <span className="font-bold">5 / 45</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Homeroom Teacher</span>
                      <span className="font-bold">Mr. Abebe</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ParentPortal;