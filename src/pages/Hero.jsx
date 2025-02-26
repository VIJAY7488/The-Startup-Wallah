import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[rgb(242,243,249)] relative overflow-hidden flex flex-col items-center justify-center min-h-screen px-6 py-[100px] ">
      
      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight text-center max-w-5xl">
        Your startup journey starts with <span className="text-blue-600">free</span> essential support
      </h1>

      {/* Content Container */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 mt-12">
        
        {/* Left Section - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 leading-tight">
            Ready to turn your idea into reality?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Access the essential resources and guidance you need to start building your dream business today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button 
              onClick={() => navigate('/services')} 
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-3 transition-all w-full sm:w-auto "
            >
              Explore More
              <FaArrowRight className="ml-3 h-4 w-4" />
            </button>
            {/* <button 
              onClick={() => navigate('/investors')} 
              className="border border-blue-500 px-6 py-3 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white font-medium transition-all w-full sm:w-auto"
            >
              View Investors
            </button> */}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center px-4">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px]">
            <img 
              src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1740492242/1_agrt9o.svg" 
              alt="Person working on a laptop" 
              className="rounded-2xl border-[6px] border-blue-600 shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-30 rounded-lg"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
