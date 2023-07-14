import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useAddOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>({})
  const [productList, setProductList] = useState<any>([])
  const {
    control,
    register,
    reset,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<any>()

  const onSubmit = (e: any) => {
    setProductList((_prev: any) => [..._prev, e])
  }

  const handleReset = () => {
    setValue('product', 0)
    setValue('count', 0)
    setValue('discount', 0)
  }

  return {
    control,
    onSubmit,
    register,
    setError,
    handleReset,
    productList,
    clearErrors,
    handleSubmit,
    selectedProduct,
    setSelectedProduct,
  }
}
