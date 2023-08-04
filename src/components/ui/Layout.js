import React, { useContext } from 'react';
import CanvasComponent from './CanvasComponent';
import { SettingsContext } from '../../context/SettingsContext';

const Layout = (props) => {
  const { settings } = useContext(SettingsContext);

  return (
    <div
      className="w-full min-h-full sm:p-4 p-1 flex justify-center"
      style={{
        color: settings.primaryTextColor,
        backgroundColor: !settings.animation ? settings.backgroundColor : '',
      }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-[-10] opacity-100
        } transition-opacity duration-300`}
      >
        <CanvasComponent />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
