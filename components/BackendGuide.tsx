import React from 'react';

const BackendGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white prose prose-blue">
      <h1 className="text-3xl font-bold text-blue-900">Backend & System Documentation</h1>
      <p className="lead">This section describes the database schema and API structure required to fully deploy the backend for Abba Pascal School.</p>

      <div className="bg-gray-100 p-6 rounded-lg my-8 font-mono text-sm overflow-x-auto">
        <h3 className="font-bold mb-2">PostgreSQL Database Schema</h3>
        <pre>{`
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL, -- 'ADMIN', 'TEACHER', 'PARENT', 'STUDENT'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Students Table
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  student_code VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  grade_level INT NOT NULL,
  date_of_birth DATE NOT NULL,
  parent_id INT REFERENCES users(id)
);

-- Fees/Payments Table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  amount DECIMAL(10, 2) NOT NULL,
  reason VARCHAR(255),
  status VARCHAR(20) DEFAULT 'PENDING', -- 'PAID', 'UNPAID'
  payment_method VARCHAR(50), -- 'Telebirr', 'CBE'
  transaction_ref VARCHAR(100),
  due_date DATE
);

-- Exam Results
CREATE TABLE exam_results (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  subject VARCHAR(50) NOT NULL,
  score DECIMAL(5, 2),
  term VARCHAR(20)
);
        `}</pre>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg my-8 font-mono text-sm overflow-x-auto">
        <h3 className="font-bold mb-2">Express API Routes</h3>
        <pre>{`
// Auth
POST /api/auth/login
POST /api/auth/register

// Data
GET  /api/announcements
POST /api/announcements (Admin only)

GET  /api/students/:id/results
GET  /api/parents/:id/fees

// Payments (Mock Integration)
POST /api/payments/telebirr-callback
        `}</pre>
      </div>

      <h3>Deployment Instructions</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Install Node.js & PostgreSQL</strong> on your Ubuntu/Debian server.</li>
        <li>Clone the repo and run <code>npm install</code> in both client and server folders.</li>
        <li>Set up the <code>.env</code> file with <code>DATABASE_URL</code> and <code>JWT_SECRET</code>.</li>
        <li>Run <code>npm run build</code> for the frontend and serve static files via Nginx.</li>
        <li>Run the Node.js API using PM2: <code>pm2 start server.js</code>.</li>
      </ol>
    </div>
  );
};

export default BackendGuide;