import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { UserRole } from '../types';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const user = await api.login(username, role);
    if (user) {
      if (user.role === UserRole.ADMIN) navigate('/portal/admin');
      else if (user.role === UserRole.PARENT) navigate('/portal/parent');
      else navigate('/portal/student');
    } else {
      setError('Invalid credentials. Try "admin" (Admin), "student" (Student), or "parent" (Parent).');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-blue-900">Portal Login</h1>
            <p className="text-gray-500 text-sm">Access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select className="w-full p-2 border rounded mt-1 bg-white" value={role} onChange={(e) => setRole(e.target.value as UserRole)}>
                    <option value={UserRole.STUDENT}>Student</option>
                    <option value={UserRole.PARENT}>Parent</option>
                    <option value={UserRole.TEACHER}>Teacher</option>
                    <option value={UserRole.ADMIN}>Administrator</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input required type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 border rounded mt-1" placeholder="Enter username" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input required type="password" className="w-full p-2 border rounded mt-1" placeholder="••••••" />
            </div>
            
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition">
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400">
            <p>Demo Logins:</p>
            <p>Admin: "admin" | Parent: "parent"</p>
            <p>Student: "student"</p>
        </div>
      </div>
    </div>
  );
};

export default Login;