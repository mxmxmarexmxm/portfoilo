import React, { useContext } from 'react';
import LogoBadgeContainer from './ui/logo-badge-container';
import { SettingsContext } from '../context/SettingsContext';
import LiveWebIcon from '../assets/icons/liveweb';
import GithubIcon from '../assets/icons/github';

const Project = (props) => {
  const { settings } = useContext(SettingsContext);
  const {
    title,
    name,
    projectImg,
    description,
    liveUrl,
    techs,
    githubUrl,
    noPhoneImg,
    animation,
  } = props;

  const isGrid = settings.projectsLayout === 'grid';

  return (
    <div className="flex flex-col h-[90%]">
      <div className="h-[80%] sm:h-full flex flex-col items-center justify-center">
        <div className="text-center font-bold">
          <span
            className="bg-black p-2"
            style={{ color: settings.secondaryTextColor }}
          >
            {title}
          </span>
          <h2 className="sm:text-5xl text-3xl font-bold">{name}</h2>
        </div>
        <div className="flex justify-center my-4 w-full items-center overflow-hidden">
          <div
            className={`w-9/12  mr-4 sm:mr-6  ${
              !isGrid ? 'md:min-h-[300px] lg:min-h-[500px] min-h-[150px]' : ''
            }   ${!noPhoneImg ? 'sm:ml-10 xl:ml-36' : ''}`}
          >
            <img
              src={projectImg}
              className={`w-full h-full ${animation}  object-contain`}
              alt={`${name}-project-preview`}
            />
          </div>
        </div>
        <LogoBadgeContainer techs={techs} animation={animation} />
      </div>
      <div
        className={`text-center ${
          isGrid ? 'md:w-[100%]' : 'md:w-[70vw]'
        } mx-auto flex justify-between items-center my-8 px-2 h-[20%]`}
      >
        <div>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <LiveWebIcon
              className={`h-14 ${isGrid ? 'sm:h-16' : 'sm:h-28'} ${
                !liveUrl ? 'blur-sm cursor-not-allowed' : 'hover:scale-125'
              }`}
              color={settings.iconsColor}
            />
          </a>
        </div>
        <p className="sm:max-w-[50%] max-w-[65%]">{description}</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon
              className={`h-10 ${isGrid ? 'sm:h-12' : 'sm:h-20'} ${
                !githubUrl ? 'blur-sm cursor-not-allowed' : 'hover:scale-125'
              }`}
              color={settings.iconsColor}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
