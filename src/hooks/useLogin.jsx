import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../store/AuthContext';
import { LOGIN_API } from '../utils/Constant';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState('');
  const { setUserName } = useContext(AuthContext); 
  const handleLogin = async (mobileNum) => {
    try {
      const response = await axios.post(LOGIN_API, {
        user_name: mobileNum,
        hash_code: '96pYMmXfHNR',
      });

      if (response.status === 200) {
        console.log(response)
        setUserName(mobileNum);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login failed:', error);
    }
  };

  
  return { handleLogin, error };
};

export default useLogin;
