'use client'
import React from 'react'
import { Card, Text } from '@chakra-ui/react'
import { TableComponent } from '../../components/Table/Table'
import { column, tableData } from '../../Utils/Constsnt'

const page = () => {
  return (
    <Card gap='4' p='4' mt='4'>
      <Text fontWeight='bold' fontSize='lg' mb='4' color='gray.700'>
        آخرین سفارشات
      </Text>
      <TableComponent data={tableData} column={column} />
    </Card>
  )
}
export default page
