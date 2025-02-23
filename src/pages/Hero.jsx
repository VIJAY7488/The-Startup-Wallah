import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const navigate = useNavigate();

  const fullText = "🔥No hidden costs, no platform fees, and no barriers to success!🔥";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    let timeout;
    if(isDelete){
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length-1));
        if(displayText.length === 0){
          setIsDelete(false);
          setIndex(0);
        }
      }, 50)
    }
    else{
      if(index < fullText.length){
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 50);
      }
      else{
        timeout = setTimeout(() => setIsDelete(true), 2000)
      }
    }

    return () => clearTimeout(timeout);
  }, [index, displayText, isDelete, fullText]);

  return (
    <div className="bg-[rgb(242,243,249)] relative overflow-hidden pt-32 pb-20" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="relative z-10" >
          <div 
            className="h-[60px] text-center flex justify-center items-center" >
            <span 
              className="inline-block animate-fade-in px-4 py-1 mb-4 text-xl font-medium text-blue-600 bg-blue-200 rounded-full" >
              {displayText}
            </span>
          </div>
          <h1 
            className="text-center animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Turn your startup vision into reality -{" "}
            <span className="text-blue-600">Begin with us!</span>
          </h1>
          <p 
            className="text-center animate-fade-up animation-delay-100 max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Your startup dream deserves a chance. Get expert help, investor access & growth strategies – absolutely FREE!
          </p>
          <div 
            className="animate-fade-up animation-delay-200 flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/services')} className='flex items-center text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md px-6 py-3'>
              Our Services
              <FaArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('/investors')} className='border px-6 py-3 rounded-md hover:text-white hover:bg-blue-600 font-medium'>View Investors</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
