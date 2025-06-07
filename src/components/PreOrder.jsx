import React, { useState, useEffect } from 'react';

const PreOrder = ({ Pre_product = [], Pre_qualification = [], price = "$2,999" }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [shimmerPosition, setShimmerPosition] = useState(0);

  // Demo data if props are empty
  const products = Pre_product.length ? Pre_product : [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
  ];
  
  const qualifications = Pre_qualification.length ? Pre_qualification : [
    "Handcrafted Excellence",
    "Premium Materials & Finishes", 
    "Exclusive Limited Edition",
    "Lifetime Warranty Included",
    "Complimentary White-Glove Service"
  ];

  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setShimmerPosition(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(shimmerInterval);
  }, []);

  const goNext = () => {
    setCurrent((pre) => (pre + 1) % products.length);
  };

  const goBack = () => {
    setCurrent((pre) => (pre - 1 + products.length) % products.length);
  };

  const next = (current + 1) % products.length;
  const back = (current - 1 + products.length) % products.length;
  
  const handleTarget = (index) => {
    setCurrent(index);
  }
  
  return (
    <div className='w-full flex justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 relative overflow-hidden'>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-amber-500/10 rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-500/10 rotate-12 opacity-20"></div>
      
      <div className='w-[85%] max-w-7xl flex flex-col items-center relative z-10'>
        {/* Premium Title Section */}
        <div className='flex flex-col items-center gap-6 mb-16'>
          <div className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full flex justify-center items-center shadow-2xl shadow-amber-500/20 relative overflow-hidden'>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
              style={{ 
                transform: `translateX(${shimmerPosition * 3 - 150}%) skewX(-12deg)`,
                transition: shimmerPosition === 0 ? 'none' : 'transform 0.05s linear'
              }}
            />
            <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-amber-400/30 relative z-10'></div>
          </div>
          
          <div className='text-center'>
            <h1 className='text-white font-light text-2xl md:text-5xl tracking-[0.2em] mb-2 font-serif'>
              PREMIUM
            </h1>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto'></div>
            <p className='text-amber-200/80 text-sm md:text-lg mt-4 font-light tracking-wide'>
              Crafted for Excellence
            </p>
          </div>
        </div>
        
        {/* Mobile Carousel - Premium Style */}
        <div className='flex md:hidden flex-col items-center justify-center w-full mb-12'>
          <div className='relative w-full flex justify-center p-8'>
            <div className="absolute inset-4 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 shadow-2xl">
              <img
                src={products[current]}
                alt={`Product ${current}`}
                className='h-[280px] w-[280px] object-contain transition-all duration-700 hover:scale-105'
              />
            </div>
            <button
              className='absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3 text-2xl text-amber-400 bg-black/60 backdrop-blur-sm border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-lg'
              onClick={goBack}
            >
              ‹
            </button>
            <button
              className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3 text-2xl text-amber-400 bg-black/60 backdrop-blur-sm border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-lg'
              onClick={goNext}
            >
              ›
            </button>
          </div>
          
          <div className='flex mt-6 gap-4'>
            {products.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${index === current ? 'bg-gradient-to-r from-amber-400 to-yellow-300 scale-125 shadow-lg shadow-amber-400/50' : 'bg-gray-500/50 hover:bg-amber-400/60'}`}
                onClick={() => handleTarget(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Carousel - Premium Style */}
        <div className='hidden md:flex flex-row items-center justify-center gap-12 w-full mb-16'>
          <button
            className='cursor-pointer rounded-full p-4 px-5 text-3xl text-amber-400 bg-black/40 backdrop-blur-sm border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 transition-all duration-300 shadow-xl'
            onClick={goBack}
          >
            ‹
          </button>

          <div className='flex flex-row items-center justify-center gap-12'>
            <div className='opacity-60 scale-90 transition-all duration-700 hover:opacity-80 hover:scale-95'>
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/10">
                <img
                  src={products[back]}
                  alt={`Product ${back}`}
                  className='h-[220px] w-[220px] object-contain filter brightness-75 hover:brightness-90 transition-all duration-500'
                />
              </div>
            </div>

            <div className='scale-110 transition-all duration-700'>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl"></div>
                <img
                  src={products[current]}
                  alt={`Product ${current}`}
                  className='h-[400px] w-[400px] object-contain relative z-10 transition-all duration-500 hover:scale-105'
                />
              </div>
            </div>

            <div className='opacity-60 scale-90 transition-all duration-700 hover:opacity-80 hover:scale-95'>
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/10">
                <img
                  src={products[next]}
                  alt={`Product ${next}`}
                  className='h-[220px] w-[220px] object-contain filter brightness-75 hover:brightness-90 transition-all duration-500'
                />
              </div>
            </div>
          </div>

          <button
            className='cursor-pointer rounded-full p-4 px-5 text-3xl text-amber-400 bg-black/40 backdrop-blur-sm border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 transition-all duration-300 shadow-xl'
            onClick={goNext}
          >
            ›
          </button>
        </div>
        
        {/* Product Info Section - Premium Style */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-12 gap-8'>
          <div className='w-full lg:w-[60%]'>
            <div className='mb-8'>
              <div className='text-amber-400/60 text-sm md:text-base font-light tracking-widest mb-2'>STARTING AT</div>
              <div className='text-white text-4xl md:text-6xl font-light font-serif tracking-wide'>
                {price}
              </div>
              <div className='text-amber-200/60 text-sm md:text-base font-light mt-2'>*Exclusive pricing for early adopters</div>
            </div>
            
            <ul className='space-y-4'>
              {qualifications.map((eachPoint, index) => (
                <li key={index} className='text-gray-200 text-base md:text-lg font-light flex items-start group'>
                  <span className="text-amber-400 mr-4 mt-1 text-xs">◆</span>
                  <span className="group-hover:text-amber-200 transition-colors duration-300">{eachPoint}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='hidden lg:flex flex-row items-center gap-3'>
            {products.map((eachProduct, index) => (
              <div 
                className={`w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] cursor-pointer rounded-xl overflow-hidden transition-all duration-500 border-2 ${index === current ? 'border-amber-400 shadow-lg shadow-amber-400/30 scale-105' : 'border-gray-600/50 hover:border-amber-400/60'}`}
                key={`thumbnail-${index}`} 
                onClick={() => handleTarget(index)}
              >
                <img 
                  src={eachProduct} 
                  alt={`Thumbnail ${index}`} 
                  className={`w-full h-full object-cover transition-all duration-500 ${index === current ? 'opacity-100' : 'opacity-70 hover:opacity-90 filter brightness-90 hover:brightness-100'}`}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Premium Pre-order Button */}
        <div className="text-center">
          <button 
            className='relative bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-12 py-5 md:px-16 md:py-6 text-xl md:text-2xl font-medium text-black cursor-pointer transition-all duration-500 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 tracking-wide overflow-hidden group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000"
              style={{ 
                transform: isHovered ? 'translateX(100%) skewX(-12deg)' : 'translateX(-100%) skewX(-12deg)'
              }}
            />
            <span className="relative z-10 font-serif">Reserve Now</span>
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-amber-200/80 text-sm md:text-base font-light tracking-wide">
              Limited Collection • Delivery Spring 2025
            </p>
            <div className="flex justify-center items-center gap-4 mt-3">
              <div className="w-8 h-px bg-amber-400/50"></div>
              <span className="text-amber-400/60 text-xs tracking-[0.2em]">EXCLUSIVE</span>
              <div className="w-8 h-px bg-amber-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;