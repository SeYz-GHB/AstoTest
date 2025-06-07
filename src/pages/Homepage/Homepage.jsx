import React from 'react';
import AutoCarousel from '../../components/AutoCarousel';
import MenuIcon from '../../components/MenuIcon';


import Companys_Logo from '../../components/Companys_Logo';
import qcy from '../../assets/LOGOES/QCY LOGO.png';
import jbl from '../../assets/LOGOES/JBL LOGO.png';
import sny from '../../assets/LOGOES/Sony LOGO.png';
import razer from '../../assets/LOGOES/RAZER LOGO.png'
import marvo from '../../assets/LOGOES/MARVO LOGO.png'
import attack_shark from '../../assets/LOGOES/ATTACK SHARK LOGO.png'
import logitech from '../../assets/LOGOES/LOGITECH LOGO.png'
import aula from '../../assets/LOGOES/AULA LOGO.png'

import { data } from '../../data/datas';
import poster1 from '../../assets/Headphone/AutoCarouselImage/poster1.png'
import poster2 from '../../assets/MousepadImage/Mouse pad/AutoCarousel/poster2.png'
import poster3 from '../../assets/KeyboardImage/AutoCarouselImage/poster1.jpg'
import PreOrder from '../../components/PreOrder';
import rogchair1 from '../../assets/PreOrder/rogchair1.png'
import rogchair2 from '../../assets/PreOrder/rogchair2.png'
import rogchair3 from '../../assets/PreOrder/rogchair3.png'
import FilterProduct from '../../components/HomepageCompo/FilterProduct';
import LeftBar from '../../components/HomepageCompo/LeftBar';
import MouseShowStage from '../../components/MouseCompo/MouseShowStage';
const HomePage = () => {
  const images = [poster1,poster2,poster3,poster1,poster2,poster3];

  const logoes = [razer,marvo,attack_shark,logitech,aula,qcy,jbl,sny];   
  const id = ["MonkaHG9070W","LargeRGBWirelessCharge",'MarvoKG933G',"MonkaHG9070W","LargeRGBWirelessCharge",'MarvoKG933G' ]
  
  const Pre_product =[rogchair1,rogchair2,rogchair3];

  const Pre_qualification = [
    'Adjustable headrest, lumbar support, seat depth, armrests (can move up/down, forward/backward, left/right).',
    'Breathable mesh and sturdy aluminum frame.',
    'You can raise the armrests to support your arms when playing games on your phone.',
    'You can tilt the chair back and lock it at different angles.',
    'Meant for long gaming sessions with strong durability.',
    "ROG's signature cyberpunk-inspired design."
  ];
  

  return (
    <div className=" flex flex-col items-center">
      <AutoCarousel images={images} />
      <Companys_Logo logoes ={logoes}/>
      <MenuIcon noneViewColors='text-black' />
      <MouseShowStage />
      
        
        
          <div className='flex flex-col md:flex-row w-full'>
       
         {/*  <LeftBar 
  brands={{
    mouse: ['RAZER', 'MARVO', 'ATTACK SHARK', 'Logitech', 'Aula'],
    headset: ['QCY', 'JBL', 'Sony', 'RAZER'],
    keyboard: ['RAZER', 'Logitech', 'AULA', 'Redragon'],
    bag: ['Samsonite', 'Tigernu', 'Nike', 'Adidas'],
    table: ['FlexiSpot', 'IKEA', 'Autonomous', 'UPLIFT'],
    gaming_chair: ['Secretlab', 'DXRacer', 'Anda Seat', 'RAZER']
  }}
/>
 */}


           <FilterProduct datas={data} />
          </div>

          <PreOrder Pre_product={Pre_product} Pre_qualification={Pre_qualification} price={'599$'} />
        </div>
     
      
    
  );
};

export default HomePage;