
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




const MyFormComponent = () => {


    return (
        <div className="App text-white bg-black  ">
        <div className="  ">
          <Nav />
        </div>
      
        <div>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} errorElement={<NotFound />} />
              <Route path="/Shop" element={<Shop/>} />
              <Route path="/Gym" element={<Gympg/>} />
              <Route path="/BoxCard" element={<BoxCard/>} />
              <Route path="/LoginP" element={<LoginP/>} />
              <Route path="/Sinup" element={<Sinup/>} />v
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
