import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

    const navigate = useNavigate();

  return (
    <div >
      <section 
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6 ">
        <div className="md:w-1/2 text-left" >
            <h3 
                className="text-2xl font-bold tracking-wide text-gray-900 uppercase " >
                Launching a startup?
            </h3>
            <p 
                className="text-gray-600 mt-4 text-lg leading-relaxed text-justify mt-8 mb-10" >
                Get the free support you need to launch and grow your startup. 
                The Startup Wallah provides access to investors, insightful learning resources, 
                and expert-backed business services everything you need to succeed.
            </p>
            <button 
                onClick={() => navigate('/signin')}
                className='className="mt-12 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"' >
                Sign Up for Free
            </button>
        </div>


        <div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            <div className="relative " >
                <img 
                    src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1740492241/2_dzrcni.svg" 
                    alt="Person working on a laptop" 
                    className="rounded-2xl shadow-lg w-[500px] "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
