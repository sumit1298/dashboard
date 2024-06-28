// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Icon.png';
import Message from '../assets/message-square-01.png';
import Coins from '../assets/coins-hand.png';
import Bell from '../assets/bell-02.png';
import Logo1 from '../assets/Rectangle 5.png';
import ChevronDown from '../assets/chevron-down.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isJobsPage, setIsJobsPage] = useState(location.pathname === '/jobs');

  useEffect(() => {
    setIsJobsPage(location.pathname === '/jobs');
  }, [location.pathname]);

  const handleJobsClick = () => {
    if (isJobsPage) {
      navigate(-1); // Navigate to the previous page
    } else {
      navigate('/jobs'); // Navigate to the Jobs page
    }
    setIsJobsPage(!isJobsPage); // Toggle the state
  };

  return (
    <nav className="bg-white p-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-red-500 font-bold border-2 bg-gray-300 p-2">Logo</button>
      </div>
      <div className="flex flex-wrap space-x-4 px-4 py-2 border-2 border-gray-300 rounded-full">
        <button
          onClick={handleJobsClick}
          className={`text-white items-center flex space-x-2 rounded-full border-2 border-transparent transition duration-500 hover:bg-red-500 px-2 py-1 ${
            isJobsPage ? 'bg-red-500' : ''
          }`}
        >
          <img src={logo} alt="Jobs Icon" className="w-5 h-5" />
          <span className="text-gray-300">Jobs</span>
        </button>
        <div className="text-white items-center flex space-x-2 rounded-full border-2 border-transparent transition duration-500 hover:bg-red-500 px-2 py-1">
          <img src={Message} alt="Messages Icon" className="w-5 h-5" />
          <span className="text-gray-300">Messages</span>
        </div>
        <div className="text-white items-center flex space-x-2 rounded-full border-2 border-transparent transition duration-500 hover:bg-red-500 px-2 py-1">
          <img src={Coins} alt="Payments Icon" className="w-5 h-5" />
          <span className="text-gray-300">Payments</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative flex space-x-3 items-center">
          <img src={Bell} alt="Bell Icon" className="w-5 h-5" />
          <img src={Logo1} alt="User Icon" className="w-5 h-5" />
          <img src={ChevronDown} alt="Chevron Down Icon" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
