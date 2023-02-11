import React from 'react'
import BG from '../../image/Const/BG.png'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'
const Const = () => {
    return (
        <>
        <div className='Const absolute'>
            <picture>
            {/* <source media="(min-height: 824px) and (max-width: 924px)"srcSet={BGM} alt='' />

                <source media='(max-width : 800px) and (min-height: 600px)' srcSet={BGM} alt='' /> */}
                <img className='BG' id='BG' src={BG} alt=''  />
            </picture>
        <Navbar/>
        <SocialMedia/>

        </div>

        </>
    )
}

export default Const