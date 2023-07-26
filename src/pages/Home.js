import React from 'react';
import AboutMe from './about-me';
import Contact from './contact';
import Work from './work';

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-16">
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
