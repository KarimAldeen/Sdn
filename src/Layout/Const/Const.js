import React from 'react'
import BG from '../../image/Const/BG.png'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'
const Const = ({Name}) => {
    return (
        <div id="Hiden2">
        <div className='Const absolute' id='Const'>
                <img className='BG' id='BG' src={BG} alt=''  />
        <Navbar  Name={Name} />
        <SocialMedia/>

        </div>

        </div>
    )
}

export default Const