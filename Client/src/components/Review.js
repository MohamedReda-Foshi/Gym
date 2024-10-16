import React from "react";
import Card from "./Card";

function Review() {
  return (
    <div className="flex  flex-col px-4  ">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

  
        <div>        
            <div className="max-w-xl flex-col">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Read trusted reviews from our customers
              </h2>

                <p className=" max-w-lg leading-relaxed text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur praesentium natus sapiente commodi.
              </p>
            </div>

            <div className="flex-col lg:flex-row flex items-center justify-center">
              <Card Name="reda" Review="the gym is amazing " />
              <Card Name="Person" Review="the machine are very good " />
              <Card Name="reda" Review="the gym is so " />
            </div>
            
          </div>
     

    </div>
  );
}

export default Review;
