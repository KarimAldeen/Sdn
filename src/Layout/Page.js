import React, { useEffect, useLayoutEffect } from 'react'
import Const from './Const/Const'
import Mid from './Mid'
import Top from './Top'
import Down from './Down'
import Qyeri from './Qyeri'
import Mood from './Mood'
import Home_Anim from '../image/Anim/Home_Anim.svg'
import LapHome_Anim from '../image/Anim/LapHome_Anim.svg'
import Services_Anim from '../image/Anim/Services_Anim.svg'
import LapServices_Anim from '../image/Anim/LapServices_Anim.svg'
import Team_Anim from '../image/Anim/Team_Anim.svg'
import LapTeam_Anim from '../image/Anim/LapTeam_Anim.svg'
import Contact_Anim from '../image/Anim/Contact_Anim.svg'
import LapContact_Anim from '../image/Anim/LapContact_Anim.svg'
import { useLocation } from 'react-router-dom'

const Page = ({ LeftSec, RightSec, MidSec, Name }) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    
    useLayoutEffect(() => {
   const Laptop = document.getElementById("Laptop_Anim");
   const Page = document.getElementById("Page_Anim");

      if((params.get('event')) != "Anim" ){
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
    }, [])
    useEffect(() => {
  if((params.get('event')) === "Anim" ){
    const timer = setTimeout(() => {
        
        document.getElementById("Laptop_Anim").classList.add("none")
        document.getElementById("Page_Anim").classList.add("PageAnim")
  
  
      }, 2000);
      const timer2 = setTimeout(() => {
        document.getElementById("Page_Anim").classList.add("none")
        document.getElementById("Normal").classList.remove("none")
  
  
      }, 3550);
      return () => clearTimeout(timer2,timer);
  }
  
  
    
    }, [params.get('event')]);
    return (
        <>
            <div className='Anim' id='Anim'>
                <img className='Laptop_Anim' id='Laptop_Anim' alt=' ' src="" />
                <img className='Page_Anim' id='Page_Anim' alt=' ' src="" />


            </div>
            <div className='Normal' id='Normal'>
                <Mood Name={Name} />
                <Qyeri Name={Name} />
                <div className={Name}>
                    <Const />
                    <div className='Page absolute'>
                        <Top LeftSec={LeftSec} RightSec={RightSec} />
                        <Mid MidSec={MidSec} />
                        <Down />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page