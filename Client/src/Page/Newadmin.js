import React from 'react'
import Button from '../components/Button'

function Newadmin() {
  return (
    <div>
 

<div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 lg:py-96">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl text-black">Create a new admin</h1>


  </div>

  <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      

      <div className="relative">
        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
          placeholder="Enter your name"
        />

       
      </div>
    </div>
    <div>
      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div> 
      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
          placeholder="Enter password"
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        
        <Button button='Sign up'></Button>
      </p>

     
    </div>
  </form>
</div>


    </div>
  )
}

export default Newadmin