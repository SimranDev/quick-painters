// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
  ref?: any
}

export default function FormProvider({ children, onSubmit, methods, ref }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} ref={ref}>
        {children}
      </form>
    </Form>
  )
}
