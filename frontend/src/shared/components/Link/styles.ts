import type { Theme } from '@mui/material';

export const useStyles = () => ({
  anchor: {
    color: (theme: Theme) => theme.palette.common.white,
    fontSize: '24px',
    fontWeight: 700,
    textDecoration: 'none',
  },
});
