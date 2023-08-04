import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import LinkedinIcon from '../assets/icons/linkedin';
import { SettingsContext } from '../context/SettingsContext';
import GithubIcon from '../assets/icons/github';

const EmailContactForm = () => {
  const { settings } = useContext(SettingsContext);
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
      className="bg-gray-700 flex w-full mx-4 flex-col p-4 sm:p-16 sm:pb-4 xl:w-1/2 md:w-5/6 m-auto gap-4 mb-8 rounded-xl border-2 border-gray-600"
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
        className="text-black sm:h-48 h-32 rounded-lg p-4"
        placeholder="Type your message here."
        required
      />
      <input
        type="submit"
        value="Send"
        className="p-4 mt-4 text-xl rounded-lg bg-zinc-900 font-bold cursor-pointer border-4 border-gray-600"
      />
      <div className="flex h-14 justify-center gap-4 mt-8">
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mxmxmarexmxm"
            className="w-auto h-12"
          >
            <GithubIcon className="h-full" color={settings.iconsColor}/>
          </a>
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/marinko-malencic/"
            className="w-auto h-12"
          >
            <LinkedinIcon className="h-full" color={settings.iconsColor} />
          </a>
        </div>
      </div>
    </form>
  );
};

export default EmailContactForm;
