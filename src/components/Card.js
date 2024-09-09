import React from 'react'
//import { IoStarSharp } from "react-icons/io5";
function Card(props) {
  return (
    <div className='m-4'>
         <div className="rounded-lg  border-2 shadow-lg shadow-red-500/20 p-7  ">

<div className="flex justify-center items-center gap-4 py-3">
    <div className=" rounded-full flex ">

        <img className="rounded-full object-cover w-20 h-20" src="/resize.jpg"   alt="" />
    </div>
    
    <div className="flex font-medium">
        <h3> {props.Name}</h3>
    </div>
</div>

    


<div className="flex justify-between py-">

<div  className="flex ">
         
    <div className=" dark:outline-white" style={{color: 'black '}}>
    
    </div>

</div>   

</div>


<div className=" font-light">
        {props.Review}
        </div>




</div>
    </div>
  )
}

export default Card