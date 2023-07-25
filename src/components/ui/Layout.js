import React from 'react';

const Layout = (props) => {
  return (
    <div className="w-full min-h-screen bg-black text-white sm:p-4 p-1">
      {props.children}
    </div>
  );
};

export default Layout;
