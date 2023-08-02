import React from 'react';
import projects from '../data/projects-data';
import Project from './Project';

const ProjectGrid = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(700px,1fr))] sm:gap-y-0">
      {projects.map((project) => (
        <div className="sm:p-24">
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
