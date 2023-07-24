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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="text-white bg-gray-700 flex flex-col p-4 sm:p-16 sm:w-1/2 m-auto gap-4 mb-8 rounded-xl border-2 border-gray-600"
    >
      <label className="font-bold text-xl">Name</label>
      <input
        type="text"
        name="from_name"
        placeholder="What's your name?"
        className="text-black p-4 rounded-lg"
        required
      />
      <label className="font-bold text-xl">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Where can I reach you?"
        className="text-black p-4 rounded-lg"
        required
      />
      <label className="font-bold text-xl">Message</label>
      <textarea
        name="message"
        className="text-black h-48 rounded-lg p-4"
        placeholder="Type your message here."
        required
      />
      <input
        type="submit"
        value="Send"
        className="text-white p-4 mt-4 text-xl rounded-lg bg-zinc-900 font-bold cursor-pointer border-4 border-gray-600"
      />
    </form>
  );
};

export default EmailContactForm;
