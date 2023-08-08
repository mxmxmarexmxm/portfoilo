import { createContext, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
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
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
