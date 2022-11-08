import emailjs from '@emailjs/browser'

import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './consts'
import { Quote } from './types'

export const sendEmail = (data: Quote) => {
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY).then(
    (result) => {
      console.log(result.text)
    },
    (error) => {
      console.log(error.text)
    }
  )
}

export const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element !== null) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
