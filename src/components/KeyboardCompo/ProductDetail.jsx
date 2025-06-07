import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/Keyboards"; // Change to the correct data source
import ContactModal from "../ContactModal";
import MousesRowList from "../ProductRowList"; // Rename if needed for keyboards

const ProductDetail = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const product = data.find((item) => item.id === id);

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

              {/* Features */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Features</h5>
                <ul className="space-y-2 text-gray-700 leading-10">
                  <li>
                    <span className="font-medium">Connection:</span>{" "}
                    {product.features.connection.join(", ").toUpperCase()}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Interface:</span>{" "}
                    {product.features.interface}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Form Factor:</span>{" "}
                    {product.features.formFactor}%
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Hot Swappable:</span>{" "}
                    {product.features.hotSwappable}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Switch Type:</span>{" "}
                    {product.features.switchType}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Switch Name:</span>{" "}
                    {product.features.switchName}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Backlit:</span>{" "}
                    {product.features.backlit}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Battery:</span>{" "}
                    {product.features.battery}
                    <hr />
                  </li>
                  <li>
                    <span className="font-medium">Customization:</span>{" "}
                    {product.features.customization}
                    <hr />
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-4 inline-block bg-green-700 hover:bg-black text-white py-2 px-4 transition-colors duration-200 cursor-pointer"
            >
              Contact Seller
            </button>
          </div>
        </div>
      </div>

      <div className="py-8 md:block">
        <div className="max-w-[300px] md:min-w-2xl lg:min-w-4xl mx-auto px-4">
          <MousesRowList datas={data} basePath="keyboards" /> {/* Adjust component if renamed */}
        </div>
      </div>

      {showModal && (
        <ContactModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductDetail;
