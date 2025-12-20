'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <footer className="w-full bg-[#1C1B1D]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-12 md:py-16 lg:py-20">
        
        {/* Brand + Social Pills Section */}
        <div className="mb-16 lg:mb-20">
          {/* Brand */}
          <div className="mb-8 md:mb-10">
            <img 
              src="/darcee_logo.png" 
              alt="D.A.R.C.E.E" 
              className=" mb-3 w-60"
            />
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
              A stunning digital designer portfolio website template for you.
            </p>
          </div>

          {/* Social Pills - Full Width Row */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 md:px-10 lg:px-12 py-3 md:py-3.5 border border-white/20 rounded-full text-white text-[14px] md:text-[15px] font-normal hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section - Page List + Email */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12 lg:mb-16">
          
          {/* Page List - Left */}
          <div>
            <h4 className="text-white text-lg md:text-xl font-semibold mb-8 md:mb-10">
              Page List
            </h4>
            
            {/* 4 Column Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-5">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Home
                </a>
                <a href="#home" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Home
                </a>
                <a href="#home" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Home
                </a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  About
                </a>
                <a href="#about" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  About
                </a>
                <a href="#about" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  About
                </a>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <a href="#works" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Works
                </a>
                <a href="#works" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Works
                </a>
                <a href="#works" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Works
                </a>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4">
                <a href="#insights" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Insights
                </a>
                <a href="#contacts" className="text-gray-400 text-[14px] md:text-[15px] hover:text-white transition-colors">
                  Contacts
                </a>
              </div>
            </div>
          </div>

          {/* Stay Connected - Right */}
          <div>
            <h4 className="text-white text-lg md:text-xl font-semibold mb-8 md:mb-10">
              Stay connected w/ me.
            </h4>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/25 text-white text-[15px] md:text-[16px] pb-4 pr-12 placeholder:text-gray-500 focus:outline-none focus:border-white/60 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-500 text-[13px] md:text-[14px] text-center">
            ©2025 All Rights Reserved. Designed with <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}