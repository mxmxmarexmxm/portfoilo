import React from 'react';

const Layout = (props) => {
  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
      {props.children}
    </div>
  );
};

export default Layout;
