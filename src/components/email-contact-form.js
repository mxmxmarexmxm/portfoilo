import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 
    
    emailjs
      .sendForm(
        'service_qtpzty8',
        'template_nxjgkab',
        form.current,
        '-DHMW1pR3UQzT__z-'
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='text-white'>
      <label>Name</label>
      <input type="text" name="from_name" className='text-black' />
      <label>Email</label>
      <input type="email" name="user_email" className='text-black' />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className='text-white' />
    </form>
  );
};

export default EmailContactForm;
