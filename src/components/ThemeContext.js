// ThemeContext.js
import React, { createContext } from 'react';

export const ThemeContext = createContext(); // Create context object

export const ThemeProvider = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState('light');

  return (
    <ThemeContext.Provider value={{ selectedMode, setSelectedMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
