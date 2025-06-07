import React from 'react'
import AutoCarousel from '../../components/AutoCarousel'

import MenuIcon from '../../components/MenuIcon';
import ChairsList from '../../components/ChairCompo/ChairsList';
import data from '../../data/Chairs'
const Chairs = () => {

  return (
    <div>
      <AutoCarousel images={images} />
      <MenuIcon noneViewColors="opacity-30" />
      <ChairsList data={data}/>
    </div>
  )
}

export default Chairs
