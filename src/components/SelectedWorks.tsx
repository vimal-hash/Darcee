'use client';

interface WorkCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
}

const works: WorkCard[] = [
  {
    id: 1,
    title: 'D.A.R.C.E.E',
    subtitle: 'Mobile app Design',
    image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-[#fff]',
  },
  {
    id: 2,
    title: 'D.A.R.C.E.E',
    subtitle: 'Mobile app Design',
    image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-[#fff]',
  },
  {
    id: 3,
    title: 'D.A.R.C.E.E',
    subtitle: 'Mobile app Design',
    image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-[#fff]',
  },
];

export default function SelectedWorks() {
  return (
    <section className="w-full bg-[#1C1B1D] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-white text-5xl md:text-6xl font-light tracking-tight">
            Selected works
          </h2>
          <button className="flex items-center gap-2.5 text-white text-[15px] px-7 py-3.5 border border-white/25 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300">
            View All Works
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative bg-white rounded-[28px] overflow-hidden cursor-pointer hover:scale-[1.015] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
              style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}
            >
              {/* Hero Image Section - 65% of card */}
              <div 
                className={`relative ${work.bgColor} overflow-hidden rounded-t-[28px]`}
                style={{ height: '280px' }}
              >
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover rounded-[20px]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/40 text-sm font-medium">Add Image</div>';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content Section - 35% of card */}
              <div 
                className="flex items-center justify-between px-6 bg-white"
                style={{ height: '150px' }}
              >
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-black text-[22px] font-bold leading-tight mb-1.5 tracking-tight">
                    {work.title}
                  </h3>
                  <p className="text-[#666666] text-[15px] font-normal leading-snug">
                    {work.subtitle}
                  </p>
                </div>
                
                {/* Arrow CTA Button */}
                <button 
                  className="flex-shrink-0 flex items-center justify-center border-[2.5px] border-black rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300"
                  style={{ width: '56px', height: '56px' }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className="transform group-hover:translate-x-0.5 transition-transform duration-300"
                  >
                    <path 
                      d="M5 12H19M19 12L13 6M19 12L13 18" 
                      className="stroke-black group-hover:stroke-white transition-colors duration-300"
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}