'use client'
import React from 'react'
import { Box, Card, Flex, Text } from '@chakra-ui/react'
export const BestSellers = () => {
  return (
    <Card p='4' gap='4' mt='4' h='350px'>
      <Text>برترین فروشنده:</Text>
      <Flex gap='4' justifyContent='space-evenly' h='100%'>
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Text mb='2'>محمد حسینی</Text>
            <Text mb='8'>10/000/000</Text>
          </Box>
          <Card w='60%' h='35%' bg='red.400' />
        </Flex>
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Text mb='2'>محمد حسینی</Text>
            <Text mb='8'>10/000/000</Text>
          </Box>
          <Card w='60%' h='80%' bg='yellow.400' />
        </Flex>
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Text mb='2'>محمد حسینی</Text>
            <Text mb='8'>10/000/000</Text>
          </Box>
          <Card w='60%' h='50%' bg='blue.400' />
        </Flex>
      </Flex>
    </Card>
  )
}
