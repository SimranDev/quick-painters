import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export type AboutProps = {}

export default function About({}: AboutProps) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <Typography>About Us</Typography>
      <Typography fontSize="0.7rem">Under development</Typography>
    </Box>
  )
}
