import React from 'react'
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-zinc-600 w-full py-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start">
                  <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h2 className="text-2xl font-bold mb-4"> <img src={Logo} alt="Logo" className=" h-10 w-14"/>Studio Diseño</h2>
                    <p className="text-sm">UX/UI Design & Branding Agency</p>
                  </div>
                  <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h3 className="font-semibold mb-2">Work</h3>
                    <ul>
                      <li><a href="#" className="text-sm hover:text-zinc-800">Services</a></li>
                      <li><a href="#" className="text-sm hover:text-zinc-800">Who We Are</a></li>
                      <li><a href="#" className="text-sm hover:text-zinc-800">For Startups</a></li>
                      <li><a href="#" className="text-sm hover:text-zinc-800">Career</a></li>
                      <li><a href="#" className="text-sm hover:text-zinc-800">Get in touch</a></li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-sm mb-1">E-mail: <a href="mailto:hello@studiodiseno.com" className="hover:text-zinc-800">hello@studiodiseno.com</a></p>
                    <p className="text-sm">Contact: +91 44 42632026</p>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <h3 className="font-semibold mb-2">Locations</h3>
                    <p className="text-sm mb-1">INDIA</p>
                    <p className="text-sm mb-2">Workafella Highstreet, 431, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018</p>
                    <a href="#" className="text-sm hover:text-zinc-800">View Map</a>
                    <p className="text-sm mb-1 mt-4">USA</p>
                    <p className="text-sm mb-2">186 Princeton Hightstown Rd, Bldg 3, Suite 10, West Windsor, NJ 08550</p>
                    <a href="#" className="text-sm hover:text-zinc-800">View Map</a>
                  </div>
                </div>
                <div className="text-center text-xs mt-8">
                  ©2019 StudioDiseño. All Rights Reserved.
                </div>
              </div>
            </footer>
  )
}

export default Footer