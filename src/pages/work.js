import projectsData from '../data/projects-data';
import Project from '../components/Project';

const Work = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
};

export default Work;
