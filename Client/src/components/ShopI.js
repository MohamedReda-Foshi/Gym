import React from "react";
import Item from "./Item";

function ShopI() {
  return (
    <div className="flex-col justify-center">
      <div>
        <h1>By your supplement</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center ">
        <Item nameItem="Protien" price="90" />
        <Item nameItem="Creiaten" price="60" />
        <Item nameItem="Creiaten" price="30"/>
      </div>
    </div>
  );
}

export default ShopI;
