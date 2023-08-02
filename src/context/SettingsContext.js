import { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fps: 23,
    color: '#292727',
    charset: 'M',
    size: 12,
    animation: true,
  });
  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
