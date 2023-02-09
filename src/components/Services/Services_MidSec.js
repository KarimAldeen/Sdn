import React from 'react'
import Img from '../../image/Services/1.svg'
import Img2 from '../../image/Services/2.svg'
import Img3 from '../../image/Services/3.svg'
import Img4 from '../../image/Services/4.svg'

const Services_MidSec = () => {
  return (
    <div className='Services_Mid' id='Services_Mid'>
              <div className='Mid_Items'>

      <div className='Mid_Item' >
          <img src={Img} id='Mid_Item'  alt='' />
        </div>
        <div className='Mid_Item Mid_Items2'>
        <img src={Img2} alt='' />

        </div>
      </div>
      <div className='Mid_Items Mid_Items2'>
        <div className='Mid_Item'>
        <img src={Img3} alt='' />

        </div>
        <div className='Mid_Item'>
        <img src={Img4} alt='' />

        </div>
      </div>



    </div>
  )
}

export default Services_MidSec