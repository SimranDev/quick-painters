import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { services } from '../utils/consts'
import { Quote, quoteSchema } from '../utils/types'
import { sendEmail } from '../utils/utilities'
import FormProvider from './form/FormProvider'
import RHFSelect from './form/RHFSelect'
import RHFTextField from './form/RHFTextfield'

export type QuoteFormProps = {}

export default function QuoteForm({}: QuoteFormProps) {
  const [isEmailSent, setIsEmailSent] = useState(false)
  // const scrollRef = useRef<HTMLDivElement>()

  const methods = useForm<Quote>({
    resolver: yupResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      jobDescription: '',
    },
  })

  const { reset, handleSubmit } = methods

  const onSubmit = async (data: Quote) => {
    try {
      sendEmail(data)
      reset()
      setIsEmailSent(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ position: 'relative', height: '200px', width: '100%' }}>
        <Image
          alt="Mountains"
          src="/images/block.png"
          fill
          sizes="100vw"
          quality={100}
          style={{ objectFit: 'fill', position: 'absolute', top: 10 }}
        />
      </Box>
      <Box sx={{ backgroundColor: '#9e0059', paddingY: 10 }} id="quote-form">
        <Box maxWidth="lg" marginX="auto" padding={{ lg: 4, xs: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                }}
              >
                <RHFTextField name="name" label="Name" />
                <RHFTextField name="email" label="Email Address" />
                <RHFTextField name="phoneNumber" label="Phone Number" />
                <RHFSelect name="services" label="Services" placeholder="Services">
                  <option value="" />
                  {services.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </RHFSelect>
              </Box>
              <RHFTextField name="jobDescription" label="Job Description" sx={{ mt: 3 }} multiline rows={3} />

              <Stack alignItems="flex-end" sx={{ mt: 3 }} gap={2}>
                <Button variant="contained" type="submit">
                  Send
                </Button>
                <Typography color="success">{isEmailSent ? 'Great! We have received your request' : ''}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </FormProvider>
  )
}
