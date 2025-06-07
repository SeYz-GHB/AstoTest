import React from 'react'
import { useState } from 'react';
import poster1 from '../../assets/Headphone/CardsPoster/poster1.png'
import poster2 from '../../assets/Headphone/CardsPoster/poster2.jpg'
const CardsPoster = () => {
    const [clicked, setClicked] = useState([false, false, false]); // 3 states for 3 boxes

  const handleClick = (index) => {
    const updatedClicked = [...clicked];
    updatedClicked[index] = !updatedClicked[index];
    setClicked(updatedClicked);
  };
  return (
    <div>
      <div className=" w-full flex flex-col items-center relative">
            <div
                className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transform transition duration-300 ${
                clicked[0] ? 'translate-x-24 sm:translate-x-32 md:translate-x-40 lg:translate-x-48' : ''
                } z-10 border-2 border-black cursor-pointer`}
                onClick={() => handleClick(0)}
            >
                <img src={poster1} alt={poster1} />
                <button className='bg-green-600 border-2'>buy</button>
            </div>

            <div
                className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96  transform -translate-x-12 sm:-translate-x-16 md:-translate-x-20 lg:-translate-x-24 -translate-y-20 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-40 transition duration-300 ${
                clicked[1] ? 'translate-x-12 sm:translate-x-16 md:translate-x-20 lg:translate-x-24' : ''
                } z-20 border-2 border-black cursor-pointer`}
                onClick={() => handleClick(1)}
            >
                <img src={poster2} alt={poster2} />
            </div>

            <div
                className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96  transform -translate-x-24 sm:-translate-x-32 md:-translate-x-40 lg:-translate-x-48 -translate-y-40 sm:-translate-y-48 md:-translate-y-56 lg:-translate-y-64 transition duration-300 ${
                clicked[2] ? 'translate-x-0 sm:translate-x-16 md:translate-x-20 lg:translate-x-0' : ''
                } z-30 border-2 border-black cursor-pointer`}
                onClick={() => handleClick(2)}
            >
                <img src={poster1} alt={poster1} />
            </div>
        </div>
    </div>
  )
}

export default CardsPoster
