import React from 'react'

const LeftBar = ({ brands }) => {
  return (
    <div className='hidden flex-col md:inline-flex w-full md:w-[20%]  bg-gray-200 mt-4 md:mt-4 md:h-[990px]'>
      <h5 className='hidden md:block bg-black text-white pl-4 py-2'>Product Brand</h5>

      <ul className='flex flex-col w-full overflow-y-auto md:overflow-y-scroll h-full custom-scrollbar'>
        {Object.entries(brands).map(([productType, brandList], index) => (
          <div key={index} className='w-full'>
            
            {/* Mobile: collapsible */}
            <details className="block md:hidden">
              <summary className='pl-4 font-semibold text-black bg-green-600 p-2 cursor-pointer'>
                {productType.toUpperCase()}
              </summary>
              {brandList.map((eachBrand, idx) => (
                <li key={idx} className=' hover:bg-gray-300 cursor-pointer pl-6 py-2'>
                  {eachBrand}
                </li>
              ))}
            </details>

            {/* Desktop: expanded */}
            <div className='hidden md:block'>
              <h6 className='pl-4 font-semibold text-black bg-green-600 p-2'>{productType.toUpperCase()}</h6>
              {brandList.map((eachBrand, idx) => (
                <li key={idx} className=' hover:bg-gray-300 cursor-pointer pl-6 py-2'>
                  {eachBrand}
                </li>
              ))}
            </div>

          </div>
        ))}
      </ul>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #aaa;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default LeftBar