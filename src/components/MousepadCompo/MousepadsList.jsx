import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../ContactModal';

const MousepadsList = ({ datas ,  basePath = "mousepads", }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="min-h-screen mt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full md:w-[90%] mx-auto justify-items-center px-2 md:px-0">
        {datas.map((eachData) => (
          <div
            key={eachData.id}
            className="md:border shadow hover:shadow-md flex flex-col p-2 justify-between w-full max-w-xs hover:scale-105 transition duration-100 ease-in-out cursor-pointer hover:shadow-green-300 rounded-[15px]"
            onClick={() => navigate(`/${basePath}/${eachData.id}`)}
          >
            <div className="w-full flex flex-col items-center gap-2 ">
              <div className="flex justify-between w-full items-center">
                <img
                  src={eachData.brandLogo}
                  alt={`${eachData.brand_name} logo`}
                  className="w-[25%] object-contain self-start"
                />
              </div>
              <img
                src={eachData.image}
                alt={eachData.name}
                className="h-[80%] md:h-[85%] object-contain w-full"
              />
            </div>

            <div className="flex flex-col md:p-2">
              <h6 className="font-bold">{eachData.name}</h6>
              <div className="flex justify-between w-full">
                <p>
                  <span className="font-bold">Price:</span> ${eachData.price}
                </p>
                <button
                  className="text-xs md:text-[20px] font-bold text-white hover:bg-black cursor-pointer duration-200 ease-in-out border p-2 px-4 md:px-5 bg-green-600 rounded-[10px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(eachData);
                  }}
                >
                  <p>Buy</p>
                </button>
              </div>
            </div>
          </div>
        ))}

        {selectedProduct && (
          <ContactModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </section>
  );
};

export default MousepadsList;
