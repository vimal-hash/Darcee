'use client';

export default function CTASection() {
  const navLinks = [
    { label: 'ABOUT ME', href: '#about' },
    { label: 'WORKS', href: '#works' },
    { label: 'INSIGHTS', href: '#insights' }
  ];

  return (
    <section className="relative w-full bg-[#1C1B1D] overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] "></div>
      
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        {/* Vertically centered content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          
          {/* Eyebrow Text */}
          <p className="text-white/70 text-sm md:text-[15px] lg:text-[16px] font-light tracking-[0.15em] uppercase">
            Have an idea?
          </p>

          {/* Primary Headline */}
          <h2 className="text-white font-normal leading-[1.1] tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px]">
              Let's bring your{' '}
              <span className="text-[#ff6b35] font-semibold">
                ideas to life
              </span>
            </span>
          </h2>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8 lg:gap-10 pt-4 md:pt-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 text-[13px] md:text-[14px] lg:text-[15px] font-medium tracking-[0.1em] uppercase hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}