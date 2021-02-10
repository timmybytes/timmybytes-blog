import { createContext, useContext, useState } from 'react';
// import React, { createContext, Component } from 'react';

// export const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: true,
//     light: {
//       syntax: '#555',
//       ui: '#ddd',
//       bg: '#eee',
//     },
//     dark: {
//       syntax: '#ddd',
//       ui: '#333',
//       bg: '#555',
//     },
//   };
//   render() {
//     return (
//       <ThemeContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

// export default ThemeContextProvider;

const AppContext = createContext();

export function AppWrapper({ children }) {
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
    toggleTheme() {
      const light = this.isLightTheme;
      console.log(light);

      // setState(!isLightTheme);
    },
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
