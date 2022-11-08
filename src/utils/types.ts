import * as yup from 'yup'

// regex for new zealand phone numbers
const phoneRegex = /^(\+64|64|0)2\d{7,9}$/

export const quoteSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  service: yup.string(),
  phoneNumber: yup.string().required('Phone number is required').matches(phoneRegex, 'Phone number is invalid'),
  jobDescription: yup.string().required('Job description is required'),
})

export type Quote = yup.InferType<typeof quoteSchema>
