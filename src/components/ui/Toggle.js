import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

const Toggle = ({ label, defaultOn, onChange }) => {
  const { settings } = useContext(SettingsContext);
  const inputId = `toggle-${label.replace(/\s+/g, '').toLowerCase()}`; // Generate a unique input id

  return (
    <div className="flex items-center justify-between w-full"
    style={{ color: settings.primaryTextColor }}
    >
      <label
        htmlFor={inputId}
        className="flex items-center justify-between cursor-pointer w-full"
      >
        <span className="flex-1">{label}</span>
        <div className="relative flex">
          <input
            id={inputId}
            type="checkbox"
            className="sr-only"
            checked={defaultOn}
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className="block bg-gray1 w-14 h-8 rounded-full">
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                defaultOn ? 'translate-x-6' : ''
              }`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
