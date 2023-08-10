import React, { useContext } from 'react';
import Settings from '../../assets/icons/settings';
import { SettingsContext } from '../../context/SettingsContext';

const Navbar = (props) => {
  const { settings } = useContext(SettingsContext);
  const { openSettings } = props;
  return (
    <nav className="smooth-scroll flex fixed bg-[#000000] top-0 right-0 gap-8 w-full justify-end items-center px-8 py-2 sm:py-4 font-semibold z-50">
      <ul className="flex gap-8 w-full justify-end items-center text-sm font-semibold ">
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
