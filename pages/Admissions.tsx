import React, { useState } from 'react';
import { api } from '../services/api';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    gradeApplied: '9',
    parentName: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await api.submitApplication(formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-green-50 rounded-lg text-center border border-green-200">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Application Received!</h2>
        <p className="text-green-700 mb-6">Thank you for applying to Abba Pascal. We will contact you at {formData.phone} regarding the next steps.</p>
        <button onClick={() => setSubmitted(false)} className="text-green-800 font-semibold underline">Submit another</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Admission Process</h1>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-lg">Submit Application</h3>
              <p className="text-gray-600">Fill out the online form with student details.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-lg">Entrance Exam</h3>
              <p className="text-gray-600">Students must pass an entrance exam in Math and English.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-lg">Document Submission</h3>
              <p className="text-gray-600">Bring transcripts and birth certificate to the office.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply Online</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
            <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border" 
              value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grade Applied For</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
              value={formData.gradeApplied} onChange={e => setFormData({...formData, gradeApplied: e.target.value})}>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
            <input required type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
             value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input required type="tel" placeholder="09..." className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
             value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
          
          <div className="pt-4">
            <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded hover:bg-blue-800 transition">
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admissions;