import { useEffect } from 'react'
import BGM from '../image/Const/BGM.png'; import BG from '../image/Const/BG.png';
import H_M from '../image/mobile/HomeMobile.png';
import H_P from '../image/Laptop/H_P.png'; import S_P from '../image/Laptop/S_P.png';
import Services from '../image/Services/Services.svg' 
import Service from '../image/Services/Service.svg' 
import Homes from '../image/Home/Homes.svg' 
import Home from '../image/Home/Home.svg' 
import Homess from '../image/Home/Homess.svg' 

const Qyeri = ({Name}) => {   
   
    useEffect(() => {
        function handleResize() {
            window.addEventListener('resize', handleResize)
            let Windows = window.innerWidth /  window.innerHeight ;
            let MidImg = document.getElementById("Mid_Item");
            let Laptop1 = document.getElementById("Laptop1"); let Laptop2 = document.getElementById("Laptop2");
            let Laptop3 = document.getElementById("Laptop3");let Laptop4 = document.getElementById("Laptop4");
            let Body = document.body;let Bg = document.getElementById("BG")
            console.clear() ; console.log(Windows)

            if (Windows <= .5) {console.log(".5","Mobile")
           Bg.src = BGM ; Body.classList= 'Tap BigTap BigMobile Mobile'
            Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
            
            if(Name === "Home"){
                MidImg.src = Homess
                }
        }
           else if (Windows <= .7) {console.log(".7","BigMobile")
                Bg.src = BGM ; Body.classList= 'Tap BigTap BigMobile'
                Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                if(Name === "Services"){
                    MidImg.src = Services
                }
                if(Name === "Home"){
                    MidImg.src = Homes
                    }
            }
            else if ((Windows <= 1) && (Windows >= .7)) { console.log("1","BigTap")
                Body.classList= 'Tap BigTap';  Bg.src = BGM
                    Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                if(Name === "Services"){
                MidImg.src = Services
                }
                if(Name === "Home"){
                    MidImg.src = Homes
                    }

            }
            else if (Windows <= 1.2) { console.log("1.2","Tap")
                Body.classList= 'Tap'; Bg.src = BGM
                Laptop1.src = H_P; Laptop2.src = S_P; Laptop3.src = H_P; Laptop4.src = S_P;
                if(Name === "Services"){
                MidImg.src = Service

                }
                if(Name === "Home"){
                    MidImg.src = Home
                    }
            }
            else if (Windows <= 1.5) { console.log("1.5","BigLap")
                Body.classList= 'BigLap'; Bg.src= BG
                Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                
                if(Name === "Services"){
                    MidImg.src = Service
                    }
                    if(Name === "Home"){
                        MidImg.src = Home
                        }
                
            }
               else if (Windows >= 2) { console.log("2", "HeadLap")
                Body.classList= 'HeadLap'; Bg.src= BG
                Laptop1.src = H_P; Laptop2.src = S_P; Laptop3.src = H_P; Laptop4.src = S_P;
              
                    if(Name === "Home"){
                        MidImg.src = Home
                        }
                
            }
            else { console.log("else")
                Body.classList= ''; Bg.src= BG
                Laptop1.src = H_P; Laptop2.src = S_P; Laptop3.src = H_P; Laptop4.src = S_P;
                if(Name === "Services"){
                    MidImg.src = Service
                    }
                    if(Name === "Home"){
                        MidImg.src = Home
                        }
              
            }
        }
        handleResize()

    }, [Name])

}

export default Qyeri