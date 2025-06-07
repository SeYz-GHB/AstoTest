import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BsMouse } from "react-icons/bs"
import { FaRegKeyboard } from "react-icons/fa"
import { GiHeadphones } from "react-icons/gi"
import mousePad from '../assets/mousepad.png'
import { LuMonitor } from "react-icons/lu";


const MenuIcon = ({noneViewColors}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { path: '/mouses', icon: <BsMouse className='text-3xl md:text-[50px]' />, label: 'Mouse' },
    { path: '/mousepads',icon: <img src={mousePad} alt="mouse pad" className='w-8 h-[30px] md:w-[50px] md:h-[50px]' />,label: 'Mouse-Pad'},
    { path: '/keyboards', icon: <FaRegKeyboard className='text-3xl md:text-[50px]' />, label: 'Keyboard' },
    { path: '/headphones', icon: <GiHeadphones className='text-3xl md:text-[50px]' />, label: 'Headphone' },
    { path: '/chairs', icon: <LuMonitor className='text-3xl md:text-[50px]' />, label: 'Monitor' },
   
  ]

  return (
    <div className='flex flex-row md:gap-15 text-xs md:text-xl gap-7  my-[20px] justify-center  flex-wrap '>
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path
        return (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition duration-300 ${
              isActive ? ' scale-105 font-bold' : `${noneViewColors} hover:text-gray-500`
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default MenuIcon
