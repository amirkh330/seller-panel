'use client'
import { useForm } from 'react-hook-form'
import { customers } from '../../Utils/Constants'
import { useRouter } from 'next/navigation'
export const useAddCustomer = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm<any>()

  const onSubmit = (e: any) => {
    const value = String(customers.length + 1)
    customers.push({ label: e.fullName, value })
    router.push(`/add-order?id=${value}`)
  }

  return {
    handleSubmit,
    onSubmit,
    control,
  }
}
