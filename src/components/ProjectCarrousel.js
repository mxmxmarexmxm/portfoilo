import projectsData from '../data/projects-data';
import Project from './Project';
import { useState } from 'react';
import Forward from '../assets/icons/forward';
import Backward from '../assets/icons/backward';

const ProjectCarrousel = () => {
  const [project, setProject] = useState(0);
  const projectLength = projectsData.length;

  const carrouselHandler = (direction) => {
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
    <>
      <div className="flex items-center justify-between sm:px-4">
        <button onClick={() => carrouselHandler('backward')}>
          <Backward className="  cursor-pointer w-8 sm:w-24" />
        </button>

        <Project {...projectsData[project]} />

        <button onClick={() => carrouselHandler('forward')}>
          <Forward className=" cursor-pointer w-8 sm:w-24" />
        </button>
      </div>

      <div className="bg-gray-500 w-64 h-8 self-center rounded-2xl flex justify-start overflow-hidden border-2 border-gray-700">
        <div
          className={`w-[${
            ((project + 1) / projectLength) * 100
          }%] bg-gray-600 h-full border-r-2 border-gray-700`}
        ></div>
      </div>
    </>
  );
};

export default ProjectCarrousel;
