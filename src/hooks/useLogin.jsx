import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../store/AuthContext';
import { LOGIN_API } from '../utils/Constant';
// import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState('');
  const { setUserName } = useContext(AuthContext);
  // const navigate = useNavigate();  // Correct way to navigate programmatically

  // The login function to call manually
  const handleLogin = async (mobileNum) => {
    try {
      const response = await axios.post(LOGIN_API, {
        user_name: mobileNum,
        hash_code: '96pYMmXfHNR',
      });

      if (response.status === 200) {
        console.log(response)
        setUserName(mobileNum); // Save mobile number in context
        // navigate('/otp-verification'); // Navigate to OTP verification page
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login failed:', error);
    }
  };

  // Return the function so it can be called on-demand (e.g., when a button is clicked)
  return { handleLogin, error };
};

export default useLogin;
