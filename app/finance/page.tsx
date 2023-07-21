'use client'
import { Card, Flex, Heading, chakra, Text, Divider } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import { tableData, column } from '../../Utils/Constants'
import { TableComponent } from '../../components/Table/Table'

const page = () => {
  return (
    <chakra.div m='4'>
      <Text my='4' fontSize='x-large' fontWeight='bold'>
        مالی
      </Text>

      <Accordion>
        <AccordionItem mb="4">
          <AccordionButton bg='white' borderRadius='8'>
            <Flex justifyContent='space-between' alignItems='center' w='full'>
              <Flex alignItems='center'>
                <Text fontSize='lg' fontWeight='semibold'>
                  خرداد ۱۴۰۰
                </Text>
                <Divider orientation='vertical' h='8' mx='4' />
                <div>
                  <Text fontSize='sm' color='gray.900'>
                    کل فروش ماه
                  </Text>
                  <Text fontSize='sm' color='gray.600'>
                    100/000/00 تومان
                  </Text>
                </div>
              </Flex>
              <div>
                <Text fontSize='sm' color='gray.900'>
                  پور سانت ماه
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  5/000/00 تومان
                </Text>
              </div>
            </Flex>
            <AccordionIcon mr='6' />
          </AccordionButton>
          <AccordionPanel pb={4} bg='gray.50'>
            <TableComponent data={tableData} column={column} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb="4">
          <AccordionButton bg='white' borderRadius='8'>
            <Flex justifyContent='space-between' alignItems='center' w='full'>
              <Flex alignItems='center'>
                <Text fontSize='lg' fontWeight='semibold'>
                  تیر ۱۴۰۰
                </Text>
                <Divider orientation='vertical' h='8' mx='4' />
                <div>
                  <Text fontSize='sm' color='gray.900'>
                    کل فروش ماه
                  </Text>
                  <Text fontSize='sm' color='gray.600'>
                    100/000/00 تومان
                  </Text>
                </div>
              </Flex>
              <div>
                <Text fontSize='sm' color='gray.900'>
                  پور سانت ماه
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  5/000/00 تومان
                </Text>
              </div>
            </Flex>
            <AccordionIcon mr='6' />
          </AccordionButton>
          <AccordionPanel pb={4} bg='gray.50'>
            <TableComponent data={tableData} column={column} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb="4">
          <AccordionButton bg='white' borderRadius='8'>
            <Flex justifyContent='space-between' alignItems='center' w='full'>
              <Flex alignItems='center'>
                <Text fontSize='lg' fontWeight='semibold'>
                  مرداد ۱۴۰۰
                </Text>
                <Divider orientation='vertical' h='8' mx='4' />
                <div>
                  <Text fontSize='sm' color='gray.900'>
                    کل فروش ماه
                  </Text>
                  <Text fontSize='sm' color='gray.600'>
                    100/000/00 تومان
                  </Text>
                </div>
              </Flex>
              <div>
                <Text fontSize='sm' color='gray.900'>
                  پور سانت ماه
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  5/000/00 تومان
                </Text>
              </div>
            </Flex>
            <AccordionIcon mr='6' />
          </AccordionButton>
          <AccordionPanel pb={4} bg='gray.50'>
            <TableComponent data={tableData} column={column} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </chakra.div>
  )
}
export default page
