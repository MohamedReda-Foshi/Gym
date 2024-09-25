import React from "react";
import Button from "./Button";

function Additem() {
  return (
    <div className="rounded-2xl justify-between m-5 border-2 flex  items-center  ">
      <div className="flex">
        <div>
          <img src="/about.png" className="w-40 h-11" alt="1" />
        </div>
        <div className="py-5">
          <div>
            <h3>Product name</h3>
          </div>
          <div>
            <p>price</p>
          </div>
        </div>
      </div>
      <div className="flex-row px-3 gap-2">
        
        <Button button="+" />
        <Button button="-" />
      </div>
    </div>
  );
}

export default Additem;
