import React, { useState } from 'react';
import { data } from '../../data/Mouespads';
import AutoCarousel from '../../components/AutoCarousel';
import MousesList from '../../components/MouseCompo/MousesList';
import MenuIcon from '../../components/MenuIcon';
import BrandOfProduct from '../../components/BrandOfProduct';
import MouseShowStage from '../../components/MouseCompo/MouseShowStage';
import Companys_Logo from '../../components/Companys_Logo';
import MousepadsList from '../../components/MousepadCompo/MousepadsList';
import poster1 from '../../assets/MousepadImage/Mouse pad/AutoCarousel/poster1.png'
import poster2 from '../../assets/MousepadImage/Mouse pad/AutoCarousel/poster2.png'
import poster3 from '../../assets/MousepadImage/Mouse pad/AutoCarousel/poster3.png'

import Logitech from '../../assets/LOGOES/LOGITECH LOGO.png';
import Asto from '../../assets/LOGOES/ASTO LOGO.jpg';
import Akko from '../../assets/LOGOES/AKKO LOGO.png'
import Glorious from '../../assets/LOGOES/GLORIOUS LOGO.jpg'
import Onikuma from '../../assets/LOGOES/ONIKUMA LOGO.png'
import Redragon from '../../assets/LOGOES/REDRAGON LOGO.png'
import Steelseries from '../../assets/LOGOES/STEELSERIES LOGO.png'
const Mousepads = () => {
  const images = [
    poster2,poster3,poster1,poster2,poster3,poster1,,
  ];
  const logoes = [Asto, Logitech, Akko, Glorious, Onikuma , Redragon, Steelseries];




  const brandDetails = [
    { name: 'Asto', image: Asto },
  { name: 'Logitech', image: Logitech },
  { name: 'Akko', image: Akko },
  { name: 'Glorious', image: Glorious },
  { name: 'Onikuma', image: Onikuma },
  { name: 'Redragon', image: Redragon },
  { name: 'Steelseries', image: Steelseries }
];


  const [filteredData, setFilteredData] = useState(data);
  const [activeBrand, setActiveBrand] = useState(0); // Add activeBrand state here

  const id = ['FlickM', 'LargeRGBWirelessCharge',  'BlueDrawing','FlickM', 'LargeRGBWirelessCharge',  'BlueDrawing'];

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
      <AutoCarousel images={images} basePath="mousepads" id={id} />
      <Companys_Logo logoes={logoes} />
      <MenuIcon noneViewColors="opacity-30" />
      <BrandOfProduct brandDetails={brandDetails} onFilter={handleFilter} activeBrand={activeBrand} />
      <MousepadsList datas={filteredData} basePath="mousepads" />
    </div>
  );
};

export default Mousepads;