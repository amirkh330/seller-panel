import { useBoolean } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TomanConvertor } from '../../Utils/helper'
import { useSearchParams } from 'next/navigation'
import { customers } from '../../Utils/Constants'

export const useAddOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>({})
  const [selectedCustomer, setSelectedCustomer] = useState<any>({})
  const { control, register, handleSubmit } = useForm<any>()
  const [productList, setProductList] = useState<any>([])
  const [modalVisible, setModalVisible] = useBoolean()
  const [modalCheckVisible, setModalCheckVisible] = useBoolean()
  const search = useSearchParams()
  const id = search.get('id')

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
    setProductList((_prev: any) => [..._prev, product])
  }

  const productValidate = (p: any) => {
    return !productList.some((obj: any) => obj.product === p)
  }

  useEffect(() => {
    id && setSelectedCustomer(customers.find((c) => c.value == id))
  }, [])

  const AddCustomer = (e: any) => {
    const value = String(customers.length + 1)
    const customer = { label: e.fullName, value }
    customers.push(customer)
    setSelectedCustomer(customer)
    setModalVisible.off()
  }

  return {
    control,
    onSubmit,
    AddCustomer,
    register,
    productList,
    handleSubmit,
    selectedProduct,
    productValidate,
    setSelectedProduct,
    modalVisible,
    selectedCustomer,
    setSelectedCustomer,
    setModalVisible,
    modalCheckVisible,
    setModalCheckVisible,
  }
}
