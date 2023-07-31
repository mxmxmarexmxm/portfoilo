import React, { useState } from 'react';

const Modal = (props) => {
  const { setIsOpen, setSettings, settings } = props;
  const [formState, setFormState] = useState(settings);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(formState);
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div className="text-white fixed h-full w-full z-50 flex items-center justify-center bg-[rgba(0,0,0,0.9)] ">
      <div className="bg-gray-800 opacity-100 h-[550px] aspect-square rounded-2xl flex flex-col py-8 px-12">
          <h2 className="font-bold text-3xl mb-8 text-center">Settings</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between flex-1 gap-4 text-xl font-bold"
        >
          <div className="flex justify-between">
            <label htmlFor="animation">Background animation</label>
            <input
              className="w-6"
              type="checkbox"
              name="animation"
              checked={formState.animation}
              onChange={handleInputChange}
            />
          </div>
          {/* <label htmlFor="fps">Frame</label>
          <input
            className="text-black"
            type="number"
            name="fps"
            defaultValue={15}
          ></input>
          <label htmlFor="color">Color</label>
          <input
            className="text-black"
            name="color"
            defaultValue="#ffffff"
          ></input> */}
          <div className="flex gap-4 justify-center h-12">
            <button
              type="button"
              className=" w-32  bg-gray-900 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="button" className=" w-32  bg-gray-600 rounded-xl">
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
