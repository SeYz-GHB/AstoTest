import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Carts = ({quantity}) => {

  return (
    <div>
       <Link to="/checkout" className='flex flex-row items-center'>
            <AiOutlineShoppingCart 
              className="text-[25px] cursor-pointer" 
              aria-label="Profile"
              role="img"
            />
            <p className='-translate-x-1 translate-y-1 bg-green-500 rounded-[50%] px-2 text-white'>{quantity}</p>
            
          </Link>
    </div>
  )
}

export default Carts
