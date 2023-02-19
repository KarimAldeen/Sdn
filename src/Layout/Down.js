import React from 'react'
import { useNavigate } from "react-router-dom"

const Down = ({Name}) => {
  const navigate = useNavigate()

 function Clicked(){
  if(Name != "Home"){
    // document.getElementById("Laptop1").src = Home_Laptop

     document.getElementById("Hiden").classList.add("Hiden")
    document.getElementById("Hiden2").classList.add("Hiden")
    document.getElementById("Laptop1").classList.add("Lap_Tran")

  // navigate(`/?event=Anim`)
  const timer = setTimeout(() => {

    document.getElementById("Laptop1").classList.add("Lap_Tran2")

  

  }, 2000);
  const timer2 = setTimeout(() => {
    document.getElementById("Laptop2").classList.add("Hiden")
      document.getElementById("Laptop3").classList.add("Hiden")
      document.getElementById("Laptop4").classList.add("Hiden")
    }, 2500);
    const timer3 = setTimeout(() => {
      document.getElementById("Laptop1").classList.add("Lap_Tran3")

  
    }, 2900);
  const timer4 = setTimeout(() => {
  
    navigate(`/?event=Anim`)

  }, 3000);
  return () => clearTimeout(timer,timer2,timer3,timer4);
  }
   
 
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