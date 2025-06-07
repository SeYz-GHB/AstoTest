import React, { useState } from 'react';
import AutoCarousel from '../../components/AutoCarousel';


import { data } from '../../data/Headphones';
import MenuIcon from '../../components/MenuIcon';
import Companys_Logo from '../../components/Companys_Logo';
import qcy from '../../assets/LOGOES/QCY LOGO.png';
import jbl from '../../assets/LOGOES/JBL LOGO.png';
import sny from '../../assets/LOGOES/Sony LOGO.png';

import HeadphonesList from '../../components/HeadphonesCompo/HeadphonesList';
import BrandOfProduct from '../../components/BrandOfProduct';

import poster1 from '../../assets/Headphone/AutoCarouselImage/poster1.png'
import poster2 from '../../assets/Headphone/AutoCarouselImage/poster2.png'
import poster3 from '../../assets/Headphone/AutoCarouselImage/poster3.png'

import Razer from '../../assets/LOGOES/RAZER LOGO.png';
import Marvo from '../../assets/LOGOES/MARVO LOGO.png';
import Attack_Shark from '../../assets/LOGOES/ATTACK SHARK LOGO.png';
import Logitech from '../../assets/LOGOES/LOGITECH LOGO.png';
import Aula from '../../assets/LOGOES/AULA LOGO.png';
import Imice from '../../assets/LOGOES/IMICE LOGO.png';
import Asto from '../../assets/LOGOES/ASTO LOGO.jpg';
import Onikuma from '../../assets/LOGOES/ONIKUMA LOGO.png'
const Headphones = () => {
  const images = [poster1,poster2,poster3,poster1,poster2,poster3];

  const id = ["LogitechG733","MonkaHG9070W","MarvoHG9068","LogitechG733","MonkaHG9070W","MarvoHG9068"]

  const logoes = [Asto, Razer, Marvo, , Logitech, Aula, qcy,jbl,sny, Onikuma];
  
   const brandDetails = [
          { name: 'All', image: Asto },
          { name: 'Razer', image: Razer },
          { name: 'Marvo', image: Marvo },
          { name: 'Attack_Shark', image: Attack_Shark },
          { name: 'Logitech', image: Logitech },
          { name: 'Aula', image: Aula },
          {name : 'Onikuma' , image : Onikuma}
        ];
        const [filteredData, setFilteredData] = useState(data);
          const [activeBrand, setActiveBrand] = useState(0); // Add activeBrand state here
        
          
        
          const handleFilter = (brandName, index) => {
            setActiveBrand(index);
            if (index === 0) {
              setFilteredData(data); // Show all products
            } else {
              const filtered = data.filter((item) => item.brand_name === brandName);
              if (filtered.length === 0) {
                setFilteredData([]); // Set to empty array if no results
              } else {
                setFilteredData(filtered);
              }
            }
          };

        

  
  return (
    <div className="max-w-[1920px] flex flex-col">
      <AutoCarousel images={images} basePath='headphones' id={id} />
      <Companys_Logo logoes={logoes} />
      <MenuIcon noneViewColors="opacity-30" />
      <BrandOfProduct brandDetails={brandDetails} onFilter={handleFilter} activeBrand={activeBrand} />

      {filteredData.length === 0 ? (
        <div className="text-center text-gray-400 text-lg py-10 font-semibold min-h-screen">
          <h2>No input data yet.</h2>
        </div>
      ) : (
        <HeadphonesList data={filteredData } basePath = 'headphones'  />
      )}

    </div>
  );
};

export default Headphones;
