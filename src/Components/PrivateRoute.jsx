import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const PrivateRoute = ({ children }) => {
  const { accessToken, loading } = useContext(AuthContext);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  
  return children;
};

export default PrivateRoute;