import React from "react";

import Main from "../components/Main";

import WorkOut from "../components/WorkOut";
import Nutration from "../components/Nutration";
import ShopI from "../components/ShopI";
import Subsci from "../components/Subsci";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Review from "../components/Review";

function Home() {
  return (
    <div>
        
<Main />

<WorkOut />
<Nutration />
<About/>
<Subsci />
<Gallery/>
<Review/>
<ShopI />

    </div>
  )
}

export default Home;