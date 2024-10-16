import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VERIFICATION_API } from '../utils/Constant';

const useOTPVerification = () => {
  const { userName, setAccessToken } = useContext(AuthContext); // Use context
  const navigate = useNavigate(); 

  const handleOtpVerification = async (otp) => {
    try {
      const response = await axios.post( VERIFICATION_API, {
        user_name: userName,
        otp: otp,
      });

      if (response.status === 200) {
        const token = response.data.token; // Assuming `token` is the full token object
        setAccessToken(token); // Save token globally
        
        // Save the token to localStorage (or sessionStorage)
        localStorage.setItem("accessToken", token); // Ensure the correct structure of token
        
        // Redirect to dashboard or private route
        navigate('/live-classes'); // Correct navigation method
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return { handleOtpVerification };
};

export default useOTPVerification;
