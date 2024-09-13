import "./App.css";
import * as React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import NotFond from "./Page/NotFond";
import Shop from "./Page/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App text-white bg-black  ">
      <div className="  ">
        <Nav />
      </div>

      <div>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} errorElement={<NotFond/>} />
            <Route path="/Shop" element={<Shop/>} />
          </Route>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
