import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export type GalleryProps = {}

export default function Gallery({}: GalleryProps) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <Typography>Gallery</Typography>
      <Typography fontSize="0.7rem">Under development</Typography>
    </Box>
  )
}
