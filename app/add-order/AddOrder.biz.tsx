import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useAddOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>({})
  const [productList, setProductList] = useState<any>([])
  const [modalVisible, setModalVisible] = useBoolean()
  const { control, register, handleSubmit } = useForm<any>()

  const onSubmit = (e: any) => {
    setProductList((_prev: any) => [..._prev, e])
  }

  const productValidate = (p: any) => {
    return !productList.some((obj: any) => obj.product === p)
  }

  return {
    control,
    onSubmit,
    register,
    productList,
    handleSubmit,
    selectedProduct,
    productValidate,
    setSelectedProduct,
    modalVisible,
    setModalVisible,
  }
}
