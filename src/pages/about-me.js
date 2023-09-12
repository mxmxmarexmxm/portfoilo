import React, { useContext } from 'react';
import LogoBadgeContainer from '../components/ui/LogoBadgeContainer';
import { SettingsContext } from '../context/SettingsContext';
import Settings from '../assets/icons/settings';

const AboutMe = () => {
  const { settings } = useContext(SettingsContext);
  return (
    <div
      className="sm:pt-[2rem] border-2 gap-32 flex items-center flex-col justify-end min-h-screen"
      style={{ color: settings.primaryTextColor }}
    >
      <div>
        <h1 className="text-center text-7xl mb-4 font-elite ">
          Welcome to my portfolio!
        </h1>
        <h2 className="text-center text-3xl code ">
          If you'd like to customize it, click on the{' '}
          <Settings
            className="w-8 h-8 inline mb-3"
            color={settings.iconsColor}
          />{' '}
          icon above!
        </h2>
      </div>
      <div className="flex items-start flex-col sm:flex-row justify-center text-center w-full sm:px-24 px-8">
        <div className="text-left mb-4 flex-1">
          <p className="text-4xl mb-4 font-elite">Get to know me!</p>
          <div className="sm:w-3/4 text-xl font-semibold flex flex-col gap-6 code">
            <p>
              Hello, I'm Marinko Malencic, a Frontend Web Developer. I
              discovered my passion for computers and the online world during
              the COVID-19 pandemic, which led me to begin my learning journey
              after graduating from the Faculty of Economics.
            </p>

            <p>
              Through self-learning on various online platforms, I've gained
              valuable skills and experience. I've also worked on projects like
              'ASM Wartung' and 'maske.rs' at{' '}
              <a
                href="https://www.wolken-asm.de/"
                className="underline"
                style={{ color: settings.secondaryTextColor }}
              >
                Wolken-ASM GmbH
              </a>
              , where I applied my knowledge and developed a strong drive for
              self-improvement.
            </p>
            <p>
              Now, I'm actively seeking new opportunities for personal and
              professional growth in web development. If you're interested in
              collaborating or sharing ideas, please don't hesitate to reach
              out. Let's create something amazing together!
            </p>
          </div>
        </div>
        <div className="text-left flex-1">
          <div className="mb-24">
            <p className="text-4xl mb-4 font-elite">Skills</p>
            <LogoBadgeContainer
              justify="justify-start"
              techs={['html', 'css', 'js', 'react', 'tailwind']}
            />
          </div>
          <div>
            <p className="text-4xl mb-4 font-elite">Familiar with</p>
            <LogoBadgeContainer
              justify="justify-start"
              techs={['typescript', 'next', 'graphql', 'firebase']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
