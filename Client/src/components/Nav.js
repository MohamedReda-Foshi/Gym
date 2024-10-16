import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaCartShopping } from "react-icons/fa6";
function Nav() {


const [HaMenu,setHaMenu]=useState(false);
const [open,setopen]=useState(<p>open</p>);

const  handClick=()=>{

  
  if(HaMenu){
    setopen("open")
  }else{
    setopen("close")
    
  }
  setHaMenu(!open)
}

  return (
    <div className=" z-20">
      <div className="sm:hidden">
          <div className="">
            <button className="" onClick={handClick}>
              
                    {setHaMenu}
            </button>

          </div>

      </div>
    <div className="hidden md:block">

    <div className=" lg: fixed w-full z-50 bg-transparent ">

      
      <nav role="navigation" className="  px-5 bg-zinc-800    ">
        <div className="flex-row justify-between items-center ">
          <div className="cursor-pointer">
            <h2>logo</h2>
          </div>
          <div className="justify-around px-6">
            <ul className="flex flex-row justify-between">
              <Link 
                to="/"
              className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Home
              </Link>
              <Link 
               to="/Nutration"

              className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Nutration
              </Link>
              <Link 
              to="/Shop"
              className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Shop

              </Link>
              <Link 
                to ="/Gym"
                className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Gym
              </Link>
            </ul>
          </div>

          <div className="flex-row  items-center">
            <ul className="flex-row px-3 ">
              <Link
                to="/LoginP"
              >
                <Button button="Login"></Button>
               
              </Link>
            </ul>
            <ul className=" px-3">
              <Link
                to="/BoxCard"
              >
               <FaCartShopping size={25} className="hover:text-red-500" />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
    </div>
  );
}

export default Nav;
