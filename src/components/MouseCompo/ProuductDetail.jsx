import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/Mouses";
import ContactModal from "../ContactModal";
import { GiUsbKey } from 'react-icons/gi';
import { FaBluetooth } from 'react-icons/fa6';
import { BsFillUsbPlugFill } from 'react-icons/bs';

import MousesRowList from "../ProductRowList";
import Carts from "../Carts";

const iconMap = {
  wired: <BsFillUsbPlugFill />,
  USB_wireless: <GiUsbKey />,
  bluetooth: <FaBluetooth />,
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const product = data.find((item) => item.id === id);

  const handleQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center text-2xl text-gray-700 font-semibold">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto overflow-hidden transform transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sticky top-0">
          {/* Image Section */}
          <div className="flex flex-col space-y-4">
            <img
              src={product.brandLogo}
              alt={product.brand_name}
              className="h-12 w-12 md:w-20 md:h-20 object-contain"
            />
            <div className="flex items-center gap-2 my-1 text-[1.2rem] md:text-2xl">
              {product.features.connection.map((conn, index) => (
                <span key={index} className="text-white bg-gray-700 p-1 rounded-full">
                  {iconMap[conn]}
                </span>
              ))}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="font-bold text-gray-900 text-center">{product.name}</h3>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between mt-7">
            <div>
              <p className="text-lg text-gray-600 mb-2">{product.type}</p>
              <p className="text-2xl font-semibold text-green-600 mb-4">
                ${product.price.toFixed(2)}
              </p>

              {/* Description */}
              {product.description && (
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Description</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Features</h5>
                <ul className="space-y-2 text-gray-700 leading-10">
                  <li>
                    <span className="font-medium">DPI:</span> {product.features.dpi}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Connection:</span>{" "}
                    {product.features.connection.join(", ").toUpperCase()}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Lighting:</span> {product.features.lighting}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Battery:</span> {product.features.battery}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Buttons:</span> {product.features.buttons}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Weight:</span> {product.features.weight}
                    <hr />
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
           
              
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 inline-block bg-green-600 hover:bg-black text-white py-2 px-4 transition-colors duration-200 cursor-pointer"
              >
                Contact Seller
              </button>
          
          </div>
        </div>
      </div>

 

      <div className="py-8 md:block">
        <div className="max-w-[300px] md:min-w-2xl lg:min-w-4xl mx-auto px-4">
          <MousesRowList datas={data} basePath="mouses" showConnectionIcons={true} />
        </div>
      </div>

      {showModal && (
        <ContactModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductDetail;
