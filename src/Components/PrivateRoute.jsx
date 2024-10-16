import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const PrivateRoute = ({ children }) => {
  const { accessToken, loading } = useContext(AuthContext);

  // If the authentication is still loading, show a loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated (no accessToken), redirect to login page
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, render the protected route
  return children;
};

export default PrivateRoute;