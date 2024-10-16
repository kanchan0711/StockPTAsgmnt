import  { createContext, useEffect, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [classes, setClasses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate token fetch or authentication check
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
    setLoading(false); // Set loading to false once check is done
  }, []);



  return (
    <AuthContext.Provider value={{ userName, setUserName, accessToken, setAccessToken, classes, setClasses, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
