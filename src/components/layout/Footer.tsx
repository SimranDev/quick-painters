import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export type FooterProps = {}

export default function Footer({}: FooterProps) {
  return (
    <Stack height="6rem" gap={0.2} sx={{ backgroundColor: 'primary.main' }} justifyContent="center" alignItems="center">
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <IconButton sx={{ color: 'white' }}>
          <WhatsAppIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <FacebookIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <InstagramIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Stack>

      <Typography variant="subtitle2" sx={{ opacity: 0.5, fontSize: '0.8rem', color: 'white' }} textAlign="center">
        © Copyright 2022 Housing Master Ltd trading as Quick Painters. All Rights Reserved.
      </Typography>
    </Stack>
  )
}
