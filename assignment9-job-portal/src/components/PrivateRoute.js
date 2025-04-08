// src/components/PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // If a role restriction is provided, check if the user's type matches.
  // If role is an array, allow if user's type is in the allowed roles.
  if (role) {
    if (Array.isArray(role)) {
      if (!role.includes(user?.type)) {
        return <Navigate to="/unauthorized" />;
      }
    } else if (user?.type !== role) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
};

export default PrivateRoute;
