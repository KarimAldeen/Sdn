import { useEffect } from 'react';
import BGMD from '../image/Const/BGMD.png';
import BGD from '../image/Const/BGD.png';
import H_LD from '../image/Laptop/Home_LaptopDM.svg';
import S_LD from '../image/Laptop/Services_LaptopDM.svg';
import T_LD from '../image/Laptop/Team_LaptopDM.svg';
import C_LD from '../image/Laptop/Contact_LaptopDM.svg';
import ServicesDM from '../image/Services/ServicesDM.svg' 
import ServiceDM from '../image/Services/ServiceDM.svg' 
import Homes from '../image/Home/Homes.svg' 
import Home from '../image/Home/Home.svg' 
import Homess from '../image/Home/Homess.svg' 
import TeamsDM from '../image/Team/TeamsDM.svg' 
import TeamDM from '../image/Team/TeamDM.svg' 
import TeamssDM from '../image/Team/TeamssDM.svg'
import ContactsDM from '../image/Contact/ContactsDM.svg' 
import ContactDM from '../image/Contact/ContactDM.svg' 
import ContactssDM from '../image/Contact/ContactssDM.svg'
import BGM from '../image/Const/BGM.png';
 import BG from '../image/Const/BG.png';
import H_M from '../image/mobile/HomeMobile.png';
import H_L from '../image/Laptop/Home_Laptop.svg';
import S_L from '../image/Laptop/Services_Laptop.svg';
import T_L from '../image/Laptop/Team_Laptop.svg';
import C_L from '../image/Laptop/Contact_Laptop.svg';
import Services from '../image/Services/Services.svg' 
import Service from '../image/Services/Service.svg' 
import Teams from '../image/Team/Teams.svg' 
import Team from '../image/Team/Team.svg' 
import Teamss from '../image/Team/Teamss.svg'
import Contacts from '../image/Contact/Contacts.svg' 
import Contact from '../image/Contact/Contact.svg' 
import Contactss from '../image/Contact/Contactss.svg'


const Mood = ({ isdark , Name}) => {

  useEffect(() => {
    function handleResize() {
      window.addEventListener('resize', handleResize)
      let Windows = window.innerWidth /  window.innerHeight ;
      let MidImg = document.getElementById("Mid_Item");
      let Laptop1 = document.getElementById("Laptop1"); let Laptop2 = document.getElementById("Laptop2");
      let Laptop3 = document.getElementById("Laptop3");let Laptop4 = document.getElementById("Laptop4");
      let Body = document.body;let Bg = document.getElementById("BG")
if(isdark === true){
    console.log("1");

  if (Windows <= .5) {console.log(".5","Mobile")
  Bg.src = BGMD ; Body.classList= 'Tap BigTap BigMobile Mobile'
   Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
   
   if(Name === "Home"){
       MidImg.src = Homess
       }
       if(Name === "Services"){
           MidImg.src = ServicesDM
       }
       if(Name === "Team"){
           MidImg.src = TeamssDM
       }
       if(Name === "Contact"){
           MidImg.src = ContactssDM
       }
}
  else if (Windows <= .7) {console.log(".7","BigMobile")
       Bg.src = BGMD ; Body.classList= 'Tap BigTap BigMobile dark'
       Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
       if(Name === "Services"){
           MidImg.src = ServicesDM
       }
       if(Name === "Home"){
           MidImg.src = Homes
           }
           if(Name === "Team"){
               MidImg.src = TeamsDM
           }
           if(Name === "Contact"){
               MidImg.src = ContactsDM
           }
   }
   else if ((Windows <= 1) && (Windows >= .7)) { console.log("1","BigTap dark")
       Body.classList= 'Tap BigTap';  Bg.src = BGMD
           Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
       if(Name === "Services"){
       MidImg.src = ServicesDM
       }
       if(Name === "Home"){
           MidImg.src = Homes
           }

           if(Name === "Team"){
               MidImg.src = TeamsDM
           }
           if(Name === "Contact"){
               MidImg.src = ContactsDM
           }
   }

   else if (Windows <= 1.2) { console.log("1.2","Tap dark")
       Body.classList= 'Tap'; Bg.src = BGMD
       Laptop1.src = H_LD; Laptop2.src = S_LD; Laptop3.src = T_LD; Laptop4.src = C_LD;
       if(Name === "Services"){
       MidImg.src = ServiceDM

       }
       if(Name === "Home"){
           MidImg.src = Home
           }
           if(Name === "Team"){
               MidImg.src = TeamDM
           }
           if(Name === "Contact"){
               MidImg.src = ContactDM
           }
   }
   else if (Windows <= 1.5) { console.log("1.5","BigLap dark")
       Body.classList= 'BigLap'; Bg.src= BGD
       Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
       
       if(Name === "Services"){
           MidImg.src = ServiceDM
           }
           if(Name === "Home"){
               MidImg.src = Home
               }
               if(Name === "Team"){
                   MidImg.src = TeamDM
               }
                if(Name === "Contact"){
               MidImg.src = ContactDM
           }
       
   }
      else if (Windows >= 2) { console.log("2", "HeadLap dark")
       Body.classList= 'HeadLap'; Bg.src= BGD
       Laptop1.src = H_LD; Laptop2.src = S_LD; Laptop3.src = T_LD; Laptop4.src = C_LD;
     
           if(Name === "Home"){
               MidImg.src = Home
               }
               if(Name === "Services"){
                   MidImg.src = ServiceDM
                   }
               if(Name === "Team"){
                   MidImg.src = TeamDM
               }
               if(Name === "Contact"){
                   MidImg.src = ContactDM
               }
       
   }
   else { console.log("else")
       Body.classList= 'dark'; Bg.src= BGD
       Laptop1.src = H_LD; Laptop2.src = S_LD; Laptop3.src = T_LD; Laptop4.src = C_LD;
    
       if(Name === "Services"){
           MidImg.src = ServiceDM
           }
           if(Name === "Home"){
               MidImg.src = Home
               }
                if(Name === "Team"){
               MidImg.src = TeamDM
           }
            if(Name === "Contact"){
               MidImg.src = ContactDM
           }
     
   }
      }
      else{
        console.log("2");

          if (Windows <= .5) {console.log(".5","Mobile")
         Bg.src = BGM ; Body.classList= 'Tap BigTap BigMobile Mobile'
          Laptop1.src = H_M; Laptop2.src = H_M; Laptop3.src = H_M; Laptop4.src = H_M;
          
          if(Name === "Home"){
              MidImg.src = Homess
              }
              if(Name === "Services"){
                  MidImg.src = Services
              }
              if(Name === "Team"){
                  MidImg.src = Teamss
              }
              if(Name === "Contact"){
                  MidImg.src = Contactss
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
                  if(Name === "Team"){
                      MidImg.src = Teams
                  }
                  if(Name === "Contact"){
                      MidImg.src = Contacts
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

                  if(Name === "Team"){
                      MidImg.src = Teams
                  }
                  if(Name === "Contact"){
                      MidImg.src = Contacts
                  }
          }

          else if (Windows <= 1.2) { console.log("1.2","Tap")
              Body.classList= 'Tap'; Bg.src = BGM
              Laptop1.src = H_L; Laptop2.src = S_L; Laptop3.src = T_L; Laptop4.src = C_L;
              if(Name === "Services"){
              MidImg.src = Service

              }
              if(Name === "Home"){
                  MidImg.src = Home
                  }
                  if(Name === "Team"){
                      MidImg.src = Team
                  }
                  if(Name === "Contact"){
                      MidImg.src = Contact
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
                      if(Name === "Team"){
                          MidImg.src = Team
                      }
                       if(Name === "Contact"){
                      MidImg.src = Contact
                  }
              
          }
             else if (Windows >= 2) { console.log("2", "HeadLap")
              Body.classList= 'HeadLap'; Bg.src= BG
              Laptop1.src = H_L; Laptop2.src = S_L; Laptop3.src = T_L; Laptop4.src = C_L;
            
                  if(Name === "Home"){
                      MidImg.src = Home
                      }
                      if(Name === "Services"){
                          MidImg.src = Service
                          }
                      if(Name === "Team"){
                          MidImg.src = Team
                      }
                      if(Name === "Contact"){
                          MidImg.src = Contact
                      }
              
          }
          else { console.log("else")
              Body.classList= ''; Bg.src= BG
              Laptop1.src = H_L; Laptop2.src = S_L; Laptop3.src = T_L; Laptop4.src = C_L;
           
              if(Name === "Services"){
                  MidImg.src = Service
                  }
                  if(Name === "Home"){
                      MidImg.src = Home
                      }
                       if(Name === "Team"){
                      MidImg.src = Team
                  }
                   if(Name === "Contact"){
                      MidImg.src = Contact
                  }
            
          }
      
      }
     
  }
    handleResize()

  }, [Name,isdark])

}

export default Mood