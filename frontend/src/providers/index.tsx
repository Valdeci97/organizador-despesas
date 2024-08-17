import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme';

type ProviderProps = {
  readonly children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
