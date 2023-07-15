'use client'
import { useAddCustomer } from './AddCustomer.biz'
import { AddCustomerComponent } from '../../components/AddCustomer/AddCustomerComponent'
import { Card, chakra, Text } from '@chakra-ui/react'
const page = () => {
  const { handleSubmit, onSubmit, control } = useAddCustomer()
  return (
    <chakra.div>
      <Card p='6' mb='4'>
        <Text fontWeight='bold' fontSize='lg' mb='4' color='gray.700'>
          معرفی مشتری
        </Text>
        <AddCustomerComponent
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
        />
      </Card>
    </chakra.div>
  )
}
export default page
