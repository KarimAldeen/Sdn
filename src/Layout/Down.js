import React from 'react'
import { Link } from 'react-router-dom'
import H_P from '../image/Laptop/H_P.png'
import S_P from '../image/Laptop/S_P.png'
// import H_M from '../image/mobile/HomeMobile.png'
const Down = () => {
 
 
// function MouseEnter(event){
//   event.target.src = "laptopk.png"
//   event.target.className="Down_Item LapHover"
// }
// function MouseLeave(event){
//   event.target.src=`${H_P}`
//   event.target.className="Down_Item"
// }

  return (
    <div className='Down' id='Down'>
      <div className='Down_Items'>
      {/* <Link onMouseEnter={(event) => MouseEnter(event)} onMouseLeave={(event) => MouseLeave(event)}> */}
      <Link >

      <picture>
        {/* <source media="(min-height: 824px) and (max-width: 924px)" srcSet={H_M} alt='' />
        <source media='(max-width : 800px) and (min-height: 600px)' srcSet={H_M} alt='' /> */}
        <img className='Down_Item' id='Laptop1' src={H_P} alt=''  />
      </picture>       </Link>
    
      <Link>
      <picture>
        {/* <source media="(min-height: 824px) and (max-width: 924px)" srcSet={H_M} alt='' />
        <source media='(max-width : 800px) and (min-height: 600px)' srcSet={H_M} alt='' /> */}
        <img className='Down_Item' id='Laptop2' src={S_P} alt=''  />
      </picture>    
         </Link>
      <Link>
      <picture>
        {/* <source media="(min-height: 824px) and (max-width: 924px)" srcSet={H_M} alt='' />
        <source media='(max-width : 800px) and (min-height: 600px)' srcSet={H_M} alt='' /> */}
        <img className='Down_Item' id='Laptop3' src={H_P} alt=''  />
      </picture>    
         </Link>
      <Link >
      <picture>
        {/* <source media="(min-height: 824px) and (max-width: 924px)" srcSet={H_M} alt='' />
        <source media='(max-width : 800px) and (min-height: 600px)' srcSet={H_M} alt='' /> */}
        <img className='Down_Item' id='Laptop4' src={S_P} alt=''  />
      </picture>    
         </Link>

</div>
    </div>
  )
}

export default Down