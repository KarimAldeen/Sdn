import { useEffect } from 'react'
import BGM from '../image/Home/BGM.png'
import BG from '../image/Home/BG.png'
import H_M from '../image/mobile/HomeMobile.png'
import H_P from '../image/Laptop/H_P.png'
import S_P from '../image/Laptop/S_P.png'
const Qyeri = () => {
    useEffect(() => {
        handleResize()
        function handleResize() {
            const Width = window.innerWidth / 100 ;
            const Height = window.innerHeight / 100 ;
           
            console.clear()
            
            console.log(Width / Height )
             
            if((Width / Height <= 1) && (Width / Height >= .7) ){
                console.log("As")
                document.body.classList.add("Tap")

                document.body.classList.add("BigTap")
                document.getElementById("Laptop1").src = H_M ;
                document.getElementById("Laptop2").src = H_M ;
                document.getElementById("Laptop3").src = H_M ;
                document.getElementById("Laptop4").src = H_M ;

            }
            
            else if(Width / Height <= 1.2 ){
                console.log("sos")
                document.body.classList.add("Tap")
                document.body.classList.remove("BigTap")
                document.getElementById("BG").src= BGM 
                document.getElementById("Laptop1").src = H_P ;
                    document.getElementById("Laptop2").src = S_P ;
                    document.getElementById("Laptop3").src = H_P ;
                    document.getElementById("Laptop4").src = S_P ;
            }
            else if(Width / Height <= 1.5 ){
                document.body.classList.remove("BigTap")
                document.body.classList.remove("Tap")
                document.body.classList.add("BigLap")

                document.getElementById("BG").src= BG 
                document.getElementById("Laptop1").src = H_M ;
                document.getElementById("Laptop2").src = H_M ;
                document.getElementById("Laptop3").src = H_M ;
                document.getElementById("Laptop4").src = H_M ;
            }
           
           
            else{
                document.body.classList.remove("Tap")
                document.getElementById("BG").src= BG 
                document.body.classList.add("BigTap")
                    document.getElementById("Laptop1").src = H_P ;
                    document.getElementById("Laptop2").src = S_P ;
                    document.getElementById("Laptop3").src = H_P ;
                    document.getElementById("Laptop4").src = S_P ;

            }

        }
            window.addEventListener('resize', handleResize) 
    },[])
 
}

export default Qyeri