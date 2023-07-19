import {
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { TableComponent } from '../Table/Table'
const column = ['محصول', 'تعداد', 'تخفیف']
export const TemporaryFactorTable = ({ productList }: any) => (
  <Card p={{ base: 3, md: 6 }} mb='4'>
    <Text my='4' fontWeight='semibold' fontSize='md'>
      پیش فاکتور
    </Text>
    <TableComponent data={productList} column={column} />
  </Card>
)
