import React, { useState } from 'react'

import keyboard1 from '../../assets/KeyboardImage/AutoCarouselImage/poster1.jpg'
import keyboard2 from '../../assets/KeyboardImage/AutoCarouselImage/poster2.jpg'
import keyboard3 from '../../assets/KeyboardImage/AutoCarouselImage/poster3.jpg'
import AutoCarousel from '../../components/AutoCarousel'
import Companys_Logo from '../../components/Companys_Logo'
import MenuIcon from '../../components/MenuIcon'
import KeyboardsList from '../../components/KeyboardCompo/KeyboardList'
import { data } from '../../data/Keyboards'


import Razer from '../../assets/LOGOES/RAZER LOGO.png';
import Marvo from '../../assets/LOGOES/MARVO LOGO.png';
import Attack_Shark from '../../assets/LOGOES/ATTACK SHARK LOGO.png';
import Logitech from '../../assets/LOGOES/LOGITECH LOGO.png';
import Aula from '../../assets/LOGOES/AULA LOGO.png';
import Imice from '../../assets/LOGOES/IMICE LOGO.png';
import Asto from '../../assets/LOGOES/ASTO LOGO.jpg';
import Onikuma from '../../assets/LOGOES/ONIKUMA LOGO.png'
import Ziyoulang from '../../assets/LOGOES/ZIYOULANG LOGO.png'
import BrandOfProduct from '../../components/BrandOfProduct'

const Keyboards = () => {
  const images = [keyboard1,keyboard2,keyboard3,keyboard1,keyboard2,keyboard3];
      const logoes = [Asto, Razer, Marvo, Attack_Shark, Logitech, Aula, Imice];

     const brandDetails = [
        { name: 'All', image: Asto },
        { name: 'Razer', image: Razer },
        { name: 'Marvo', image: Marvo },
        { name: 'Attack_Shark', image: Attack_Shark },
        { name: 'Logitech', image: Logitech },
        { name: 'Aula', image: Aula },
        { name: 'Onikuma', image: Onikuma },
        { name: 'Ziyoulang', image: Ziyoulang },
      ];
      const [filteredData, setFilteredData] = useState(data);
        const [activeBrand, setActiveBrand] = useState(0); // Add activeBrand state here
      
        const id = ['MarvoKG933G','OnikumaG52','AulaF75','MarvoKG933G','OnikumaG52','AulaF75']
      
        const handleFilter = (brandName, index) => {
          setActiveBrand(index); // Update activeBrand state
          if (index === 0) {
            setFilteredData(data); // Show all items if 'All' is selected
          } else {
            const filtered = data.filter((item) => item.brand_name === brandName);
            setFilteredData(filtered); // Filter by selected brand
          }
        };
      

  return (
    <div>
      <AutoCarousel images={images} basePath="keyboards" id={id}/>
      <Companys_Logo logoes={logoes} />
      <MenuIcon noneViewColors="opacity-30" />
      <BrandOfProduct brandDetails={brandDetails} onFilter={handleFilter} activeBrand={activeBrand} />
      
      {filteredData.length === 0 ? (
        <div className="text-center text-gray-400 text-lg py-10 font-semibold min-h-screen">
          <h2>No input data yet.</h2>
        </div>
      ) : (
        <KeyboardsList data = {filteredData}/>
      )}


    </div>
  )
}

export default Keyboards
