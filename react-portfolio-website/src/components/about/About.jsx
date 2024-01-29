import React from 'react'
import './about.css' // This is the CSS file for this component
import ME from '../../assets/ME.jpg'
import { BiStats } from 'react-icons/bi'
import { RiComputerFill } from 'react-icons/ri'
import { IoMdInformationCircle } from 'react-icons/io'


const About = () => {
    return (
        <section id='about' className='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>

                <div className="about__content">
                    <div className='about__cards'>
                        <article className='about__card'>
                            <IoMdInformationCircle className='about__icon' />
                            <h5>Information Systems</h5>
                            <h6>Bachelors Degree at BYU</h6>
                            <small>April 2024</small>
                        </article>
                        <article className='about__card'>
                            <RiComputerFill className='about__icon' />
                            <h5>Computer Science</h5>
                            <h6>Minor at BYU</h6>
                            <small>April 2024</small>
                        </article>
                        <article className='about__card'>
                            <BiStats className='about__icon' />
                            <h5>Statistics</h5>
                            <h6>Minor at BYU</h6>
                            <small>April 2024</small>
                        </article>
                    </div>
                    <p>
                        I am currently looking for an full-time position or internship in Web Development, Software Development, Data Analytics, or Data Science. I am open to work in Utah or remote.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
