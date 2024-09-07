import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { ThemeModeOptions } from '../../types';
import type { GlobalThemeValues } from './types';

type GlobalContextProps = {
  readonly children?: ReactNode;
};

const GlobalContext = createContext<GlobalThemeValues>({} as GlobalThemeValues);

export function GlobalContextProvider({ children }: GlobalContextProps) {
  const [theme, setTheme] = useState<ThemeModeOptions>('dark');

  const handleAppThemeChange = useCallback(
    (mode: ThemeModeOptions) => setTheme(mode),
    [],
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme: handleAppThemeChange,
    }),
    [theme, handleAppThemeChange],
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalContextProvider');
  }

  return context;
};
