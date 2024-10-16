import React from 'react'
import Galleryimg from './Galleryimg'

function Gallery() {
  return (
    <div className='flex-col flex  p-6 justify-between'>
    <div className='text-5xl font-bold py-4 '>
      Gallery
    </div>
        <div className='  flex-row py-3  '>

          <Galleryimg/>
          <Galleryimg/>
          <Galleryimg/>
        </div>
        
        <div className=' flex-row py-4 '>
        <Galleryimg/>
        <Galleryimg/>
        <Galleryimg/>
        
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Gallery