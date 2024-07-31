import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element, roles }) => {
  const { role } = useContext(AuthContext);

  if (role==='admin'|| role==='user') {
    return <Navigate to="/main" />;
  }

  return element;
};

export default ProtectedRoute;
