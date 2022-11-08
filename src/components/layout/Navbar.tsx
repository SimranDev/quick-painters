import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { alpha } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { scrollTo } from '../../utils/utilities'

export type NavbarProps = {}

const pages = ['Services', 'Gallery', 'About Us']

export default function Navbar({}: NavbarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(6px)',
        backgroundColor: alpha('#FFFFFF', 0.5),
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/">
            <Image src="/images/logo.svg" alt="Quick Painters" quality={100} width={90} height={50} />
          </Link>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, color: 'info.main', marginLeft: 'auto' }}>
            <IconButton size="large" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              disableScrollLock
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu()
                  scrollTo('services')
                }}
              >
                <Typography textAlign="center" color="primary">
                  Services
                </Typography>
              </MenuItem>
              <Link href="/gallery" style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="primary">
                    Gallery
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="primary">
                    About Us
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginLeft: 'auto',
              color: 'info.main',
            }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu()
                scrollTo('services')
              }}
              sx={{ my: 2, fontWeight: '600', display: 'block' }}
            >
              Services
            </Button>
            <Link href="/gallery" style={{ textDecoration: 'none' }}>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, fontWeight: '600', display: 'block' }}>
                Gallery
              </Button>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, fontWeight: '600', display: 'block' }}>
                About Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
