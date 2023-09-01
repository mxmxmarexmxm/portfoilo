import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LinkedinIcon from '../assets/icons/linkedin';
import { SettingsContext } from '../context/SettingsContext';
import GithubIcon from '../assets/icons/github';
import DoneIcon from '../assets/icons/done';
import FailedIcon from '../assets/icons/failed';

const EmailContactForm = () => {
  const [emailStatus, setEmailStatus] = useState(null);
  const { settings } = useContext(SettingsContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qtpzty8',
        'template_ck852af',
        form.current,
        '-DHMW1pR3UQzT__z-'
      )
      .then(
        (result) => {
          setEmailStatus(result.status);
          console.log(result.status);
        },
        (error) => {
          setEmailStatus(error.message);
        }
      );
  };

  let messageAlertContent = (
    <>
      <DoneIcon className="md:w-32 md:h-32 w-24 h-24 mx-auto" color="#1fec04" />
      <p className="text-center">
        Thank you for reaching out! <br />
        Your message has been successfully sent.
        <br /> I'll get back to you as soon as possible.
        <br /> Have a great day!
      </p>
    </>
  );

  if (emailStatus !== 200) {
    messageAlertContent = (
      <>
        <FailedIcon
          className="md:w-32 md:h-32 w-24 h-24 mx-auto"
          color="#ec0404"
        />
        <p className="text-center">
          Oops!
          <br /> It seems there was an issue sending your email. <br />
          Please double-check your details and try again later.
          <br /> If the problem persists, feel free to reach out to me through
          other channels.
          <br />
          Thank you!
        </p>
      </>
    );
  }

  return (
    <>
      {emailStatus && (
        <div className="fixed top-0 left-0 flex justify-center bg-[rgba(0,0,0,0.9)] w-full h-full items-center ">
          <div
            style={{ backgroundColor: settings.containersColor }}
            className="rounded-xl w-[90vw] md:w-[650px] p-8 flex items-center gap-10 text-base flex-col md:text-xl border-2 border-gray-500"
          >
            {messageAlertContent}
            <button
              onClick={() => setEmailStatus(null)}
              className="self-center bg-gray-500 px-6 py-2 rounded-xl"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ backgroundColor: settings.containersColor }}
        className={`flex w-full mx-4 flex-col h-max md:h-auto p-4 sm:p-16 sm:pb-4 xl:w-1/2 md:w-5/6 m-auto gap-4 md:mb-8 rounded-xl border-2 border-gray-600`}
      >
        <label className="font-bold text-lg sm:text-xl">Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="What's your name?"
          className="text-black p-2 sm:p-4 rounded-lg"
          required
        />
        <label className="font-bold text-lg sm:text-xl">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Where can I reach you?"
          className="text-black p-2 sm:p-4 rounded-lg"
          required
        />
        <label className="font-bold text-lg sm:text-xl">Message</label>
        <textarea
          name="message"
          className="text-black sm:h-48 h-32 rounded-lg p-4"
          placeholder="Type your message here."
          required
        />
        <input
          type="submit"
          value="Send"
          className="p-2 sm:p-4 mt-4 text-xl rounded-lg bg-zinc-900 font-bold cursor-pointer border-4 border-gray-600"
        />
        <div className="flex h-14 justify-center gap-4 sm:mt-8">
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mxmxmarexmxm"
              className="w-auto h-12"
            >
              <GithubIcon className="h-full" color={settings.iconsColor} />
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
    </>
  );
};

export default EmailContactForm;
