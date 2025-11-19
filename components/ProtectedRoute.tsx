import React from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = api.getCurrentUser();
  if (!user) {
    return <Navigate to="/portal/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;