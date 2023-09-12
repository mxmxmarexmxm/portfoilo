import React, { useContext } from 'react';
import LogoBadgeContainer from '../components/ui/LogoBadgeContainer';
import { SettingsContext } from '../context/SettingsContext';
import Settings from '../assets/icons/settings';

const AboutMe = () => {
  const { settings } = useContext(SettingsContext);
  return (
    <div className="sm:pt-[2rem] border-2 gap-48  flex items-center flex-col justify-center h-screen">
      <div>
        <h1 className="text-center text-7xl mb-4 font-elite">
          Welcome to my portfolio!
        </h1>
        <h2 className="text-center text-3xl font-elite">
          If you don't like it, you can customize it at{' '}
          <Settings className="w-8 h-8 inline" color={settings.iconsColor} />{' '}
          above!
        </h2>
      </div>
      <div
        className="flex items-center flex-col sm:flex-row justify-center text-center w-full sm:px-24 px-8"
        style={{ color: settings.primaryTextColor }}
      >
        <div className="text-left mb-4 flex-1">
          <p className="text-4xl mb-4">Get to know me!</p>
          <p className="sm:w-3/4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius
          </p>
        </div>
        <div className="text-left flex-1">
          <p className="text-4xl mb-4">Skills</p>
          <LogoBadgeContainer
            techs={[
              'html',
              'css',
              'js',
              'react',
              'tailwind',
              'firebase',
              'next',
              'graphql',
              'typescript',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
