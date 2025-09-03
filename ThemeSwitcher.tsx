// ThemeSwitcher.tsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
