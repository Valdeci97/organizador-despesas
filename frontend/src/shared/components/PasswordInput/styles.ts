import type { Theme } from '@mui/material';

export const useStyles = () => ({
  passwordIcon: {
    color: (theme: Theme) => theme.palette.common.white,
  },
});
