import React from "react";
import Button from "./Button"
function Item(props) {
  return (
    <div>
      <div className=" rounded   m-11 max-w-80">
        <div className="  ">
          <div className=" font-semibold text-center rounded-xl border-2 p-3 ">
            <img
              className="mb-3 w-full h-50 rounded shadow-lg mx-auto hover:scale-110 "
              herf
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="product designer"
            />
            <h1 className="text-lg text-white"> {props.nameItem} </h1>
              <h3 className="text-2xl">{props.price} $</h3>
            <p className="text-xs text-gray-400 mt-4">
              {props.infoItem} 
            </p>
            <p className="text-gray-400 text-xs flex flex-row-reverse  my-3">
              {props.storage}/50
            </p>
            <Button button="Add to "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
