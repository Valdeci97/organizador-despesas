import { createTheme } from '@mui/material/styles';

export const darkModeTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: { fontSize: '20px' },
    },
  },
  palette: {
    mode: 'dark',
    background: {
      // default: '#080610',
      default: '#393E46',
      // default: '#373A40',
      // default: '#352F44',
    },
    common: { white: '#FFF' },
    error: {
      main: '#C1121F',
      // main: '#FF8303',
    },
    primary: {
      // main: '#43B27F',
      // main: '#411E8F',
      // main: '#222831',
      main: '#FD7014',
    },
  },
});
