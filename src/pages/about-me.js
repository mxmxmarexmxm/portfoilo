import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const AboutMe = () => {
  const { settings } = useContext(SettingsContext);
  return (
    <div className="flex items-center justify-start h-screen px-16 text-center w-full font-elite">
      <div className="w-full flex flex-col gap-8">
        <div className="text-[25rem] font-semibold flex leading-[18rem] justify-center">
          <div className="bounce-in-m-1">
            <span>
              M<span className="text-8xl">x</span>
            </span>
          </div>
          <div className="bounce-in-m-2">
            <span>
              M<span className="text-8xl">x</span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full text-7xl font-semibold text-center flex-col">
          <h1>
            Hi, I'm{' '}
            <span style={{ color: settings.secondaryTextColor }}>Marinko.</span>
            <br />
          </h1>
          <div className="typewriter">
            <span>I'm a frontend web developer.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
