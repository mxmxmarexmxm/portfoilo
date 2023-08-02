import React from 'react';
import projects from '../data/projects-data';
import Project from './Project';

const ProjectGrid = () => {
  return (
    <div className="grid ">
      {projects.map((project) => (
        <div>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
