import React from 'react'

import Item from '../components/Item'
import ItemMenu from '../components/ItemMenu'

function Shop() {
  return (
    <div className='flex-col py-24'>
      <div className='flex-row'>

        <div className='bg-red-500' name="selecte object">
        <h2 > 
                    <ItemMenu/>
                  </h2>
        </div>

        <div className='flex-row'>
        <Item nameItem="Portine" price="30"/>
        <Item nameItem="Portine" price="30"/>
        <Item nameItem="Portine" price="30"/>
        </div>
      </div>

        
    </div>
  )
}

export default Shop;