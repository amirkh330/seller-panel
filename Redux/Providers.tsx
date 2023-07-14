'use client'
import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'

export const Providers = ({ children }: any) => {
  return (
    <ChakraProvider>
      {/* <CacheProvider> */}
      {children}
      {/* </CacheProvider> */}
    </ChakraProvider>
  )
}
