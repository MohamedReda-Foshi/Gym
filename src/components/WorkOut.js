import React from 'react'
import Gym from './Gym'

function WorkOut() {
  return (
    <div className='flex flex-col   py-5 '>
          <div>
            <h1 className='text-5xl w-full text-white py-5 font-bold'>Cotches</h1>
          </div>

          <div className='flex flex-col md:flex-row'>
            <Gym name="reda"   job="Work body building "/>
            <Gym name="raian"  job="Power leting work"/>
            <Gym name="foshi"  job="Work body building"/>
          </div>
            
    </div>
  )
}

export default WorkOut