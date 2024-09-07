export const useStyles = () => ({
  form: {
    height: '40%',
    maxWidth: '750px',
    width: '60%',
    '@media screen and (max-width: 400px)': {
      width: '95%',
    },
    '@media screen and (min-width: 401px) and (max-width: 600px)': {
      width: '85%',
    },
    '@media screen and (min-width: 601px) and (max-width: 900px)': {
      width: '75%',
    },
    '@media screen and (min-width: 901px) and (max-width: 1200px)': {
      width: '70%',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100%',
    padding: '0 15px',
  },
});
