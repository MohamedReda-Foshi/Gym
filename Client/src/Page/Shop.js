import React from "react";

import Item from "../components/Item";
import Sideshow from "../components/Sideshow";
import Filters from "../components/Filters";
import ShopI from "../components/ShopI";

function Shop() {
  return (
    <div className=" py-16 ">
      <div className="    ">
        <div>
          <Sideshow />
        </div>

  {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <div className="mt-8 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>

    <div className="mt-4  lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
     
    <div className="lg:col-span-1 ">

     <Filters/>
    </div>

      <div className="lg:col-span-3 bg-black">
          <ShopI/>
          <ShopI/>
          <ShopI/>
          <ShopI/>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}

export default Shop;
