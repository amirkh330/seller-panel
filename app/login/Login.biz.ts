import { useForm, SubmitHandler } from 'react-hook-form'
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>()

  const onSubmit = (e: any) => {
    console.log(e)
  }
  return { handleSubmit, onSubmit, register }
}
