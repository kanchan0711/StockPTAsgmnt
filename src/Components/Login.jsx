import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { LOGIN_IMG } from "../utils/Constant";
import OTPVerificationPage from "./OTPVerification";

const Login = () => {
  const [mobileNum, setMobileNum] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const { handleLogin } = useLogin();
  
  // State to track if the image is loading
  const [isLoading, setIsLoading] = useState(true);

  const onLoginClick = () => {
    console.log(mobileNum);
    if (mobileNum.length === 10) {
      handleLogin(mobileNum); // Trigger login when the button is clicked
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }

    setShowOtp(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log('Mobile number submitted:', mobileNum);
  };

  return (
    <div className="sm:m-0">
      <div className="lg:p-8 sm:p-2">
        <h1 className="lg:text-4xl font-bold sm:text-2xl text-center">India's No. 1 Stock Market Learning App</h1>
        <p className="text-center lg:text-[20px]">Enter your details below and begin your stock market learning journey from PnL verified and NISM registered trainers!</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div>
          <div className="relative">
            {isLoading && (
              <div className="text-center w-[500px] h-[500px] bg-gray-100">
                {/* Placeholder for loading effect */}
                
              </div>
            )}
            <img
              className="text-center w-[500px] "
              src={LOGIN_IMG}
              alt="Login Image"
              onLoad={() => setIsLoading(false)} // Image loaded
              onError={() => setIsLoading(false)} // Image failed to load
            />
          </div>
        </div>

        <div className="bg-white p-1 sm:w-screen lg:w-[300px] mx-[20px] ">
          <h2 className="text-[22px] font-bold mt-6">Welcome! Sign up or Login</h2>
          <p className="text-gray-500 my-2 ">It's never too late to learn!</p>
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number *</label>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 p-2 border rounded-l bg-gray-100">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobileNum}
                onChange={(e) => setMobileNum(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {showOtp && <OTPVerificationPage />}
            {!showOtp &&  
            <button
              onClick={onLoginClick}
              className="w-full py-2 bg-[#6a71b6] text-white font-bold rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            >
              CONTINUE
            </button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
