import { useForm } from 'react-hook-form'

export const useAddCustomer = () => {
  const { control, handleSubmit } = useForm<any>()

  const onSubmit = (e: any) => {
    console.log(e)
  }

  return {
    handleSubmit,
    onSubmit,
    control,
  }
}
