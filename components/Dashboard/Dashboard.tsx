'use client'
import { Card, Flex, Text } from '@chakra-ui/react'
import { TableComponent } from '../Table/Table'
import { BestSellers } from './components/BestSellers/BestSellers'
import Link from 'next/link'
import { column, data } from '../../Utils/Constsnt'

const Dashboard = () => {
  return (
    <Flex direction='column'>
      <Flex gap='4' flexDir={{ base: 'column', md: 'row' }}>
        <Card
          p='4'
          w={{ base: 'full', md: '50%' }}
          sx={{
            backgroundColor: '#ff9d5e',
            backgroundImage: 'linear-gradient(62deg, #ff9d5e 0%, #F7CE68 100%)',
          }}
        >
          <Flex
            align='center'
            justifyContent='space-between'
            p='4'
            fontSize='lg'
            fontWeight='bold'
            color='white'
          >
            <Text>فروش ماهیانه:</Text>
            <Text>18/000/000</Text>
          </Flex>
        </Card>
        <Card
          p='4'
          w={{ base: 'full', md: '50%' }}
          sx={{
            backgroundColor: '#8BC6EC',
            backgroundImage:
              'linear-gradient(135deg, #8BC6EC 0%, #4954ec 100%)',
          }}
        >
          <Flex
            align='center'
            justifyContent='space-between'
            p='4'
            fontSize='lg'
            fontWeight='bold'
            color='white'
          >
            <Text>سود ماه:</Text>
            <Text>18/000/000</Text>
          </Flex>
        </Card>
      </Flex>
      <Card gap='4' p='4' mt='4'>
        <Text>آخرین سفارشات</Text>
        <TableComponent data={data} column={column} />
      </Card>
      <Flex gap='4' mt='4' flexDir={{ base: 'column', md: 'row' }}>
        <Card
          w={{ base: 'full', md: '50%' }}
          as={Link}
          sx={{
            backgroundColor: '#ff9d5e',
            backgroundImage: 'linear-gradient(62deg, #ff9d5e 0%, #F7CE68 100%)',
          }}
          href='/add-order'
        >
          <Flex align='center' justifyContent='center' p='8'>
            <Text fontSize='lg' fontWeight='bold' color='white'>
              ثبت سفارش جدید
            </Text>
          </Flex>
        </Card>
        <Card
          as={Link}
          href='/offeres'
          w={{ base: 'full', md: '50%' }}
          sx={{
            backgroundColor: '#8BC6EC',
            backgroundImage:
              'linear-gradient(135deg, #8BC6EC 0%, #4954ec 100%)',
          }}
        >
          <Flex align='center' justifyContent='center' p='8'>
            <Text fontSize='lg' fontWeight='bold' color='white'>
              تخفیف های ویژه
            </Text>
          </Flex>
        </Card>
      </Flex>
      <BestSellers />
    </Flex>
  )
}

export default Dashboard
