import React, { useState } from 'react';
import CanvasComponent from './CanvasComponent';

const Layout = (props) => {
  const { settings } = props;
  return (
    <div className="w-full min-h-full text-white sm:p-4 p-1 flex justify-center">
      <div
        className={`absolute top-0 left-0 w-full h-full z-[-10} ${
          settings.animation ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
      >
        <CanvasComponent settings={settings} />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
