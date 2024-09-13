import React from 'react'

function ItemMenu() {
  return (
    <div>
        <div>

        </div>
        <div>
            <ul>
                <div>
                    <div></div>
                    <form>
                        <input type='checkbox'/> Close
                        <input type='checkbox'/> Siplament
                        <input type='checkbox'/> Sport
                    </form>
                </div>
                <form >
                <h2>Filter</h2>
                <div className='flex-col'>

                    <input type='range'/> Close
                    <input type='checkbox'/> Siplament
                    <input type='checkbox'/> Sport
                </div>
                </form>
            </ul>
        </div>
    </div>
  )
}

export default ItemMenu