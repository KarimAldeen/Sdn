import React from 'react'
import { Link } from 'react-router-dom'

// import H_M from '../image/mobile/HomeMobile.png'
import Laptop_Anim from '../image/Anim/LapHome_Anim.svg'
import { useNavigate } from "react-router-dom"

const Down = () => {
  const navigate = useNavigate()

 function Clicked(){
  navigate(`/?event=Anim`)
 
 }
 function Clicked2(){
  navigate(`/services?event=Anim`)
 
 }
 function Clicked3(){
  navigate(`/Team?event=Anim`)
 
 }
 function Clicked4(){
  navigate(`/Contact?event=Anim`)
 
 }
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
      <div className='Down_Items' >
        <img className='Down_Item' id='Laptop1' src="" alt='' onClick={Clicked}  />
 
        <img className='Down_Item' id='Laptop2' src="" alt='' onClick={Clicked2} />
         
    
        <img className='Down_Item' id='Laptop3' src="" alt='' onClick={Clicked3} />
       
        <img className='Down_Item' id='Laptop4' src="" alt='' onClick={Clicked4} />

</div>
    </div>
  )
}

export default Down