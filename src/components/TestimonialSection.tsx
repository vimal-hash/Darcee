'use client';

export default function TestimonialSection() {
  const attributes = [
    'Strong creative approach',
    'Fast delivery within deadlines',
    'Clean, modern design styles',
    '100% original concepts',
    'Easy communication'
  ];

  return (
    <section className="w-full">
      {/* Top Attribute Bar - Light Background */}
      <div className="w-full bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-5 md:py-6">
          {/* Horizontal scrollable on mobile, flex wrap on larger screens */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 overflow-x-auto scrollbar-hide">
            {attributes.map((attribute, index) => (
              <div
                key={index}
                className="flex items-center gap-2 flex-shrink-0 group"
              >
                {/* Sparkle Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M8 0L9.09 5.26L14 6.5L9.09 7.74L8 13L6.91 7.74L2 6.5L6.91 5.26L8 0Z"
                    fill="#FFB800"
                  />
                  <path
                    d="M12 3L12.5 5L14.5 5.5L12.5 6L12 8L11.5 6L9.5 5.5L11.5 5L12 3Z"
                    fill="#FFB800"
                  />
                </svg>
                
                {/* Attribute Text */}
                <span className="text-[#2a2a2a] text-[13px] md:text-[14px] font-medium whitespace-nowrap">
                  {attribute}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Block - Dark Background */}
      <div className="w-full bg-[#1C1B1D]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-10 md:py-12 lg:py-14">
          {/* Testimonial Text - Constrained width for readability */}
          <div className="max-w-[900px] mx-auto">
            <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed font-light">
              Working with <span className="">D.A.R.C.E.E</span> on our recent project was an exceptional experience. Their creativity, professionalism, and attention to detail went far beyond my expectations. I highly recommend <span className="">D.A.R.C.E.E</span> to anyone looking for a reliable, skilled, and visionary design partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}