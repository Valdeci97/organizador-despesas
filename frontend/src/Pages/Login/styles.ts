export const useStyles = () => ({
  loginContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    width: '50vw',
    '@media screen and (max-width: 900px)': {
      width: '100vw',
    },
  },
});
