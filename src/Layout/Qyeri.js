import { useEffect } from 'react'
import BGM from '../image/Home/BGM.png'; import BG from '../image/Home/BG.png';
import H_M from '../image/mobile/HomeMobile.png';
import H_P from '../image/Laptop/H_P.png'; import S_P from '../image/Laptop/S_P.png';
import AllMidImg from '../image/Services/1234.svg' 
import OneMidImg from '../image/Services/1.svg' 

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
            if (Windows <= .7) {console.log(".7")
                Bg.src = BGM ; Body.classList= 'Tap BigTap BigMobile'
                Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                MidImg.src = AllMidImg

            }
            else if ((Windows <= 1) && (Windows >= .7)) { console.log("1")
                Body.classList= 'Tap BigTap';  Bg.src = BGM
                Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                if(Name === "Services"){
                MidImg.src = AllMidImg
                    console.log('ibrahim')
                }

            }
            else if (Windows <= 1.2) { console.log("1.2")
                Body.classList= 'Tap'; Bg.src = BGM
                Laptop1.src = H_P; Laptop2.src = S_P; Laptop3.src = H_P; Laptop4.src = S_P;
                if(Name === "Services"){
                MidImg.src = OneMidImg

                }

            }
            else if (Windows <= 1.5) { console.log("1.5")
                Body.classList= 'BigLap'; Bg.src= BG
                Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
                MidImg.src = OneMidImg

                
            }
            else { console.log("else")
                Body.classList= ''; Bg.src= BG
                Laptop1.src = H_P; Laptop2.src = S_P; Laptop3.src = H_P; Laptop4.src = S_P;
                if(Name === "Services"){
                    MidImg.src = OneMidImg
                    }
              
            }
        }
        handleResize()

    }, [])

}

export default Qyeri