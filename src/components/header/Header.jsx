import React from 'react'
import './header.css' // This is the CSS file for this component
import CTA from './CTA'
import ME from '../../assets/ME-about.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Stephen Brockbank</h1>
                <h5 className="text-light">
                    Fullstack Developer
                </h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                <br />
                <a href="#contact" className='scoll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header