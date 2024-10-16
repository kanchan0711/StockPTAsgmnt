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
        const token = response.data.token; 
        setAccessToken(token); 
        
        localStorage.setItem("accessToken", token); 
       
        navigate('/live-classes'); 
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return { handleOtpVerification };
};

export default useOTPVerification;
