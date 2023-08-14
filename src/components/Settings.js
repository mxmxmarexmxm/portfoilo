import React, { useContext, useState } from 'react';
import Toggle from './ui/Toggle';
import { SettingsContext } from '../context/SettingsContext';
import InfoIcon from '../assets/icons/info';

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
  containersColor: '#374151',
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
    setFormState(defaultValues);
  };

  const setRandomColors = () => {
    const generateRandomColor = () =>
      '#' + Math.floor(Math.random() * 16777215).toString(16);

    setFormState((c) => {
      return {
        ...c,
        animationTextColor: generateRandomColor(),
        primaryTextColor: generateRandomColor(),
        secondaryTextColor: generateRandomColor(),
        backgroundColor: generateRandomColor(),
        iconsColor: generateRandomColor(),
        containersColor: generateRandomColor(),
      };
    });
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

  const saveSettingsToLocalStorage = () => {
    localStorage.setItem('settings', JSON.stringify(formState));
  };

  return (
    <>
      <div className="sticky top-0 bg-inherit z-10 p-2 left-0">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-center">
          Settings
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-1 gap-4 sm:text-xl font-bold"
      >
        <div className="flex items-center gap-4 w-full justify-center self-center mt-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="text-base sm:text-xl font-semibold">
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
          <div className="rounded-full border-2 border-white flex items-center overflow-hidden justify-center w-10 h-10">
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
          <h2 className="text-base sm:text-xl font-semibold">General Layout</h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="backgroundColor">Background Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10">
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
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10">
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
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10">
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
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="iconsColor"
              value={formState.iconsColor}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="containersColor">Containers Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10">
            <input
              className="text-black cursor-pointer h-[50px] w-[50px] aspect-square"
              type="color"
              name="containersColor"
              value={formState.containersColor}
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
        <div className="self-center mt-2 flex justify-between  flex-1 w-full">
          <div className="flex flex-1 justify-center gap-1 items-center relative">
            <button
              type="button"
              className="rounded-xl flex"
              onClick={() => saveSettingsToLocalStorage()}
            >
              Save
            </button>
            <div className="group">
              <InfoIcon className="w-6 h-6" color={settings.iconsColor} />
              <div className="absolute bottom-[100%] transform left-[0%] rounded-md w-full  translate-x-1/5  bg-gray-300 text-black p-2 opacity-0 font-normal text-sm transition-opacity duration-300 group-hover:opacity-100">
                Save settings for the next time you visit my portfolio.
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center relative  items-center gap-1">
            <button
              type="button"
              className=" rounded-xl"
              onClick={() => resetToDefaultValues()}
            >
              Default
            </button>
            <div className=" group">
              <InfoIcon className="w-6 h-6" color={settings.iconsColor} />

              <div className="absolute bottom-[100%] transform left-[0%] rounded-md w-full  translate-x-1/5  bg-gray-300 text-black p-2 opacity-0 font-normal text-sm transition-opacity duration-300 group-hover:opacity-100">
                Reset settings to their default values.
              </div>
            </div>
          </div>
          <div className="flex flex-1 relative justify-center items-center gap-1">
            <button
              type="button"
              className="  rounded-xl"
              onClick={() => setRandomColors()}
            >
              Random
            </button>
            <div className="group">
              <InfoIcon className="w-6 h-6" color={settings.iconsColor} />
              <div className="absolute bottom-[100%] transform left-[0%] rounded-md w-full  translate-x-1/5  bg-gray-300 text-black p-2 opacity-0 font-normal text-sm transition-opacity duration-300 group-hover:opacity-100">
                Generate random colors.
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center h-12 mt-4">
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
