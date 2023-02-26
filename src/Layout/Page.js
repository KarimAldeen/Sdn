import React, { useEffect, useLayoutEffect, useState } from 'react'
import Const from './Const/Const'
import Mid from './Mid'
import Top from './Top'
import Down from './Down'
import Qyeri from './Qyeri'
import Home_Anim from '../image/Anim/Home_Anim.png'
import LapHome_Anim from '../image/Anim/LapHome_Anim.png'
import Services_Anim from '../image/Anim/Services_Anim.png'
import LapServices_Anim from '../image/Anim/LapServices_Anim.png'
import Team_Anim from '../image/Anim/Team_Anim.png'
import LapTeam_Anim from '../image/Anim/LapTeam_Anim.png'
import Contact_Anim from '../image/Anim/Contact_Anim.png'
import LapContact_Anim from '../image/Anim/LapContact_Anim.png'
import { useLocation } from 'react-router-dom'
import Services_AnimDM from '../image/Anim/Services_AnimDM.png'
import Team_AnimDM from '../image/Anim/Team_AnimDM.png'
import Contact_AnimDM from '../image/Anim/Contact_AnimDM.png'
import Home_AnimDM from '../image/Anim/Home_AnimDM.png'
import LapServices_AnimDM from '../image/Anim/LapServices_AnimDM.png'
import LapHome_AnimDM from '../image/Anim/LapHome_AnimDM.png'
import LapTeam_AnimDM from '../image/Anim/LapTeam_AnimDM.png'
import LapContact_AnimDM from '../image/Anim/LapContact_AnimDM.png'

const Page = ({ LeftSec, RightSec, MidSec, Name }) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
       const theme = localStorage.getItem("theme")

    useLayoutEffect(() => {
   const Laptop = document.getElementById("Laptop_Anim");
   const Page = document.getElementById("Page_Anim");

   if(theme === "dark"){
    console.log('1');
    if((params.get('event')) !== "Anim" ){
        document.getElementById("Anim").classList.add("none")
      
          }
        
      if((params.get('event')) === "Anim" ){

    document.getElementById("Normal").classList.add("none")
    if(Name === "Home"){
        Laptop.src = LapHome_AnimDM;
        Page.src = Home_AnimDM;
    }
    if(Name === "Services"){
        Laptop.src = LapServices_AnimDM;
        Page.src = Services_AnimDM;
    }
    if(Name === "Team"){
        Laptop.src = LapTeam_AnimDM;
        Page.src = Team_AnimDM;
    }
    if(Name === "Contact"){
        Laptop.src = LapContact_AnimDM;
        Page.src = Contact_AnimDM;
    }
  
      }
   }
   else {
     if((params.get('event')) !== "Anim" ){

        document.getElementById("Anim").classList.add("none")
      
          }
        
      if((params.get('event')) === "Anim" ){

    document.getElementById("Normal").classList.add("none")
    if(Name === "Home"){
        Laptop.src = LapHome_Anim;
        Page.src = Home_Anim;
    }
    if(Name === "Services"){
        Laptop.src = LapServices_Anim;
        Page.src = Services_Anim;
    }
    if(Name === "Team"){
        Laptop.src = LapTeam_Anim;
        Page.src = Team_Anim;
    }
    if(Name === "Contact"){
        Laptop.src = LapContact_Anim;
        Page.src = Contact_Anim;
    }
  
      }
   }
     
    }, [params])
    useEffect(() => {
  if((params.get('event')) === "Anim" ){
    const timer = setTimeout(() => {
        
        document.getElementById("Laptop_Anim").classList.add("none")
        document.getElementById("Page_Anim").classList.add("PageAnim")
  
  
      }, 2000);
      const timer2 = setTimeout(() => {
        document.getElementById("Page_Anim").classList.add("none")
        document.getElementById("Normal").classList.remove("none")
  
  
      }, 2500);
      return () => clearTimeout(timer2,timer);
  }
  
  
    
    }, [params]);

    return (
        <>
            <div className='Anim' id='Anim'>
                <img className='Laptop_Anim' id='Laptop_Anim' alt=' ' src="" />
                <img className='Page_Anim' id='Page_Anim' alt=' ' src="" />


            </div>
            <div className='Normal' id='Normal'>
                <Qyeri Name={Name} />
                <div className={Name}>
                    <Const  Name={Name} />
                    <div className='Page absolute'>
                        <div id='Hiden'>
                            <Top LeftSec={LeftSec} RightSec={RightSec} />
                        <Mid MidSec={MidSec} /> 
                        </div>
                       
                        <Down Name={Name}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page