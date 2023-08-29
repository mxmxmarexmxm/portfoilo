import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const AboutMe = () => {
  const [txt, setTxt] = useState('');
  const { settings } = useContext(SettingsContext);
  let charIndex = 0;

  useEffect(() => {
    // TODO: Chrome: charAt(1) isn't displayed, Firefox: charAt(0) isn't displayed, add double space to avoid bug
    const typewriterText = `  I'm a frontend web developer.`;
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < typewriterText.length) {
          setTxt((prevText) => prevText + typewriterText.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(interval); // Stop the interval when typing is complete
        }
      }, 90);

      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }, 2000); // Start after two seconds

    return () => {
      clearTimeout(startTyping); // Clear the timeout when the component unmounts
    };
  }, [charIndex]);

  return (
    <div className="flex items-center justify-start h-screen text-center w-full font-elite">
      <div className="w-full flex flex-col gap-8">
        <div className="sm:text-[25rem] text-[10rem] font-semibold flex sm:leading-[18rem] justify-center">
          <div className="bounce-in-m-1">
            <span>
              M<span className="sm:text-8xl text-5xl">x</span>
            </span>
          </div>
          <div className="bounce-in-m-2">
            <span>
              M<span className="sm:text-8xl text-5xl">x</span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full sm:text-7xl text-3xl font-semibold text-center flex-col">
          <h1 className="whitespace-nowrap">
            Hi, I'm{' '}
            <span style={{ color: settings.secondaryTextColor }}>Marinko.</span>
            <br />
          </h1>
        </div>
        <div className="typewriter">
          <h2 className="text-3xl sm:text-7xl">{txt}</h2>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
