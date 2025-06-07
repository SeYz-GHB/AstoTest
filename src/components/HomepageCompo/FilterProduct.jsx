import React, { useEffect, useState } from 'react';
import { BsFillUsbPlugFill } from "react-icons/bs";
import { GiJackPlug, GiUsbKey } from "react-icons/gi";
import { FaBluetooth } from "react-icons/fa6";
import MousesList from '../MouseCompo/MousesList';

const iconMap = {
  wire: <GiJackPlug />,
  usb: <BsFillUsbPlugFill />,
  receiver: <GiUsbKey />,
  bluetooth: <FaBluetooth />,
};

const FilterProduct = ({ datas }) => {

  const [stock, setStock] = useState(datas);

  useEffect(() => {
    const usbProducts = datas.filter((data) =>
      data.features.connection.includes('wired')
    ).slice(0, 5);
    setStock(usbProducts);
  }, [datas]);

  return (
    <div>
      <MousesList datas={stock} basePath='mouses' />
    </div>
  );
};

export default FilterProduct;
