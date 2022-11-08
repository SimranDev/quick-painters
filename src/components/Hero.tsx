import Image from 'next/image'
import Link from 'next/link'

import FormatPaintIcon from '@mui/icons-material/FormatPaint'
import { Grow, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styles from '../styles/styles.module.css'
import { theme } from '../styles/theme'
import { scrollTo } from '../utils/utilities'

export type HeroProps = {
  runTransition: boolean
}

export default function Hero({ runTransition = false }: HeroProps) {
  return (
    <div className={styles.bgWrap}>
      <Image src="/images/banner.png" alt="Banner" fill sizes="100vw" quality={100} style={{ objectFit: 'cover' }} />
      <Box
        sx={{
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          marginX: 'auto',
          zIndex: 1,
        }}
      >
        <Stack
          gap={3}
          sx={{
            fontWeight: '900',
            maxWidth: 'lg',
            marginX: 'auto',
            height: '100%',
            padding: { xs: 2, sm: 4 },
            zIndex: 1,
            color: 'info.main',
          }}
          justifyContent="center"
        >
          <div>
            <Typography variant="h6" fontWeight="600">
              Commercial & Residential
            </Typography>

            <Typography variant="h1" fontWeight="600" fontSize={{ xs: '2.5rem', sm: '3.2rem' }}>
              Painting Services
            </Typography>
          </div>
          <Link href="tel:0224708620" style={{ color: '#10069F' }}>
            <Typography variant="h5" fontWeight="600">
              Call or WhatsApp
            </Typography>{' '}
          </Link>
          <Grow timeout={300} in={runTransition} easing={theme.transitions.easing.easeIn}>
            <Button
              variant="contained"
              sx={{ width: '10rem', fontWeight: '600', fontSize: '1rem' }}
              onClick={() => scrollTo('quote-form')}
              endIcon={<FormatPaintIcon />}
            >
              Get a quote
            </Button>
          </Grow>
        </Stack>
      </Box>
    </div>
  )
}
