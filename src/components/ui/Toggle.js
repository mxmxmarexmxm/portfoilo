import React from 'react';

const Toggle = ({ label, defaultOn, onChange }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <label
        htmlFor="toggle"
        className="flex items-center justify-between cursor-pointer w-full"
      >
        <span className="text-white flex-1">{label}</span>
        <div className="relative flex">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={defaultOn}
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full">
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
