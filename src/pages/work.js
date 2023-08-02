import { useContext } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectGrid from '../components/ProjectGrid';
import { SettingsContext } from '../context/SettingsContext';

const Work = () => {
  const { settings } = useContext(SettingsContext);

  let content =
    settings.projectsLayout === 'carousel' ? (
      <ProjectCarousel />
    ) : (
      <ProjectGrid />
    );

  return <div className="min-h-screen">{content}</div>;
};

export default Work;
