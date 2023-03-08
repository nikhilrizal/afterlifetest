import React, { useRef } from "react";

import { MdCancel } from "react-icons/md";
import MenuItems from "./MenuItems";

const MenuComp = () => {

  const ref = useRef()

  const toogleSildBar = () => {

    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.remove('translate-x-full')
    }



    else if (!ref.current.classList.contains('translate-x-full'))
      ref.current.classList.remove('translate-x-0')
    ref.current.classList.remove('translate-x-full')


  }
  return (
    <>

    </>
  );
};

export default MenuComp;
