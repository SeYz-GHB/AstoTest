import React from 'react'

const Companys_Logo = ({ logoes }) => {
  return (
    <div className='overflow-hidden w-full '>

      
        <div className='flex flex-row h-[20px] md:h-[40px] gap-5 items-center m-2 w-full' style={{
        transform: 'translateX(-100%)',
        animation: `slideRight 20s ease-out forwards infinite`,
        
      }}>
      
      {logoes.map((logo, index) => (
        <img
          src={logo}
          alt={`logo-${index}`}
          key={logo}
          className='w-auto h-full'
          
        />
      ))}
      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </div>
  )
}

export default Companys_Logo
