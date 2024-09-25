import React from "react";

import Item from "../components/Item";
import Sideshow from "../components/Sideshow";

function Shop() {
  return (
    <div className=" py-16 ">
      <div className="    ">
        <div>
          <Sideshow />
        </div>

        <div className=" w-full">
          <div className="flex-row">
            <Item nameItem="Portine" price="30" infoItem="text" Storage="30" />
            <Item nameItem="Portine" price="30" />
            <Item nameItem="Portine" price="30" />
          </div>
          <div className="flex-row">
            <Item nameItem="Portine" price="30" infoItem="text" Storage="30" />
            <Item nameItem="Portine" price="30" />
            <Item nameItem="Portine" price="30" />
          </div>
          <div className="flex-row">
            <Item nameItem="Portine" price="30" infoItem="text" Storage="30" />
            <Item nameItem="Portine" price="30" />
            <Item nameItem="Portine" price="30" />
          </div>
          <div className="flex-row">
            <Item nameItem="Portine" price="30" infoItem="text" Storage="30" />
            <Item nameItem="Portine" price="30" />
            <Item nameItem="Portine" price="30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
