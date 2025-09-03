import React from 'react';
import { useTheme } from './ThemeContexts';

const ThemeToggleButton = () => {
  const { state, dispatch } = useTheme();

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Current Theme: {state.theme} (Click to toggle)
    </button>
  );
};

export default ThemeToggleButton;
