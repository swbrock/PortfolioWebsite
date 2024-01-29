import React from 'react'
import './services.css' // This is the CSS file for this component
import { BiCheck } from 'react-icons/bi'

const services = () => {
    return (
        <section id='education' className='services'>
            <h5>What I Know</h5>
            <h2>Education</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Cybersecurity</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Information Security Principles</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Identify Information Security Threats and Vulnerabilities</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Attack, Prevention, and Detection</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Internal Controls of Business Processes</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Project Management using SCRUM methodology</p>
                        </li>

                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Full Stack Web Development with .Net Core (React, NextJS, TypeScript client-side, C# server-side)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Design, create, and maintain C# RESTful Web API's and MS SQL databases for custom web apps</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Development with Python using Django and PostGreSQL</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Development with JavaScript using Node/Express and PostGreSQL</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Development using the .NET MVC Framework</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Statistics</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Analytics and Machine Learning using Azure ML Studio</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Machine Learning in Python</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Compute summary statistics from R and SAS datasets</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Writing Statistical Models</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Understand Experimental Design</p>
                        </li>
                    </ul>
                </article>

            </div>

        </section>
    )
}

export default services