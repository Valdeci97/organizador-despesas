import type { Theme } from '@mui/material';

const common = {
  borderRadius: (theme: Theme) => theme.spacing(1),
  fontSize: '20px',
  height: '50px',
  width: '100%',
};

export const useStyles = () => ({
  'dark-colored': {
    ...common,
    backgroundColor: (theme: Theme) => theme.palette.primary.main,
    color: (theme: Theme) => theme.palette.common.white,
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.palette.primary.main,
      opacity: 0.6,
    },
  },
  'dark-outlined': {
    ...common,
    border: (theme: Theme) => `solid 2.5px ${theme.palette.primary.main}`,
  },
  'light-colored': { ...common },
  'light-outlined': { ...common },
});
