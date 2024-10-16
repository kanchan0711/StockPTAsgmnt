import  { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [classes, setClasses] = useState([]);


  return (
    <AuthContext.Provider value={{ userName, setUserName, accessToken, setAccessToken, classes, setClasses }}>
      {children}
    </AuthContext.Provider>
  );
};
