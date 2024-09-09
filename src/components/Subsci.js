import React from 'react';
import Pricing from './Pricing';

function Subsci(props) {
  return (
    <div className='flex flex-col md:flex-row items-center  justify-around'>
        <Pricing price="30" Tilprice="Basic"/>
        <Pricing price="60" Tilprice="Pro"/>
        <Pricing price="100" Tilprice="Vip"/>
    </div>
  )
}

export default Subsci