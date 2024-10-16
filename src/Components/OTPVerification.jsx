import { useState } from 'react';
import useOTPVerification from '../hooks/useOTPVerification';

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(''); // Use context
 // For navigation
   const { handleOtpVerification} = useOTPVerification()
 

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
            OTP*
          </label>
          <div className="flex items-center mb-4">
            <input
              type="number"
              placeholder="Enter 4 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
      <button onClick={() => handleOtpVerification(otp)}>Verify OTP</button>
      <button
            // type="submit"
            className="w-full py-2 bg-[#6a71b6] text-white font-bold rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            onClick={() => handleOtpVerification(otp)}
            >
            CONTINUE
          </button>
     
    </div>
  );
};

export default OTPVerificationPage;
