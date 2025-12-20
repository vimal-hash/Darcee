'use client';

import { ArrowRight } from 'lucide-react';

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
    image: '/work1.jpg', // Replace with your image
    bgColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'D.A.R.C.E.E',
    subtitle: 'Mobile app Design',
    image: '/work2.jpg', // Replace with your image
    bgColor: 'bg-gray-800',
  },
  {
    id: 3,
    title: 'D.A.R.C.E.E',
    subtitle: 'Mobile app Design',
    image: '/work3.jpg', // Replace with your image
    bgColor: 'bg-purple-900',
  },
];

export default function SelectedWorksTwo() {
  return (
    <section className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
            Selected works
          </h2>
          <button className="flex items-center gap-2 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
            View All Works
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image Container */}
              <div className={`relative ${work.bgColor} aspect-[4/3] flex items-center justify-center p-8 md:p-12`}>
                <div className="relative w-full h-full">
                  {/* Placeholder for image - replace with actual images */}
                  <div className="w-full h-full bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    Image Placeholder
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between p-6 md:p-8">
                <div>
                  <h3 className="text-black text-lg md:text-xl font-semibold mb-1">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {work.subtitle}
                  </p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}