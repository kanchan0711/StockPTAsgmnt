import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const PrivateRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);

  // If accessToken is not available, redirect to login
  return accessToken ? children : <Navigate to="/" />;
};

export default PrivateRoute;
