import Typrography from '@mui/material/Typography';

import { PropsWithChildren } from 'react';

import { useStyles } from './styles';
import { HighlightsProps } from './types';

export default function Highlights({
  variant,
  children,
}: PropsWithChildren<HighlightsProps>) {
  const style = useStyles();

  return <Typrography sx={style[variant]}>{children}</Typrography>;
}
