import React from 'react';

const BrandOfProduct = ({ brandDetails, onFilter, activeBrand }) => {
  return (
    <div className="relative py-8 px-4 bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-lime-300 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-300 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
          Choose Your Brand
        </h2>
        
        <div className="flex flex-row md:gap-8 gap-4 justify-center flex-wrap items-center max-w-6xl mx-auto">
          {brandDetails.map((brand, index) => (
            <div
              className={`group relative w-16 h-16 md:w-24 md:h-24 cursor-pointer transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 ${
                activeBrand === index 
                  ? 'scale-110 -translate-y-2' 
                  : 'hover:scale-110'
              }`}
              key={index}
              onClick={() => onFilter(brand.name, index)}
            >
              {/* Glow effect for active brand */}
              {activeBrand === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
              )}
              
              {/* Brand container */}
              <div className={`relative w-full h-full p-3 md:p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                activeBrand === index 
                  ? 'bg-white/60 border-green-400 shadow-2xl shadow-green-500/50' 
                  : 'bg-white/30 border-green-300 hover:bg-white/50 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/30'
              }`}>
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300" 
                />
                
                {/* Brand name tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap backdrop-blur-sm">
                    {brand.name}
                  </div>
                </div>
              </div>
              
              {/* Hover ring effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Selected brand indicator */}
        {activeBrand !== null && activeBrand !== undefined && brandDetails[activeBrand] && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 text-sm md:text-base font-medium">
                Selected: {brandDetails[activeBrand].name}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandOfProduct;