import React from 'react';

const ChairsList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4 w-full md:w-[90%] mx-auto justify-items-center">
      {data.map((eachData) => (
        <div
          key={eachData.id}
          className="md:border shadow hover:shadow-md flex flex-col p-2 justify-between w-full max-w-xs"
        >
          <div className="w-full h-36 md:h-60 flex flex-col items-center gap-2">
            
            <img
              src={eachData.image}
              alt={eachData.name}
              className="h-24 md:h-40 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="p-1 md:p-2">
              <h5>{eachData.name}</h5>
              <p><span className="font-bold">Price:</span> ${eachData.price}</p>
              
            </div>
            <div className="flex flex-row gap-1 self-end mt-1">
              <button className="border border-black md:p-3 p-2 text-xs font-medium bg-green-400 cursor-pointer">
                Buy
              </button>
              <button className="border border-black md:p-3 p-2 text-xs font-medium bg-black text-white cursor-pointer">
                See more...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChairsList;