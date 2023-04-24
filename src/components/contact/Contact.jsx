import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { RiTelegramLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y3j865t', 'template_nzidd5i', form.current, 'AKGnF3ulSeiXQCdhD')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>apyae8263@gmail.com</h5>
            <a href="mailto:apyae8263@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Aung Pyae Sone</h5>
            <a href="https://m.me/aung.ps.73" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Aung Pyae Sone</h5>
            <a href="https://t.me/aungps211" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
