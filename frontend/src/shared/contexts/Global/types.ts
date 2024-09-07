import type { ThemeModeOptions } from '../../types';

export type GlobalThemeValues = {
  theme: ThemeModeOptions;
  setTheme: (mode: ThemeModeOptions) => void;
};
