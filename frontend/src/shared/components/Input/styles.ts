import type { Theme } from '@mui/material';

export const useStyles = () => ({
  container: {
    '& .MuiFormHelperText-root.Mui-error': { backgrounColor: 'transparent !important' },
  },
  input: {
    borderRadius: (theme: Theme) => theme.spacing(1),
    color: (theme: Theme) => theme.palette.text.primary,
  },
  helperText: { backgroundColor: 'transparent !important', fontSize: '16px' },
  label: {
    fontSize: '18px',
    '& .MuiFormLabel-asterisk': {
      color: (theme: Theme) => theme.palette.primary.main,
      fontSize: '20px',
      verticalAlign: 'top',
      marginLeft: '3px',
      marginRight: '3px',
      backgroundColor: 'transparent',
    },
  },
});
