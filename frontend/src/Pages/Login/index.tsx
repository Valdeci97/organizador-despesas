import Grid from '@mui/material/Grid';
import LoginForm from '../../components/LoginForm';
import { useStyles } from './styles';

export default function Login() {
  const style = useStyles();

  return (
    <Grid container>
      <Grid item sx={style.loginContainer}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
