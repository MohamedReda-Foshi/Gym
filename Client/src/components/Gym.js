import React from 'react'
import Button from './Button'

//coutche
function Gym(props) {
  return (
    <div className=' rounded  my-11 mx-11 max-w-96 '>
    <div className="  ">
      <div className=" font-semibold text-center rounded-3xl border-2 p-10 ">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" herf src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Cotches"/>
        <h1 className="text-lg text-white"> {props.name} </h1>
        <h3 className="text-sm text-gray-400 "> {props.job} </h3>
        <p className="text-xs text-gray-400 mt-4">{props.info} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            
             
              <Button button="Join withe Me"/>
      </div>
  </div>
        

    </div>
  )
}

export default Gym;