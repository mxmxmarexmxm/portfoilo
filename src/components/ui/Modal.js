import React, { useEffect } from 'react';

const Modal = (props) => {
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
    <div className="text-white fixed h-full w-full z-50 flex items-center justify-center bg-[rgba(0,0,0,0.9)] ">
      <div className="bg-gray-800 opacity-100 sm:w-[550px] w-[95%] aspect-square rounded-2xl flex flex-col sm:py-8 sm:px-12 p-4">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
