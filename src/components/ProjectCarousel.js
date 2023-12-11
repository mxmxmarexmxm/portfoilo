import projectsData from '../data/projects-data';
import Project from './Project';
import { useContext, useState } from 'react';
import Next from '../assets/icons/next';
import Previous from '../assets/icons/previous';
import { SettingsContext } from '../context/SettingsContext';

const ProjectCarousel = () => {
  const [project, setProject] = useState(0);
  const [animation, setAnimation] = useState('');
  const { settings } = useContext(SettingsContext);
  const projectLength = projectsData.length;

  const carouselHandler = (direction) => {
    if (direction === 'next') {
      setProject((current) => {
        if (project === projectLength - 1) {
          return 0;
        }
        return current + 1;
      });
      setAnimation('slide-next-project');
    } else {
      setProject((current) => {
        if (project === 0) {
          return projectLength - 1;
        }
        return current - 1;
      });
      setAnimation('slide-previous-project');
    }
  };

  return (
    <div className="flex flex-col items-center justify-around h-screen w-full my-auto sm:pt-[2rem] ">
      <div className="flex justify-between sm:px-4 h-[90%]  relative w-full ">
        <button onClick={() => carouselHandler('previous')}>
          <Previous
            className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[37%] left-2"
            color={settings.iconsColor}
          />
        </button>
        <Project
          {...projectsData[project]}
          key={project}
          animation={animation}
        />
        <button onClick={() => carouselHandler('next')}>
          <Next
            className="cursor-pointer w-8 sm:w-12 xl:w-24 absolute top-[37%] right-2"
            color={settings.iconsColor}
          />
        </button>
      </div>

      <div className="bg-gray-500 w-64 h-6 sm:h-6 rounded-2xl flex justify-start overflow-hidden border-2 border-gray-700 -mt-[6rem]">
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
