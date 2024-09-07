import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Body, Button, Input, PasswordInput } from '../../shared';

import { loginSchema, type Login } from './validator';
import { useStyles } from './styles';

export default function LoginForm() {
  const style = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
    mode: 'all',
  });

  const onSubmit = async (data: Login) => {
    console.log('submit');

    console.log(data);
  };

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={style.form}>
      <Grid container direction='column' spacing={3} sx={style.container}>
        <Grid item xs={6} sm={9} xl={12} margin='15px 0'>
          <Input
            name={register('email').name}
            inputRef={register('email').ref}
            onBlur={register('email').onBlur}
            label='Email'
            placeholder='araujo.goku@gmail.com'
            error={!!errors.email}
            helperText={errors.email?.message ?? ''}
            onChange={register('email').onChange}
            required
          />
        </Grid>
        <Grid item xs={6} sm={9} xl={12}>
          <PasswordInput
            name={register('password').name}
            inputRef={register('password').ref}
            onBlur={register('password').onBlur}
            label='Senha'
            placeholder='********'
            error={!!errors.password}
            helperText={errors.password?.message ?? ''}
            onChange={register('password').onChange}
            required
          />
        </Grid>
        <Grid item xs={6} sm={9} xl={12} position='relative' bottom={0}>
          <Button type='submit'>
            <Body variant='large'>Entrar</Body>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
