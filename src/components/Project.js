import React from 'react';
import LogoBadgeContainer from './ui/logo-badge-container';

const Project = (props) => {
  const {
    title,
    name,
    phoneImgUrl,
    desktopImgUrl,
    description,
    url,
    techs,
    github,
  } = props;
  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">
        <span className="text-gray-500 ">{title}</span>
        <h2 className="text-5xl font-bold">{name}</h2>
      </div>
      <div className="flex justify-center my-4 w-full items-center md:justify-center ">
        <div className="flex justify-center my-4 w-full items-center overflow-hidden">
          <div className="w-6/12 mr-6 sm:ml-36">
            <img src={desktopImgUrl} className="w-full" alt={`pc-${name}`} />
          </div>
          {phoneImgUrl && (
            <div className="w-[10%] justify-self-end">
              <img src={phoneImgUrl} className="w-full" alt={`phone-${name}`} />
            </div>
          )}
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
