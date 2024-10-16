import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const PublicRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);

  // If user is authenticated, redirect to live-classes (or your default authenticated page)
  if (accessToken) {
    return <Navigate to="/live-classes" replace />;
  }

  // If user is not authenticated, allow access to the public route
  return children;
};

export default PublicRoute;