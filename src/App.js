import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import WorkOut from "./components/WorkOut";
import Nutration from "./components/Nutration";
import Footer from "./components/Footer";
import ShopI from "./components/ShopI";
import Subsci from "./components/Subsci";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Review from "./components/Review";

function App() {
  return (
    <div className="App text-white bg-black  ">
      <div className="  ">
        <Nav />
      </div>
      <div>
        <Main />
        <WorkOut />
        <Nutration />
        <About/>
        <Subsci />
        <Gallery/>
        <Review/>
        <ShopI />
        <Footer />
      </div>
    </div>
  );
}

export default App;
