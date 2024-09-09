import React from 'react'

function Gallery() {
  return (
    <div className='flex-col flex  p-6 justify-between'>
        <div className='w-1/4  flex-row py-3  '>
          <img src='./about.png' alt='1'/>
          <img src='./about.png' alt='1'/>
          <img src='./about.png' alt='1'/>
        </div>
        
        <div className='w-1/4 flex-row py-4 '>
          <img  className='px-2' src='./about.png' alt='1'/>
          <img src='./about.png' alt='1'/>
          <img src='./about.png' alt='1'/>
        
        </div>
    </div>
  )
}

export default Gallery