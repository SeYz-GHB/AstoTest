import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiUsbKey } from "react-icons/gi";
import { FaBluetooth } from "react-icons/fa6";
import { BsFillUsbPlugFill } from "react-icons/bs";

const iconMap = {
  usb: <BsFillUsbPlugFill />,
  receiver: <GiUsbKey />,
  bluetooth: <FaBluetooth />,
};

const HeadphonesRowList = ({ datas, basePath = 'headphones' }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 cursor-pointer">
      {datas.map((eachData) => (
        <div
          key={eachData.id}
          className="md:border shadow hover:shadow-md flex flex-col p-1.5 justify-between w-[180px] md:w-[200px] hover:scale-105 transition duration-100 ease-in-out cursor-pointer hover:shadow-green-300 flex-shrink-0 snap-start rounded-[15px]"
          onClick={() => navigate(`/${basePath}/${eachData.id}`)}
        >
          <div className="w-full flex flex-col items-center gap-1.5">
            <div className="flex justify-between w-full">
              <img
                src={eachData.brandLogo}
                alt={`${eachData.brand_name} logo`}
                className="w-[25%] object-contain self-start"
              />
              <div className="flex items-center gap-1.5 my-1 text-[0.875rem] md:text-lg">
                {eachData.features.connection.map((conn, index) => (
                  <span
                    key={index}
                    className="text-white bg-gray-700 p-1 rounded-full"
                  >
                    {iconMap[conn]}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={eachData.image}
              alt={eachData.name}
              className="h-[70%] object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="p-1 md:p-1.5">
              <h5 className="font-bold text-[9px]">{eachData.name}</h5>
              <p>
                <span className="font-bold">Price:</span> ${eachData.price}
              </p>
            </div>
            <div className="flex flex-row gap-1 self-end mt-1">
              <button className="border-b-2 text-xs md:text-lg font-medium hover:p-1.5 text-green-700 hover:text-green-800 cursor-pointer duration-200 ease-in-out">
                See more...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeadphonesRowList;
