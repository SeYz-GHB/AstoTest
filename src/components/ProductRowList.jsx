import React from "react";
import { useNavigate } from "react-router-dom";
import { GiUsbKey } from "react-icons/gi";
import { FaBluetooth } from "react-icons/fa6";
import { BsFillUsbPlugFill } from "react-icons/bs";

const iconMap = {
  wired: <BsFillUsbPlugFill />,
  USB_wireless: <GiUsbKey />,
  bluetooth: <FaBluetooth />,
};

const MousesRowList = ({ datas, basePath, showConnectionIcons }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
      {datas.map((eachData) => (
        <div
          key={eachData.id}
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/${basePath}/${eachData.id}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/${basePath}/${eachData.id}`);
            }
          }}
          className="md:border shadow hover:shadow-md flex flex-col p-2 justify-between w-[180px] md:w-[200px] hover:scale-105 transition duration-100 ease-in-out hover:shadow-green-300 flex-shrink-0 snap-start rounded-[15px] h-[300px] bg-white cursor-pointer"
        >
          {/* Top area with brand and connection */}
          <div className="flex justify-between items-start mb-2">
            <img
              src={eachData.brandLogo}
              alt={`${eachData.brand_name} logo`}
              className="w-[25%] object-contain"
            />
            {showConnectionIcons && eachData.features?.connection && (
              <div className="flex items-center gap-1 text-sm md:text-base">
                {eachData.features.connection.map((conn, index) => (
                  <span
                    key={index}
                    className="text-white bg-gray-700 p-1 rounded-full"
                  >
                    {iconMap[conn]}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image section */}
          <div className="w-full aspect-[4/3] flex items-center justify-center mb-2">
            <img
              src={eachData.image}
              alt={eachData.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text area */}
          <div className="flex flex-col text-xs md:text-sm">
            <h5 className="font-bold mb-1 truncate">{eachData.name}</h5>
            <p>
              <span className="font-bold">Price:</span> ${eachData.price}
            </p>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default MousesRowList;
