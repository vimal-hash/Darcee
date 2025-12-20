'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Industries', href: '#industries' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-12 pt-4 sm:pt-5 md:pt-6 lg:pt-8">
      {/* Pill-shaped glassmorphism container */}
      <div className="max-w-[1440px] mx-auto">
        <div className={`relative bg-white/[0.03] backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-300 ${scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.8)]' : ''}`}>
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 h-14 sm:h-16 md:h-[68px] lg:h-[72px]">
            
            {/* Logo - Left */}
            <div className="flex-shrink-0 min-w-0">
              <a href="#home" className="block">
                <img 
                  src="/Nav_logo.png" 
                  alt="D.A.R.C.E.E" 
                  className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain"
                />
              </a>
            </div>

            {/* Navigation Links - Center (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 flex-1 justify-center mx-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/90 text-[14px] xl:text-[15px] font-medium hover:text-white transition-colors duration-300 relative group whitespace-nowrap"
                >
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff6b35] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Right */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(255,107,53,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,53,0.4)] whitespace-nowrap"
              >
                Contact
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/[0.03] backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden animate-fadeIn">
              <div className="flex flex-col py-2 sm:py-3">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-white/90 text-[14px] sm:text-[15px] font-medium hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}