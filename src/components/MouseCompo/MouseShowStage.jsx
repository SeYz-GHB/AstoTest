import React from 'react'
import ProductStageDetail from '../ProductStage'
import MARVO_SH1 from '../../assets/MouseImages/SHOWSTAGE/MARVO_FITPROSHT1.jpg'
import MARVO_SH2 from '../../assets/MouseImages/SHOWSTAGE/MARVO_FITPROSHT2.jpg'
import MARVO_SH3 from '../../assets/MouseImages/SHOWSTAGE/MARVO_FITPROSHT3.jpg'
import MARVO_SH4 from '../../assets/MouseImages/SHOWSTAGE/MARVO_FITPROSHT4.jpg'
import MARVO_SH5 from '../../assets/MouseImages/SHOWSTAGE/MARVO_FITPROSHT5.jpg'
const MouseShowStage = () => {
     const images = [MARVO_SH1,MARVO_SH2,MARVO_SH3];
     const boxs = [MARVO_SH4,MARVO_SH5];
    
  return (
    <div>
        
        <ProductStageDetail
            header="MARVO FIT PRO"
            description="The MARVO FIT PRO is engineered for gamers who demand performance and precision. With its adjustable DPI settings up to 10,000, triple connection modes (Bluetooth, 2.4G, and Wired), and RGB lighting, this mouse delivers both style and substance. Enjoy long-lasting performance with a built-in rechargeable battery and customizable buttons for ultimate control in every game. Perfect for competitive gaming or daily productivity."
            images = {images}
            boxs = {boxs}

        />

    
      {/* <img src={MARVO_SH1} alt="" />
      <img src={MARVO_SH2} alt="" />
      <img src={MARVO_SH3} alt="" /> */}

    
    </div>
  )
}

export default MouseShowStage
