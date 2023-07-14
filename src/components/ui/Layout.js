import React from 'react';

const Layout = (props) => {
  return (
    <div className="w-full min-h-screen bg-black ">
      {props.children}
    </div>
  );
};

export default Layout;
