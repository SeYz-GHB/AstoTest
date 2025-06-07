import React from "react";
import telegram_logo from '../assets/LOGOES/TELEGRAM LOGO.png';
import messenger_logo from '../assets/LOGOES/MESSENGER LOGO.png';

const ContactModal = ({ product, onClose }) => {
  const message = `Hi, I'm interested in this product:\nName: ${product.name}\nPrice: $${product.price.toFixed(2)}\nID: ${product.id}`;
  const encodedMsg = encodeURIComponent(message);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[15px] shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transition-all duration-300 transform hover:scale-105">
        
       
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
          Contact Us About This Product
        </h2>

        {/* Product Info */}
        <div className="mb-4 sm:mb-6 text-gray-700 text-center text-sm sm:text-base">
          <p className="font-semibold">{product.name}</p>
          <p>
            Price: <span className="text-green-600">${product.price.toFixed(2)}</span>
          </p>
          <p>ID: {product.id}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const url = `https://t.me/share/url?url=&text=${encodedMsg}`;
              window.open(url, "_blank");
            }}
            className="flex-1 flex items-center justify-center gap-2 text-black font-medium py-3 px-4 rounded-[15px] transition duration-200 shadow-md bg-gray-100 hover:bg-gray-200"
          >
            <img src={telegram_logo} alt="Telegram" className="w-[40px] h-[40px]" />
            Telegram
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100064940353465"
            onClick={() => {
              navigator.clipboard.writeText(message);
              alert("Message copied! Paste it in Messenger.");
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-black font-medium py-3 px-4 rounded-[15px] transition duration-200 shadow-md bg-gray-100 hover:bg-gray-200"
          >
            <img src={messenger_logo} alt="Messenger" className="w-[40px] h-[40px]" />
            Messenger
          </a>
        </div>

        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="w-full py-2 px-4  text-gray-700 font-medium transition duration-200 cursor-pointer border-b-2 border-b-green-600 hover:text-red-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
