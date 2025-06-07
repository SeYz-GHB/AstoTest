import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoCarousel = ({ images, keyboardWidth, basePath, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length-3));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg md:h-[200px] lg:h-[320px] md:flex items-center justify-center cursor-pointer bg-black">
      <div
        className="flex max-w-[1920px] h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className={`h-full flex-shrink-0 ${keyboardWidth ? 'w-1/2' : 'w-1/3'}`}
            onClick={() => navigate(`/${basePath}/${id[index]}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
