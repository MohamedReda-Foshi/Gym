import React from "react";

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
              <li className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Home
              </li>
              <li className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Nutrition
              </li>
              <li className="my-2 py-4 mx-4 items-center hover:text-red-500 cursor-pointer">
                Work Out
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex-row px-3">
              <li>
                <a href="home">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
