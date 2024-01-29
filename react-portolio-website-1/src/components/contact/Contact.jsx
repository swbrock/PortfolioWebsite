import React, { useRef } from 'react'
import './contact.css' // This is the CSS file for this component
import { MdOutlineEmail } from 'react-icons/md'
import { SiMessenger } from 'react-icons/si'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cegzqmf', 'template_mfi44e9', form.current, '9Rhuzv4zFi-pGq0h0')

    e.target.reset();
  };
  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon' />
            <h4>Email</h4>
            <h5>swbrockbank@gmail.com</h5>
            <a href='mailto:swbrockbank@gmail.com' target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__icon' />
            <h4>Messenger</h4>
            <h5>swbrockbank</h5>
            <a href='https://m.me/StephenWBrockbank' target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Name' required />
          <input type="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact