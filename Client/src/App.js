
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import Shop from "./Page/Shop";
import LoginP from "./Page/LoginP";
import { Route, Routes } from "react-router-dom";
import Gympg from "./Page/Gympg";
import BoxCard from "./Page/BoxCard";
import Sinup from "./Page/Sinup";
import Adminpanel from "./Page/Adminpanel";
import ProductPage from "./Page/ProductPage";
import CreateProduct from "./components/CreateProduct";
import Newadmin from "./Page/Newadmin";
import Adminlogin from "./Page/Adminlogin";



const MyFormComponent = () => {


    return (
        <div className="App text-white   ">
        <div className="  ">
          <Nav />
        </div>
      
        <div>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path="/Shop" element={<Shop/>} />
              <Route path="/Gym" element={<Gympg/>} />
              <Route path="/BoxCard" element={<BoxCard/>} />
              <Route path="/LoginP" element={<LoginP/>} />
              <Route path="/Sinup" element={<Sinup/>} />
              <Route path="/ProductPage" element={<ProductPage/>} />
              <Route path="/Adminpanel" element={<Adminpanel/>} />
              <Route path="/CreateProduct" element={<CreateProduct/>} />
              <Route path="/admin" element={<Adminlogin/>} />
              <Route path="/Newadmin" element={<Newadmin/>} />

              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
        </div>
      
        <div>
          <Footer />
        </div>
      </div>
    );
};

export default MyFormComponent;
