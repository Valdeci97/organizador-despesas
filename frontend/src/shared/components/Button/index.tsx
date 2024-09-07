import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

import type { ButtonVariant } from './types';

import { useStyles } from './styles';

type ButtonProps = {
  variant?: ButtonVariant;
} & Omit<MuiButtonProps, 'variant'>;

export default function Button({
  variant = 'dark-colored',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const style = useStyles();
  return (
    <MuiButton sx={style[variant]} {...rest}>
      {children}
    </MuiButton>
  );
}
