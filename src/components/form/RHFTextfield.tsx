// form
import { Controller, useFormContext } from 'react-hook-form'

// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField'

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string
}

export default function RHFTextField({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          sx={{
            '& .MuiFormHelperText-root': {
              position: 'absolute',
              bottom: '-1.2rem',
            },
            color: '#FFFFFF',
          }}
          {...other}
        />
      )}
    />
  )
}
