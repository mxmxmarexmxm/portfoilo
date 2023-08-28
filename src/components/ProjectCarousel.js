import projectsData from '../data/projects-data';
import Project from './Project';
import { useContext, useState } from 'react';
import Forward from '../assets/icons/forward';
import Backward from '../assets/icons/backward';
import { SettingsContext } from '../context/SettingsContext';

const ProjectCarousel = () => {
  const [project, setProject] = useState(0);
  const { settings } = useContext(SettingsContext);
  const projectLength = projectsData.length;

  const carouselHandler = (direction) => {
    if (direction === 'forward') {
      setProject((current) => {
        if (project === projectLength - 1) {
          return 0;
        }
        return current + 1;
      });
    } else {
      setProject((current) => {
        if (project === 0) {
          return projectLength - 1;
        }
        return current - 1;
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full mt-8 sm:mt-16">
      <div className="flex justify-between sm:px-4 h-[90%] sm:h-full relative w-full">
        <button onClick={() => carouselHandler('backward')}>
          <Backward
            className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[30%] left-2"
            color={settings.iconsColor}
          />
        </button>
        {/* <div className="flex justify-between sm:px-4 h-[90%] sm:h-full relative w-full slide-project-x-1"> */}
          <Project {...projectsData[project]} />
        {/* </div> */}
        <button onClick={() => carouselHandler('forward')}>
          <Forward
            className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[30%] right-2"
            color={settings.iconsColor}
          />
        </button>
      </div>

      <div className="bg-gray-500 w-64 h-6 sm:h-8 self-center rounded-2xl flex justify-start overflow-hidden border-2 border-gray-700 -mt-16 sm:-mt-32">
        <div
          style={{
            width: `${((project + 1) / projectLength) * 100}%`,
          }}
          className={`bg-gray-600 h-full border-r-2 border-gray-700`}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
