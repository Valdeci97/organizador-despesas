import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { useGlobalContext } from '../shared';
import { createAppTheme } from '../theme';

type ProviderProps = {
  readonly children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  const { theme } = useGlobalContext();
  const appTheme = createAppTheme(theme);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
