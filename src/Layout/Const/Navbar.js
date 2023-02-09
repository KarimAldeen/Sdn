import React from 'react'
import { Link } from 'react-router-dom'
import Sdn from '../../image/Home/Sdn.png'
import BtnDarkMood from '../../utils/BtnDarkMood/BtnDarkMood'
import BtnLung from '../../utils/BtnLung/BtnLung'
const Navbar = () => {
    return (
        <div className='Navbar absolute'>
            <div className='Links'>
                <Link to="/" className="Link">Home</Link>
                <Link to="services" className="Link">Servises</Link>
                <Link to="Team" className="Link">Our Team</Link>
                <Link to="Contact" className="Link">Contact</Link>
            </div>

            <div className='Tools'>
                <BtnDarkMood />
                <BtnLung />
                <img className='Logo' src={Sdn} alt='' style={{ height: "3vw" }} />
            </div>

        </div>
    )
}

export default Navbar