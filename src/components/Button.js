import React from "react";

function Button(props) {
  return (
    <div>
      
      <button className="bg-red-500 hover:bg-red-700 px-5 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
        {props.button}
      </button>
    </div>
  );
}

export default Button;
