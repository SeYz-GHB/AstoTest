import React, { useState } from 'react';
import { data } from '../../data/Mouses';
import AutoCarousel from '../../components/AutoCarousel';
import MousesList from '../../components/MouseCompo/MousesList';
import MenuIcon from '../../components/MenuIcon';
import BrandOfProduct from '../../components/BrandOfProduct';
import MouseShowStage from '../../components/MouseCompo/MouseShowStage';
import Companys_Logo from '../../components/Companys_Logo';
import MousesDetail from './MousesDetail';

import ATTACKSHARK_WHITE from '../../assets/MouseImages/AutoCarouselImage/AttackSharkX11.png';
import RZR_DEATHADDERESSENTIAL from '../../assets/MouseImages/AutoCarouselImage/RZR-DEATHADDERESSENTIAL.png';
import REDRAGON_REAPING from '../../assets/MouseImages/AutoCarouselImage/Redragon Reaping.png';
import Razer from '../../assets/LOGOES/RAZER LOGO.png';
import Marvo from '../../assets/LOGOES/MARVO LOGO.png';
import Attack_Shark from '../../assets/LOGOES/ATTACK SHARK LOGO.png';
import Logitech from '../../assets/LOGOES/LOGITECH LOGO.png';
import Aula from '../../assets/LOGOES/AULA LOGO.png';
import Imice from '../../assets/LOGOES/IMICE LOGO.png';
import Asto from '../../assets/LOGOES/ASTO LOGO.jpg';

const Mouses = () => {
  const images = [
    RZR_DEATHADDERESSENTIAL,
    REDRAGON_REAPING,
    ATTACKSHARK_WHITE,
    RZR_DEATHADDERESSENTIAL,
    REDRAGON_REAPING,
    ATTACKSHARK_WHITE,
  ];
  const logoes = [Asto, Razer, Marvo, Attack_Shark, Logitech, Aula, Imice];

  const brandDetails = [
    { name: 'All', image: Asto },
    { name: 'Razer', image: Razer },
    { name: 'Marvo', image: Marvo },
    { name: 'Attack_Shark', image: Attack_Shark },
    { name: 'Logitech', image: Logitech },
    { name: 'Aula', image: Aula },
    { name: 'Imice', image: Imice },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [activeBrand, setActiveBrand] = useState(0); // Add activeBrand state here

  const id = ['RZR-DEATHADDERESSENTIAL', 'RedragonReaping', 'ATS-X11', 'RZR-DEATHADDERESSENTIAL', 'RedragonReaping', 'ATS-X11'];

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
    <div className="max-w-[1920px] flex flex-col">
      <AutoCarousel images={images} basePath="mouses" id={id} />
      <Companys_Logo logoes={logoes} />
      <MenuIcon noneViewColors="opacity-30" />
   
      <BrandOfProduct brandDetails={brandDetails} onFilter={handleFilter} activeBrand={activeBrand} />
      <MousesList datas={filteredData} basePath="mouses" />
    </div>
  );
};

export default Mouses;