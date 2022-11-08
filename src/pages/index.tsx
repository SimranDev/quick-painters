import { useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import ServicesCard from '../components/cards/ServicesCard'
import Hero from '../components/Hero'
import QuoteForm from '../components/QuoteForm'
import { commercialServices, residentialServices, roofingServices } from '../utils/consts'

export default function Home() {
  const [run, setRun] = useState(false)

  setTimeout(() => {
    setRun(true)
  }, 1000)

  return (
    <>
      <Hero runTransition={run} />
      <Box sx={{ width: '100%', maxWidth: 'lg', marginX: 'auto', py: 10 }} id="services">
        <Grid container spacing={2} paddingX={{ xs: 5, md: 0 }}>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard services={commercialServices} title="COMMERCIAL" img="/images/commercial.jpg" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard services={residentialServices} title="RESIDENTIAL" img="/images/residential.jpg" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard services={roofingServices} title="ROOFING" img="/images/roofing.jpg" />
          </Grid>
        </Grid>
      </Box>
      <QuoteForm />
    </>
  )
}
