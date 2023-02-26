import React from 'react'
import { useNavigate } from "react-router-dom"

const Down = ({Name}) => {
  const navigate = useNavigate()

 function Clicked(){
  if(Name !== "Home"){

     document.getElementById("Hiden").classList.add("Hiden")
    document.getElementById("Hiden2").classList.add("Hiden")
    document.getElementById("Laptop1").classList.add("Lap_Tran")
  const timer = setTimeout(() => {

    document.getElementById("Laptop1").classList.add("Lap_Tran2")

  

  }, 2000);
  const timer2 = setTimeout(() => {
    document.getElementById("Laptop2").classList.add("Hiden")
      document.getElementById("Laptop3").classList.add("Hiden")
      document.getElementById("Laptop4").classList.add("Hiden")
    }, 2800);
    const timer3 = setTimeout(() => {
      document.getElementById("Laptop1").classList.add("Lap_Tran3")

  
    }, 3300);
  const timer4 = setTimeout(() => {
  
    navigate(`/?event=Anim`)

  }, 3600);
  return () => clearTimeout(timer,timer2,timer3,timer4);
  }
   
 
 }
 function Clicked2(){
  if(Name !== "Services"){

    document.getElementById("Hiden").classList.add("Hiden")
   document.getElementById("Hiden2").classList.add("Hiden")
   document.getElementById("Laptop2").classList.add("Lap_Tran")
 const timer = setTimeout(() => {

   document.getElementById("Laptop2").classList.add("Lap_Tran2")

 

 }, 2000);
 const timer2 = setTimeout(() => {
   document.getElementById("Laptop1").classList.add("Hiden")
     document.getElementById("Laptop3").classList.add("Hiden")
     document.getElementById("Laptop4").classList.add("Hiden")
   }, 2800);
   const timer3 = setTimeout(() => {
     document.getElementById("Laptop2").classList.add("Lap_Tran3")

 
   }, 3300);
 const timer4 = setTimeout(() => {
 
   navigate(`/services?event=Anim`)

 }, 3600);
 return () => clearTimeout(timer,timer2,timer3,timer4);
 }
 }
 function Clicked3(){
  if(Name !== "Team"){

    document.getElementById("Hiden").classList.add("Hiden")
   document.getElementById("Hiden2").classList.add("Hiden")
   document.getElementById("Laptop3").classList.add("Lap_Tran")
 const timer = setTimeout(() => {

   document.getElementById("Laptop3").classList.add("Lap_Tran2")

 

 }, 2000);
 const timer2 = setTimeout(() => {
   document.getElementById("Laptop2").classList.add("Hiden")
     document.getElementById("Laptop1").classList.add("Hiden")
     document.getElementById("Laptop4").classList.add("Hiden")
   }, 2800);
   const timer3 = setTimeout(() => {
     document.getElementById("Laptop3").classList.add("Lap_Tran3")

 
   }, 3300);
 const timer4 = setTimeout(() => {
 
   navigate(`/team?event=Anim`)

 }, 3600);
 return () => clearTimeout(timer,timer2,timer3,timer4);
 }
  
 }
 function Clicked4(){
  if(Name !== "Contact"){

    document.getElementById("Hiden").classList.add("Hiden")
   document.getElementById("Hiden2").classList.add("Hiden")
   document.getElementById("Laptop4").classList.add("Lap_Tran")
 const timer = setTimeout(() => {

   document.getElementById("Laptop4").classList.add("Lap_Tran2")

 

 }, 2000);
 const timer2 = setTimeout(() => {
   document.getElementById("Laptop2").classList.add("Hiden")
     document.getElementById("Laptop3").classList.add("Hiden")
     document.getElementById("Laptop1").classList.add("Hiden")
   }, 2800);
   const timer3 = setTimeout(() => {
     document.getElementById("Laptop5").classList.add("Lap_Tran3")

 
   }, 3300);
 const timer4 = setTimeout(() => {
 
   navigate(`/contact?event=Anim`)

 }, 3600);
 return () => clearTimeout(timer,timer2,timer3,timer4);
 }
 }

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