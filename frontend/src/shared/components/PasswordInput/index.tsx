import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, type TextFieldProps } from '@mui/material';
import { useState } from 'react';

import Input from '../Input';
import { useStyles } from './styles';

export default function PasswordInput(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const style = useStyles();

  const handleClick = () => setShowPassword((prev) => !prev);
  const handleMouseDown = () => setShowPassword((prev) => !prev);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClick}
              onMouseDown={handleMouseDown}
              edge='end'
              sx={style.passwordIcon}>
              {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
