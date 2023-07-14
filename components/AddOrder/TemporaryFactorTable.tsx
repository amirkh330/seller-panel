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
const column = ['محصول', 'تعداد', 'تخفیف']
export const TemporaryFactorTable = ({ productList }: any) => (
  <Card p={{ base: 3, md: 6 }} mb='4'>
    <Text my='4' fontWeight='semibold' fontSize='md'>
      پیش فاکتور
    </Text>
    <TableContainer>
      <Table variant='striped'>
        <Thead>
          <Tr>
            {column.map((col: any, index: number) => (
              <Th
                fontWeight='semibold'
                color='gray.800'
                fontSize='sm'
                fontFamily='IRANSansXV'
                key={index}
              >
                {col}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {productList.map((tr: any) => {
            return (
              <Tr>
                <Td>{tr.product}</Td>
                <Td>{tr.count}</Td>
                <Td>{tr.discount ?? '----'}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  </Card>
)
