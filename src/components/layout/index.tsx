import Head from 'next/head'

import { ThemeProvider } from '@mui/material'

import { theme } from '../../styles/theme'
import Footer from './Footer'
import Navbar from './Navbar'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Quick Painters</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
