import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TomanConvertor } from '../../Utils/helper'

export const useAddOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>({})
  const [productList, setProductList] = useState<any>([])
  const [modalVisible, setModalVisible] = useBoolean()
  const { control, register, handleSubmit } = useForm<any>()

  const onSubmit = (e: any) => {
    const productCost = selectedProduct.price * e.count
    const finalCost = e.discount
      ? productCost - (productCost * e.discount) / 100
      : productCost
    const product = [
      e.product,
      TomanConvertor(selectedProduct.price),
      e.count,
      e.discount,
      TomanConvertor(finalCost),
    ]
    console.log('====================================')
    console.log(product)
    console.log('====================================')
    setProductList((_prev: any) => [..._prev, product])
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
