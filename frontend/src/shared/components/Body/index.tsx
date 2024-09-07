import Typography from '@mui/material/Typography';

import { useStyles } from './styles';
import { BodyProps } from './types';
import { PropsWithChildren } from 'react';

export default function Body({ variant, children }: PropsWithChildren<BodyProps>) {
  const style = useStyles();

  return <Typography sx={style[variant]}>{children}</Typography>;
}
