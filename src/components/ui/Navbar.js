import React, { useContext } from 'react';
import Settings from '../../assets/icons/settings';
import { SettingsContext } from '../../context/SettingsContext';

const Navbar = (props) => {
  const { settings } = useContext(SettingsContext);
  const { openSettings } = props;
  return (
    <nav className="smooth-scroll">
      <ul className="flex fixed top-0 right-0 gap-8 bg-black w-full justify-end px-8 py-2 sm:py-4 font-semibold sm:text-xl z-50">
        <li className="cursor-pointer">
          <a href="#about-me">About Me</a>
        </li>
        <li className="cursor-pointer">
          <a href="#work">Projects</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
        <li className="cursor-pointer" onClick={openSettings}>
          <Settings
            className="cursor-pointer w-6 sm:w-8"
            color={settings.iconsColor}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
