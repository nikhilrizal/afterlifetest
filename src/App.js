import "./styles/global.css";
import WhatsappBot from "./component/WhatsappBot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import Dashboard from "./pages/Customer/Dashoard";
import Signup from "./pages/Auth/Signup";
import OrdersPage from "./pages/Customer/Orders";
import RestPassword from "./pages/Auth/forgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test from "./pages/test";
import RecentsDesign from "./pages/Customer/RecentsDesign";
import AutOutlet from "./pages/Auth/AutOutlet";
import RegistrationModal from "./component/utils/Modals/Registration";
import SingleProductModal from "./component/utils/Modals/SingleProductModal";
import Cookies from "./component/utils/Modals/Cookies";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(true) 
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/whatsapp" element={<WhatsappBot />} />
          <Route  path='Auth' element={<AutOutlet />}>
            <Route  index element={<LoginPage />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="restpassword" element={<RestPassword />} />
          </Route>
          <Route path="Dashboard" element={<Dashboard />}>
            <Route index element={<OrdersPage />} />
            <Route path="RecentWork" element={<RecentsDesign />} />
            <Route path="Customer" element={<RecentsDesign />} />
          </Route>
          <Route index  element={<Test />} />
          <Route path='modal1' element={<RegistrationModal  isOpen={isOpen} setIsOpen={setIsOpen}/>} />

          <Route path='modal2' element={<Cookies isOpen={isOpen} setIsOpen={setIsOpen}/>} />
          <Route path='modal3' element={<SingleProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>} />
          
          <Route
            
            path="*"
  
            element={<div className="text-red-400 ">NO PAGE DOUND</div>}
         
         />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
