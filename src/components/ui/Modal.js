import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

const Modal = (props) => {
  const { settings } = useContext(SettingsContext);
  const { setIsOpen } = props;

  // Close modal on escape button
  const handleEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyPress);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className=" fixed h-full w-full z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.9)] py-3 "
      style={{ color: settings.primaryTextColor }}
    >
      <div className="bg-gray-800 h-full opacity-100 sm:w-[550px] w-[95%] aspect-square rounded-2xl flex flex-col sm:py-8 sm:px-12 p-4 pt-0 overflow-y-scroll">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
