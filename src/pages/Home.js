import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const Home = () => {
  const [subtitle, setSubtitle] = useState('');
  const [visibleDownloadBtn, setVisibleDownloadBtn] = useState(false);
  const { settings } = useContext(SettingsContext);
  let charIndex = 0;

  useEffect(() => {
    // TODO: Chrome: charAt(1) isn't displayed, Firefox: charAt(0) isn't displayed, add double space to avoid bug
    const subtitleText = `  I'm a frontend web developer.`;
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < subtitleText.length) {
          setSubtitle((prevText) => prevText + subtitleText.charAt(charIndex));
          charIndex++;
        } else {
          setVisibleDownloadBtn(true);
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
    <div className="h-screen text-center w-full font-elite relative">
      <div className="w-full justify-center flex flex-col gap-8 absolute top-[24%]">
        <div className="md:text-[25rem] sm:text-[18rem] text-[10rem] font-semibold flex md:leading-[18rem] leading-none sm:leading-[12rem] justify-center">
          <div className="bounce-in-m-1">
            <span className="whitespace-nowrap">
              M
              <span className="md:text-8xl sm:text-7xl text-5xl rotate-x">
                x
              </span>
            </span>
          </div>
          <div className="bounce-in-m-2">
            <span className="whitespace-nowrap">
              M
              <span className="md:text-8xl sm:text-7xl text-5xl rotate-x">
                x
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:text-7xl gap-4 sm:gap-8 sm:text-6xl text-3xl font-semibold text-center flex-col">
          <h1 className="whitespace-nowrap">
            Hi, I'm{' '}
            <span style={{ color: settings.secondaryTextColor }}>Marinko.</span>
            <br />
          </h1>
          <div className="typewriter">
            <h2>{subtitle}</h2>
          </div>
          <button
            style={{
              color: settings.secondaryTextColor,
              border: `2px solid ${settings.secondaryTextColor}`,
            }}
            className={`text-sm sm:text-xl p-3 animate-pulse rounded-lg ${
              visibleDownloadBtn ? 'visible' : 'hidden'
            }`}
          >
            <a href="/Marinko-Malencic-CV.pdf" download>
              Download my Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
