import { TextField, type TextFieldProps } from '@mui/material';
import { useStyles } from './styles';

export default function Input(props: TextFieldProps) {
  const style = useStyles();

  return (
    <TextField
      {...props}
      fullWidth
      variant='outlined'
      size='medium'
      inputProps={{ sx: style.input }}
      FormHelperTextProps={{ sx: style.helperText }}
      InputLabelProps={{ sx: style.label }}
      sx={style.container}
    />
  );
}
