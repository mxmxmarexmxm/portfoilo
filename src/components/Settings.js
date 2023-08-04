import React, { useContext, useState } from 'react';
import Toggle from './ui/Toggle';
import { SettingsContext } from '../context/SettingsContext';

const defaultValues = {
  fps: 23,
  animationTextColor: '#292727',
  charset: 'M',
  size: 12,
  animation: true,
  projectsLayout: 'carousel',
  primaryTextColor: '#ffffff',
  secondaryTextColor: '#6b7280',
  backgroundColor: '#0000000D',
  iconsColor: '#ffffff',
};

const Settings = (props) => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [formState, setFormState] = useState(settings);
  const { setIsOpen } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(formState);
    setIsOpen(false);
  };

  const resetToDefaultValues = () => {
    setSettings(defaultValues); // Reset the formState to the default settings
    setIsOpen(false); // Close the modal
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
    <>
      <h2 className="font-bold text-2xl sm:text-3xl sm:mb-8 mb-2 text-center">
        Settings
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-1 gap-4 sm:text-xl font-bold"
      >
        <div className="flex items-center gap-4 w-full justify-center self-center mt-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="text-base sm:text:xl font-semibold">
            Animated Background
          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <Toggle
          label="Background animation"
          defaultOn={formState.animation}
          onChange={(newValue) =>
            setFormState((prevState) => ({
              ...prevState,
              animation: newValue,
            }))
          }
        />
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
          <label htmlFor="animationTextColor">Animation Text Color</label>
          <div className="rounded-full border-2 border-white flex items-center overflow-hidden justify-center w-10 h-10 ">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="animationTextColor"
              value={formState.animationTextColor}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 w-full justify-center self-center mt-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="text-base sm:text:xl font-semibold">General Layout</h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="backgroundColor">Background Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10 ">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="backgroundColor"
              value={formState.backgroundColor}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="primaryTextColor">Primary Text Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10 ">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="primaryTextColor"
              value={formState.primaryTextColor}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="secondaryTextColor">Secondary Text Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10 ">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="secondaryTextColor"
              value={formState.secondaryTextColor}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="iconsColor">Icons Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10 ">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="iconsColor"
              value={formState.iconsColor}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Toggle
          label="Projects Layout (Grid / Carousel)"
          defaultOn={formState.projectsLayout === 'carousel'}
          onChange={(newValue) =>
            setFormState((prevState) => ({
              ...prevState,
              projectsLayout: newValue ? 'carousel' : 'grid',
            }))
          }
        />
        <button
          type="button"
          className="w-32 rounded-xl self-center"
          onClick={() => resetToDefaultValues()}
        >
          Default
        </button>
        <div className="flex gap-4 justify-center h-12 mt-6">
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
    </>
  );
};

export default Settings;
