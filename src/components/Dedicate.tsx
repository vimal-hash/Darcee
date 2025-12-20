'use client';

export default function HeroSection() {
  const capabilities = [
    'UI/UX',
    'BRANDING',
    'MOBILE APP',
    'WEBSITE DESIGN'
  ];

  return (
    <section className="relative w-full bg-[#1C1B1D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-8 xl:col-span-8 space-y-8 lg:space-y-10">
            
            <h1 className="text-white font-normal leading-[1.15] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[56px] ">
                A visual designer dedicated to crafting meaningful and
              </span>
              {/* <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px]">
                
              </span> */}
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[56px] ">
                emotional digital experiences.
              </span>
            </h1>

            <p className="text-[#a0a0a0] text-base sm:text-[15px] md:text-[16px] leading-relaxed max-w-[580px] font-light">
              Focus on growing your business while I ensure your brand is presented powerfully in the digital world—captivating your audience and setting you apart from the competition.
            </p>

            <button className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 rounded-full text-white text-[15px] font-normal hover:bg-white/5 hover:border-white/50 transition-all duration-300">
              About Me
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 flex lg:justify-end">
            <div className="flex flex-col gap-5 lg:gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-white text-sm sm:text-[13px] lg:text-[14px] font-medium tracking-wider uppercase opacity-90 hover:opacity-100 transition-opacity duration-300 text-left lg:text-right">
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}