import React from 'react';

const Navbar = () => {
  return (
    <nav className="smooth-scroll">
      <ul className="flex fixed top-0 right-0 gap-8 bg-black w-full justify-end px-8 py-4 font-semibold text-xl">
        <li className="cursor-pointer">
          <a href="#about-me">About Me</a>
        </li>
        <li className="cursor-pointer">
          <a href="#work">Projects</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
