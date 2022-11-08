import { ThemeProvider } from '@mui/material'

import { theme } from '../../styles/theme'
import Footer from './Footer'
import Navbar from './Navbar'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
