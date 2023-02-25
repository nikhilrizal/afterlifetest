import { useState } from "react";
import Cookies from "../component/utils/Modals/Cookies";
import RegistrationModal from "../component/utils/Modals/Registration";
import SingleProductModal from "../component/utils/Modals/SingleProductModal";
export default function Test() {
  const [isOpen, setIsOpen] = useState(true) 

  return (
    <>  
    
       
            <SingleProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>

      
    </>
  );
}
