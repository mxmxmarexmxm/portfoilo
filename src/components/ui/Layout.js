import React from 'react';
import CanvasComponent from './CanvasComponent';

const Layout = (props) => {
  return (
    <div className="w-full min-h-full text-white sm:p-4 p-1 flex justify-center">
      <div
        className={`absolute top-0 left-0 w-full h-full z-[-10} opacity-100
        } transition-opacity duration-300`}
      >
        <CanvasComponent />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
