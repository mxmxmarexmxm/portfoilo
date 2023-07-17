import AboutMe from './about-me';
import Contact from './contact';
import Work from './work';

const Work = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
