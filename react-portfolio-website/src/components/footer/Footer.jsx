import React from 'react'
import './footer.css' // This is the CSS file for this component
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#' className='footer__logo'>SWBrockbank</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experiences</a></li>
        <li><a href='#education'>Education</a></li>
        {/* <li><a href='#porfolio'>Portfolio</a></li> */}
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/StephenWBrockbank" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/stephenwbrockbank/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/stephen-w-brockbank-5b5b1b1b3/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
      </div>

      <p className='footer__copyright'>© 2023 Stephen W. Brockbank. All rights reserved.</p>
    </footer>
  )
}

export default Footer