import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen items-center max-w-full ">
      <Header />
     
     

      
      <div className="flex flex-col items-center w-full relative flex-grow">
        <Outlet />                                                                                                              
      </div>
      
    </div>
      
    </div>
  )
}

export default RootLayout
