import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
            <div className="flex justify-between items-center h-16" >
                <div className="flex-shrink-0 flex items-center" >
                    <Link to='/' 
                        className="text-xl font-bold text-primary w-[245px]" >
                        The Startup Wallah
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-8" >
                    <Link to='/investors' 
                        className="navbar" >
                        Investors
                    </Link>

                    <Link to='/resources' 
                        className="navbar" >
                        Resources
                    </Link>

                    <Link to='/services' 
                        className="navbar" >
                        Services
                    </Link>


                <Link to="/signin">
                  <button className="mr-1 border px-4 py-2 rounded hover:bg-blue-500 hover:text-white font-medium">
                    Sign In
                  </button>
                </Link>
                <Link to="/login">
                  <button className='border px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium'>Login</button>
                </Link>

                    
                </div>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
