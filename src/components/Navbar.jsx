import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Header from '../assets/header.png';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden bg-gray-200 relative">
        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-0"> {/* Ensure z-index is 0 by default */}
          {/* Navbar */}
          <div className="bg-white shadow sticky top-0">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-20">
                {/* Logo */}
                <img src={Logo} alt="Logo" className="h-14 w-16" />
                {/* Sidebar toggle button */}
                <button
                  className="text-black-500 hover:text-gray-600"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="relative bg-cover bg-center h-64" style={{backgroundImage: `url(${Header})`, height: 'calc(100vh - 4rem)'}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center md:justify-start ml-20">
              <div className="text-white ">
                <h1 className="text-5xl font-bold mb-4">WE DON'T JUST DESIGN</h1>
                <p className="text-5xl font-bold mb-4">WE DEFINE EXPERIENCES</p>
                <p className="text-sm mt-4">We are a bunch of smart and passionate people looking to reinvent </p>
                <p>the possibilities when technology and design meet.</p>
              </div>
            </div>
          </header>
          
        </div>

        {/* Sidebar */}
        <div
          className={`absolute bg-gray-800 text-white w-59 min-h-screen overflow-y-auto transition-transform ${
            showSidebar ? 'z-50' : '' // Set z-index to 50 when sidebar is shown
          } ${showSidebar ? '' : 'transform translate-x-full'
          } ease-in-out duration-500 right-0`}
        >
          <div className="p-4">
            <button className="text-white absolute top-4 right-4" onClick={closeSidebar}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="mt-12 ml-6">
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Work
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Who WE Are
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  For Startups
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Career
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-2xl font-bold block hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <h1 className="ml-4">USA</h1><br />
          <p className="ml-6">186 Princeton Hightstown Rd, Bldg 3,</p>
          <p className="ml-6">Suite 10, West Windsor, NJ 08550</p>
          <br />
          <h1 className="ml-4">INDIA</h1><br />
          <p className="ml-6">Workafella Highstreet, 431, Anna Salai, Teynampet,</p>
          <p className="ml-6">Chennai, Tamil Nadu 600018</p>
          <br />
          <h1 className="ml-4"><p>E-mail: hello@studiodiseno.com
<p >
Contact: +91 44 42632026</p></p></h1>
<p className="ml-4 mt-8">©2019 StudioDiseño. All Rights Reserved.</p>
        </div>
        
      </div>

      {/* Close the sidebar when clicking outside of it */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40" // Ensure overlay is behind sidebar when shown
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Navbar;




