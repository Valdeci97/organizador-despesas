import MuiLink from '@mui/material/Link';

import Body from '../Body';

import type { LinkProps } from './types';

import { useStyles } from './styles';

export default function Link({ path, linkText }: Readonly<LinkProps>) {
  const style = useStyles();

  return (
    <MuiLink href={path} sx={style.anchor}>
      <Body variant='large'>{linkText}</Body>
    </MuiLink>
  );
}
