'use client'
import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Flex,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBoolean,
} from '@chakra-ui/react'
import { ProductListColumn, ProductListData } from '../../Utils/Constants'
import { useState } from 'react'

const page = () => {
  const [sellMode, setSellMode] = useBoolean()
  const [list, setList] = useState<number[]>([])

  return (
    <div>
      <Card>
        <Flex justifyContent='space-between' m='4' mb='6'>
          <Text fontSize='lg' fontWeight='semibold'>
            لیست محصولات
          </Text>
          <Flex>
            <Button
              size='sm'
              colorScheme={'green'}
              variant={sellMode ? 'outline' : 'solid'}
              onClick={() => setSellMode.toggle()}
            >
              {sellMode ? 'حالت سفارش' : 'حالت مشاهده'}
            </Button>
            {sellMode && (
              <Button
                isDisabled={!list.length}
                size='sm'
                colorScheme='blue'
                mr='2'
              >
                پیش فاکتور
              </Button>
            )}
          </Flex>
        </Flex>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                {sellMode && <Td></Td>}
                {ProductListColumn.map((i, index) => {
                  return (
                    <Th
                      fontWeight='semibold'
                      color='gray.800'
                      fontSize='sm'
                      fontFamily='IRANSansXV'
                      key={index}
                    >
                      {i}
                    </Th>
                  )
                })}
              </Tr>
            </Thead>
            <Tbody>
              <CheckboxGroup>
                {ProductListData.map((i: any) => (
                  <Tr>
                    {sellMode && (
                      <Td>
                        <Checkbox
                          id={i.id}
                          isDisabled={!i.isExist}
                          onChange={() => setList((_prev) => [..._prev, i.id])}
                        />
                      </Td>
                    )}
                    <Td>{i.title}</Td>
                    <Td>{i.price}</Td>
                    <Td>
                      <Tag
                        borderRadius='4'
                        colorScheme={i.isExist ? 'green' : 'red'}
                      >
                        {i.isExist ? 'موجود' : 'ناموجود'}
                      </Tag>
                    </Td>
                    <Td>{i.discount ? i.discount : 'بدون تخفیف'}</Td>
                    <Td>{i.view}</Td>
                  </Tr>
                ))}
              </CheckboxGroup>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default page
