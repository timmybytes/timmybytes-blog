import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [state, setState] = useState('');
  const sharedState = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee',
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555',
    },
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
