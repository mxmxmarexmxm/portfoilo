import projectsData from '../data/projects-data';
import Project from './Project';
import { useState } from 'react';
import Forward from '../assets/icons/forward';
import Backward from '../assets/icons/backward';

const ProjectCarousel = () => {
  const [project, setProject] = useState(0);
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
    <div className="flex flex-col items-center justify-center h-[90vh] relative w-full mt-8">
      <div className="flex items-start justify-between sm:px-4 min-h-[60%]">
        <button onClick={() => carouselHandler('backward')}>
          <Backward className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[37%] xl:top-1/3 left-2" />
        </button>

        <Project {...projectsData[project]} />

        <button onClick={() => carouselHandler('forward')}>
          <Forward className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[37%] xl:top-1/3 right-2" />
        </button>
      </div>

      {/* <div className="bg-gray-500 w-64 h-8 self-center rounded-2xl flex justify-start overflow-hidden border-2 border-gray-700 mt-8">
        <div
          className={`w-[${
            ((project + 1) / projectLength) * 100
          }%] bg-gray-600 h-full border-r-2 border-gray-700`}
        ></div>
      </div> */}
    </div>
  );
};

export default ProjectCarousel;
