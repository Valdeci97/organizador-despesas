import Typography from '@mui/material/Typography';

import type { PropsWithChildren } from 'react';
import type { BodyProps } from './types';

import { useStyles } from './styles';

export default function Body({ variant, children }: PropsWithChildren<BodyProps>) {
  const style = useStyles();

  return <Typography sx={style[variant]}>{children}</Typography>;
}
