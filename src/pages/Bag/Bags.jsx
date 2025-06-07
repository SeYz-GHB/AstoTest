import React from 'react'

import AutoCarousel from '../../components/AutoCarousel'
import bag1 from '../../assets/BagImage/AutoCarouselImage/bag_poster1.jpg'
import bag2 from '../../assets/BagImage/AutoCarouselImage/bag_poster2.jpg'
import bag3 from '../../assets/BagImage/AutoCarouselImage/bag_poster3.jpg'
import MenuIcon from '../../components/MenuIcon';
import Companys_Logo from '../../components/Companys_Logo';
import qcy from '../../assets/LOGOES/QCY LOGO.png';
import jbl from '../../assets/LOGOES/JBL LOGO.png';
import sny from '../../assets/LOGOES/Sony LOGO.png';
import razer from '../../assets/LOGOES/RAZER LOGO.png';
import marvo from '../../assets/LOGOES/MARVO LOGO.png';
import logitech from '../../assets/LOGOES/LOGITECH LOGO.png';
import BagsList from '../../components/BagsCompo/BagsList'
import data           from '../../data/Bags'
const Bags = () => {
    const images = [bag1,bag2,bag3,bag1,bag2,bag3];
    const logoes = [razer, marvo, qcy, logitech, sny, jbl];  
  return (
    <div className='max-w-[1920px] flex flex-col'>
      <AutoCarousel images={images} />
      <Companys_Logo logoes={logoes} />
      <MenuIcon noneViewColors="opacity-30" />
      <BagsList data={data}/>
    </div>
  )
}

export default Bags
