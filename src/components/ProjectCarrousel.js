import projectsData from '../data/projects-data';
import Project from './Project';
import { useState } from 'react';
import Forward from '../assets/icons/forward';
import Backward from '../assets/icons/backward';

const ProjectCarrousel = () => {
  const [project, setProject] = useState(0);

  const carrouselHandler = (direction) => {
    let projectLength = projectsData.length;

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
    <div className="flex items-center justify-between sm:px-4">
      <button onClick={() => carrouselHandler('backward')}>
        <Backward className="  cursor-pointer w-8 sm:w-24" />
      </button>

      <Project {...projectsData[project]} />

      <button onClick={() => carrouselHandler('forward')}>
        <Forward className=" cursor-pointer w-8 sm:w-24" />
      </button>
    </div>
  );
};

export default ProjectCarrousel;
