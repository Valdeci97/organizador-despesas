import type { ThemeModeOptions } from '../shared';

import { darkModeTheme } from './dark-mode';
import { lightModeTheme } from './light-mode';

function isDarkMode(mode: ThemeModeOptions) {
  return mode === 'dark';
}

export const createAppTheme = (mode: ThemeModeOptions) => {
  if (isDarkMode(mode)) return darkModeTheme;
  return lightModeTheme;
};
