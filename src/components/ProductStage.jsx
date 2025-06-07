import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductStageDetail = ({ header, description, images, boxs }) => {
  const [current, setCurrent] = useState(0)
  const goNext = () => {
    setCurrent((pre) => (pre + 1) % images.length)
  }
  const goBack = () => {
    setCurrent((pre) => (pre - 1 + images.length) % images.length)
  }
  const next = (current + 1) % images.length
  const back = (current - 1 + images.length) % images.length

  const basePath = 'mouses'
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center items-center">
      <div className="md:flex md:flex-row h-auto w-[90%]">
        <div className="w-full md:w-[50%] flex flex-col justify-between">
          <h2 className="text-red-500">{header}</h2>
          <p>{description}</p>
          <div className="flex flex-row w-full h-[30%] md:h-[60%] items-end justify-center">
            {boxs.map((box, index) => {
              return (
                <img
                  src={box}
                  alt={`box image ${index}`}
                  className="md:w-[50%] md:h-[90%] w-[45%]"
                  key={index}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-between p-2">
          <div className="flex flex-row items-center w-full py-5 justify-center">
            <button
              className="cursor-pointer rounded-[50%] p-2 px-3 text-4xl"
              onClick={goBack}
            >
              &lt;
            </button>
            <div className="opacity-20 scale-40 md:scale-50 transform translate-x-[15px] md:translate-x-[10px]">
              <img src={images[back]} alt={`previous image ${back}`} className="w-[80%] h-[80%]" />
            </div>
            <div className="scale-100 md:scale-90">
              <img
                src={images[current]}
                alt={`current image ${current}`}
                className="w-[80%] h-[80%]"
              />
            </div>
            <div className="opacity-20 scale-40 md:scale-50 transform -translate-x-[15px] md:-translate-x-[10px]">
              <img src={images[next]} alt={`next image ${next}`} className="w-[80%] h-[80%]" />
            </div>
            <button
              className="cursor-pointer text-4xl"
              onClick={goNext}
            >
              &gt;
            </button>
          </div>
          <div className="flex flex-row w-full gap-1 font-bold mt-5">
            <button
              className="self-end p-3 cursor-pointer border hover:border-black hover:text-black text-red-600 w-full"
              onClick={() => navigate(`/${basePath}/MarvoFitpro`)}
            >
              Learn more...
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductStageDetail