import React from 'react';

const Project = (props) => {
  const { title, name, phoneImgUrl, desktopImgUrl, description, url } = props;
  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">
        <span className="text-gray-500 ">{title}</span>
        <h2 className="text-5xl text-center font-bold">{name}</h2>
      </div>
      <div className="flex justify-center my-4 w-full items-center">
        <div className="w-2/3 mr-6 sm:mr-16">
          <img src={desktopImgUrl} className="w-full" />
        </div>
        <div className="w-1/6 mr-6">
          <img src={phoneImgUrl} className="w-full" />
        </div>
      </div>
      <div>
        <p className="my-5">{description}</p>
        <a
          href={url}
          target="_blanc"
          className="text-blue-500 visited:text-blue-300 my-8"
        >
          Visit the app
        </a>
      </div>
    </div>
  );
};

export default Project;
