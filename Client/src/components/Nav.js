import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed w-full">
      <nav role="navigation" className="z-20    px-5 bg-black  border-b-2 border-white   ">
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
              <Link className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Work Out
              </Link>
            </ul>
          </div>

          <div>
            <ul className="flex-row px-3">
              <Link
                to="/Shop"
              >
               Shop
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
