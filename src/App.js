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
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/whatsapp" element={<WhatsappBot />} />
          <Route path="Auth" element={<AutOutlet />}>
            <Route index element={<LoginPage />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="restpassword" element={<RestPassword />} />
          </Route>

          <Route path="Dashboard" element={<Dashboard />}>
            <Route index element={<OrdersPage />} />
            <Route path="RecentWork" element={<RecentsDesign />} />
          </Route>
          <Route index element={<Test />} />
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
