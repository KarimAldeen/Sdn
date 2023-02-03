import React, { useEffect } from 'react'
import BGM from '../image/Home/BGM.png'
import BG from '../image/Home/BG.png'
import H_M from '../image/mobile/HomeMobile.png'

const Qyeri = () => {
    useEffect(() => {
        handleResize()
        function handleResize() {
            const Width = window.innerWidth / 100 ;
            const Height = window.innerHeight / 100 ;
           
            console.clear()
            if(document.body.classList[0] === "Tap"){
                console.log("do");
                
            }
            console.log(Width / Height )
            
             if(Width / Height <= 1){
                console.log("mom")


            }
            if(Width / Height <= 1.2 ){
                console.log("sos")
                document.body.classList.add("Tap")
                document.body.classList.remove("Lap")
                document.getElementById("BG").src= BGM 
            }
           
            else{
                document.body.classList.remove("Tap")
            }

        }
            window.addEventListener('resize', handleResize) 
    },[])
 
}

export default Qyeri