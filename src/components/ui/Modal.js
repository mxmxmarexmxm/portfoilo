import React from 'react';

const Modal = (props) => {
  const { setIsOpen, setSettings } = props;
  return (
    <div className="text-white fixed h-full w-full z-50 flex items-center justify-center bg-[rgba(0,0,0,0.9)] ">
      <div className="bg-gray-800 opacity-100 h-96 aspect-square rounded-2xl flex flex-col p-4">
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-2xl'>Settings</h2>
          <button className="self-end" onClick={() => setIsOpen(false)}>
            ❌
          </button>
        </div>
        <button
          onClick={() =>
            setSettings((c) => {
              return { ...c, rain: !c.rain };
            })
          }
        >
          🌧️
        </button>
        <button
          onClick={() =>
            setSettings((c) => {
              return { ...c, size: 24 };
            })
          }
        >
          Size
        </button>
      </div>
    </div>
  );
};

export default Modal;
