import React from 'react';
import LogoBadgeContainer from './ui/logo-badge-container';

const Project = (props) => {
  const {
    title,
    name,
    projectImg,
    description,
    url,
    techs,
    github,
    noPhoneImg,
  } = props;

  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">
        <span className="text-gray-500 ">{title}</span>
        <h2 className="text-5xl font-bold">{name}</h2>
      </div>
      <div className="flex justify-center my-4 w-full items-center overflow-hidden">
        <div
          className={`w-9/12 sm:w-full mr-4 sm:mr-6 sm:ml-36 ${
            noPhoneImg ? 'sm:ml-0' : ''
          }`}
        >
          <img src={projectImg} className="w-full" alt={`pc-${name}`} />
        </div>
      </div>
      <LogoBadgeContainer techs={techs} />
      <div className="flex-1 text-center">
        <p className="my-5">{description}</p>
        <a
          href={url}
          target="_blanc"
          className="text-blue-500 visited:text-blue-300 my-8"
        >
          Visit the app
        </a>
        {github && (
          <a
            href={github}
            target="_blanc"
            className="text-blue-500 visited:text-blue-300 my-8 block"
          >
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
