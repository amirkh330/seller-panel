'use client'
import { Center, Input, Box, Button, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import { useLogin } from './Login.biz'

const Login = () => {
    const { handleSubmit, onSubmit,register } = useLogin()
  return (
    <Center h='full' mx={{ base: '9', md: '5' }}>
      <Box
        p='4'
        bg='white'
        boxShadow='md'
        borderRadius='8'
        border='1px solid'
        justifyContent='center'
        borderColor='blackAlpha.200'
        h={{base:'50%',md:"40%"}}
        w={{base:'full',md:'45%'}}
      >
        <Text alignItems='center' fontSize='large' fontWeight='bold' mx='2'>ورود به حساب کاربری</Text>
        <chakra.form mt="10%" onSubmit={handleSubmit(onSubmit)}> 
        <Text fontSize='md' fontWeight='medium' mt='6' mb='2'>نام کاربری</Text>
        <Input {...register("phone")} placeholder='مویابل یا ایمیل خود را وارد کنید' />
        <Text fontSize='md' fontWeight='medium' mt='6' mb='2'>رمز عبور</Text>
        <Input {...register("password")}  mb='4' placeholder='رمز عبور خود را وارد کنید' type='password'/>
        <Button mt="6" w='full' colorScheme='blue' type="submit">ورود</Button>
        <Text mt='4'_hover={{color:'blue.600' }} cursor='pointer' color='blue.500' fontSize='md' fontWeight='medium' mb='2'>فراموشی رمز عبور</Text>
      </chakra.form>
      </Box>
    </Center>
  )
}

export default Login
