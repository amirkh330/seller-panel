'use client'
import { Card, Divider, Flex, Tag, Text } from '@chakra-ui/react'
import { TableComponent } from '../../../components/Table/Table'
import { FactorData, column } from '../../../Utils/Constants'

const page = () => {
  return (
    <>
      <Card gap='4' p='4'>
        <Flex justifyContent='space-between' mx='4' mt='4' alignItems='center'>
          <Text fontWeight='semibold' fontSize='sm'>
            شماره فاکتور: 10123400
          </Text>
          <Tag colorScheme='green'>پرداخت شده</Tag>
        </Flex>
        <Divider my='2' />
        <Flex my='3' gap='4' flexWrap='wrap' justifyContent='space-between'>
          <Flex w={{ base: 'full', md: '45%' }} direction='column'>
            <Text mb='4' fontWeight='normal' fontSize='sm' color='gray.600'>
              نام مشتری
            </Text>
            <Text mx='4' fontWeight='medium' fontSize='sm'>
              حسین نظری
            </Text>
          </Flex>
          <Flex w={{ base: 'full', md: '45%' }} direction='column'>
            <Text mb='2' fontWeight='normal' fontSize='sm' color='gray.600'>
              نام فروشگاه
            </Text>
            <Text mx='2' fontWeight='medium' fontSize='sm'>
              فروشگاه نظری
            </Text>
          </Flex>
        </Flex>
        <Flex gap='4' flexWrap='wrap' justifyContent='space-between'>
          <Flex w={{ base: 'full', md: '45%' }} direction='column'>
            <Text mb='2' fontWeight='normal' fontSize='sm' color='gray.600'>
              شماره تلفن همراه
            </Text>
            <Text
              mx='4'
              fontWeight='medium'
              fontSize='sm'
              dir='ltr'
              textAlign='end'
            >
              09127012300
            </Text>
          </Flex>
          <Flex w={{ base: 'full', md: '45%' }} direction='column'>
            <Text mb='2' fontWeight='normal' fontSize='sm' color='gray.600'>
              شماره تلفن فروشگاه
            </Text>
            <Text mx='4' fontWeight='medium' fontSize='sm'>
              --------
            </Text>
          </Flex>
        </Flex>
      </Card>
      <Card gap='4' p='4' mt='6'>
        <Flex mx='4' mt='8' justifyContent='space-between' alignItems='center'>
          <Text fontWeight='semibold' fontSize='sm'>
            فاکتور مشتری
          </Text>
          <Text fontWeight='semibold' fontSize='sm'>
            مبلغ کل :12/000/000 تومان
          </Text>
        </Flex>
        <Divider my='2' />
        <TableComponent data={FactorData} column={column} />
      </Card>
    </>
  )
}
export default page
