import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

const PublicRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);

  
  if (accessToken) {
    return <Navigate to="/live-classes" replace />;
  }

 
  return children;
};

export default PublicRoute;