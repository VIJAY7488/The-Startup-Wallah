import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
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
                        onClick={() => scrollTo(0, 0)}
                        className="navbar" >
                        Investors
                    </Link>

                    <Link to='/resources' 
                        onClick={() => scrollTo(0, 0)}
                        className="navbar" >
                        Resources
                    </Link>

                    <Link to='/services' 
                        onClick={() => scrollTo(0, 0)}
                        className="navbar" >
                        Services
                    </Link>


                <Link to="/signin">
                  <button 
                    className="mr-1 border px-4 py-2 rounded hover:bg-blue-500 hover:text-white font-medium">
                    Sign In
                  </button>
                </Link>
                <Link to="/login">
                  <button 
                    className='border px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium'>
                    Login
                  </button>
                </Link>
                </div>

                {/* For mobile device */}

                <div className='md:hidden'>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-primary transition-colors" >
                        {isOpen ? <IoClose className='text-2xl font-bold' /> : <RxHamburgerMenu className='text-2xl font-bold' />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" >
                    <div 
                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3" >
                        <Link 
                            to='/investors'
                            onClick={() => setIsOpen(false)}
                            className='navbar-small-screen'>
                            Investors
                        </Link>
                        <Link 
                            to='/resources'
                            onClick={() => setIsOpen(false)}
                            className='navbar-small-screen'>
                            Resources
                        </Link>
                        <Link 
                            to='/services'
                            onClick={() => setIsOpen(false)}
                            className='navbar-small-screen'>
                            Services
                        </Link>

                        <div className="mt-4 space-y-2 flex flex-col">
                            <Link 
                                to='/signin'
                                onClick={() => setIsOpen(false)}
                                className="w-full mb-3"> 
                                <button className="w-full mr-1 border px-4 py-2 rounded hover:bg-blue-500 hover:text-white font-medium">Sign In</button>
                            </Link>
                            <Link 
                                to='/login'
                                onClick={() => setIsOpen(false)}
                                className="w-full">
                                <button className='w-full border px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium'>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </nav>
    </>
  );
}

export default Navbar
