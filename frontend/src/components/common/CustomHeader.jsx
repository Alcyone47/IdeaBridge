import React, { useState } from 'react'
import { images } from '../../assets'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'

const CustomHeader = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDashboard = () => {
    if (user?.role === 'investor') navigate('/dashboard/investor');
    else navigate('/dashboard/entrepreneur');
  };

  return (
    <header className="bg-black flex flex-row py-4 px-8 relative">
      <div className='flex flex-1 items-center'>
        <img src={images.logo} alt="logo" className='h-8 w-auto pl-2 cursor-pointer' onClick={() => navigate('/')}/>
      </div>

      <div className='text-white flex flex-1 items-center justify-center gap-4'>
        <CustomButton text="Product" variant="unfilled"/>
        <CustomButton text="Company" variant="unfilled"/>
        <CustomButton text="Features" variant="unfilled"/>
        <CustomButton text="Marketplace" variant="unfilled"/>
      </div>

      <div className='text-white flex flex-1 items-center justify-end relative'>
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-gray-200 font-medium hover:text-blue-400 transition"
            >
              {user.name}
              <span className="text-xs">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={handleDashboard}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <CustomButton 
            onClick={() => navigate('/login')} 
            text="Sign In" 
            variant="unfilled" 
            icon={images.rightArrow}
          />
        )}
      </div>
    </header>
  )
}

export default CustomHeader