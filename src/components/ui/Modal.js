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
    const newValue =
      type === 'checkbox'
        ? checked
        : type === 'number'
        ? parseInt(value)
        : value;

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
          <div className="flex justify-between">
            <label htmlFor="charset">Charset</label>
            <input
              type="text"
              className="text-black p-1 font-normal text-base rounded-md"
              name="charset"
              value={formState.charset}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="fps">Frame</label>
            <input
              className="text-black p-1 font-normal text-base text-right rounded-md"
              type="number"
              name="fps"
              value={formState.fps}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="fps">Size</label>
            <input
              className="text-black p-1 font-normal text-base text-right rounded-md"
              type="number"
              name="size"
              value={formState.size}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="color">Color</label>
            <div className="rounded-full border-2 border-white overflow-hidden w-10 h-10">
              <input
                className="text-black cursor-pointer w-[200%] h-[200%]"
                type="color"
                name="color"
                value={formState.color}
                disabled={!formState.animation}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center h-12">
            <button
              type="button"
              className="w-32 bg-gray-900 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="w-32 bg-gray-600 rounded-xl">
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
