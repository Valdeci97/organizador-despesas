import Typrography from '@mui/material/Typography';

import type { PropsWithChildren } from 'react';
import type { HighlightsProps } from './types';

import { useStyles } from './styles';

export default function Highlights({
  variant,
  children,
}: PropsWithChildren<HighlightsProps>) {
  const style = useStyles();

  return <Typrography sx={style[variant]}>{children}</Typrography>;
}
