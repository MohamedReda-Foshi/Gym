import React from 'react'
import Card from './Card'

function Review() {
  return (
    <div className='flex  flex-col px-4 md:flex-row justify-center'>
        <Card Name="reda" Review="the gym is amazing " />
        <Card Name="Person" Review="the machine are very good " />
        <Card Name="reda" Review="the gym is so " />

    </div>
  )
}

export default Review