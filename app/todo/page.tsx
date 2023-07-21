'use client'
import React from 'react'
import {
  Flex,
  chakra,
  Text,
  Box,
  Tooltip,
  Card,
  Divider,
} from '@chakra-ui/react'
const sampleWeek = [
  { title: 'شنبه', color: 'red.300', rate: 30 },
  { title: ' یکشنبه', color: 'yellow.300', rate: 80 },
  { title: 'دوشنبه', color: 'green.300', rate: 60 },
  { title: 'سه شنبه', color: 'blue.300', rate: 20 },
  { title: 'چهارشنبه', color: 'gray.300', rate: 90 },
]
const page = () => (
  <chakra.div>
    <Card p='4' my='4'>
      <Text fontSize='medium' fontWeight='semibold' mb='4'>
        روند کاری ماه
      </Text>
      <Flex m='4' flexDirection='column' dir='ltr' mx='4'>
        <Flex
          h='20px'
          w='full'
          borderRadius='8'
          border='1px '
          alignItems='center'
          borderColor='gray.100'
        >
          <Flex
            w='100%'
            h='100%'
            sx={{
              background:
                'linear-gradient(0.25turn,red,orange, yellow,#c8d907,green)',
            }}
            borderRadius='8'
            position='relative'
          />
          <Tooltip label='فروش شما تا امروز ۶۰/۰۰۰/۰۰۰'>
            <Box
              border='1px solid gray'
              position='absolute'
              w='8'
              h='8'
              borderRadius='50%'
              bg='#f1f1f1'
              zIndex={10}
              left='60%'
            />
          </Tooltip>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center' mt='2'>
          <Text fontWeight='bold'>استارت ماه</Text>
          <Text fontWeight='bold'> هدف 100/000/000 فروش </Text>
        </Flex>
      </Flex>
    </Card>
    <Card p='4' my='4'>
      <Text fontSize='medium' fontWeight='semibold'  mb='10'>
        بونوس های این ماه
      </Text>
      <Text fontSize='medium' fontWeight='semibold' mb='4'>
        تعداد فروش در روز
      </Text>
      <Flex
        mb='12'
        h='20px'
        w='full'
        borderRadius='8'
        border='1px '
        alignItems='center'
        borderColor='gray.100'
      >
        <Flex
          w='100%'
          h='100%'
          sx={{
            background:
              'linear-gradient(0.25turn,red,orange, yellow,#c8d907,green)',
          }}
          borderRadius='8'
          position='relative'
        />
        <Tooltip label='50'>
          <Box
            border='1px solid gray'
            position='absolute'
            w='8'
            h='8'
            borderRadius='50%'
            bg='#f1f1f1'
            zIndex={10}
            left='30%'
          />
        </Tooltip>
      </Flex>
      <Text fontSize='medium' fontWeight='semibold' mb='4'>
        تعداد تماس ها در یک روز
      </Text>
      <Flex
        mb='12'
        h='20px'
        w='full'
        borderRadius='8'
        border='1px '
        alignItems='center'
        borderColor='gray.100'
      >
        <Flex
          w='100%'
          h='100%'
          sx={{
            background:
              'linear-gradient(0.25turn,red,orange, yellow,#c8d907,green)',
          }}
          borderRadius='8'
          position='relative'
        />
        <Tooltip label='50'>
          <Box
            border='1px solid gray'
            position='absolute'
            w='8'
            h='8'
            borderRadius='50%'
            bg='#f1f1f1'
            zIndex={10}
            left='80%'
          />
        </Tooltip>
      </Flex>
    </Card>
    <Card p='4' my='4'>
      <Text fontSize='medium' fontWeight='semibold' mb='4'>
        روند کاری در هفته
      </Text>
      <Flex w='full' h='200px' gap={{ base: 5, md: 20 }} alignItems='flex-end'>
        {sampleWeek.map((i) => {
          return (
            <Flex direction='column' h='full' justifyContent='end'>
              <Flex w='full' h={`${i.rate}%`} bg={i.color} />
              <Text>{i.title}</Text>
            </Flex>
          )
        })}
      </Flex>
    </Card>
  </chakra.div>
)
export default page
