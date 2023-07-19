'use client'
import React from 'react'
import { chakra, Box, Heading, Text, Center, Image } from '@chakra-ui/react'
const notFound = () => {
  return (
    <Box
      textAlign='center'
      pt={{ base: 0, md: 66 }}
      m={{ base: '-4' }}
      bg='#e8f5fd'
    >
      <Center>
        <Image src={'/images/404.png'} my='4' />
      </Center>
      <Heading as='h1' size='2xl' color='brand.500'>
        404 - Page Not Found
      </Heading>
      <Text mt={8} fontSize='xl'>
        پروژه در حال تست وارزیابی می باشد
      </Text>
      <Text my={8} fontSize='medium'>
        اگه میخوای این مشکل بهم بگی باهام تماس بگیر
      </Text>
      <chakra.a color='blue' href='tel:09385440212'>
        09385440212
      </chakra.a>
    </Box>
  )
}

export default notFound
