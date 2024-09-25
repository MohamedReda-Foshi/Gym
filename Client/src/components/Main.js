import React from "react";
import backgroundvideo from "../nutrationV.mp4";


function Main() {
  return (
    <div className="relative py-4 overflow-hidden h-screen">
      {/* Container for text and video */}
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        {/* Text content */}
        <div className="z-10 text-center my-36 text-5xl py-5">
          <h1 className="font-bold">Transform Your</h1>
          <h1 className="text-red-500 font-bold">Body,</h1>
          <h1 className="font-bold">Transform</h1>
          <h1 className="font-bold">Yourself</h1>
        </div>

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={backgroundvideo}
          muted
          loop
          autoPlay
          playsInline
        ></video>
      </div>
    </div>
  );
}

export default Main;
