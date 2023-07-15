'use client'
import { Button, Flex, Input, Text, chakra } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
export const AddCustomerComponent = (props: any) => {
  const { handleSubmit, onSubmit, control } = props
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <Flex my='6' gap='4' flexWrap='wrap' justifyContent='space-between'>
        <Flex w={{ base: 'full', md: '45%' }} direction='column'>
          <Text mb='2' fontWeight='semibold' fontSize='md'>
            نام و نام خانوادگی
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            name='fullName'
            render={({ field, fieldState }) => {
              return (
                <>
                  <Input {...field} />
                  {!!fieldState.error && (
                    <Text my='2' color='red.500'>
                      نام و نام خانوادگی الزامی است
                    </Text>
                  )}
                </>
              )
            }}
          />
        </Flex>
        <Flex w={{ base: 'full', md: '45%' }} direction='column'>
          <Text mb='2' fontWeight='semibold' fontSize='md'>
            نام فروشگاه
          </Text>
          <Controller
            control={control}
            name='storeName'
            render={({ field }) => {
              return (
                <>
                  <Input {...field} />
                </>
              )
            }}
          />
        </Flex>
      </Flex>
      <Flex my='6' gap='4' flexWrap='wrap' justifyContent='space-between'>
        <Flex w={{ base: 'full', md: '45%' }} direction='column'>
          <Text mb='2' fontWeight='semibold' fontSize='md'>
            شماره موبایل
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            name='mobileNumber'
            render={({ field, fieldState }) => {
              return (
                <>
                  <Input {...field} />
                  {!!fieldState.error && (
                    <Text my='2' color='red.500'>
                      شماره موبایل الزامی است
                    </Text>
                  )}
                </>
              )
            }}
          />
        </Flex>

        <Flex w={{ base: 'full', md: '45%' }} direction='column'>
          <Text mb='2' fontWeight='semibold' fontSize='md'>
            تلفن ثابت
          </Text>
          <Controller
            control={control}
            name='phoneNummber'
            render={({ field }) => {
              return (
                <>
                  <Input {...field} />
                </>
              )
            }}
          />
        </Flex>
      </Flex>
      <Flex my='6' gap='4' flexWrap='wrap' justifyContent='space-between'>
        <Flex w='full' direction='column'>
          <Text mb='2' fontWeight='semibold' fontSize='md'>
            آدرس
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            name='address'
            render={({ field, fieldState }) => {
              return (
                <>
                  <Input {...field} />
                  {!!fieldState.error && (
                    <Text my='2' color='red.500'>
                      آدرس الزامی است
                    </Text>
                  )}
                </>
              )
            }}
          />
        </Flex>
      </Flex>
      <Flex justifyContent={{ base: 'space-between', md: 'start' }} gap='2'>
        <Button
          textAlign='center'
          colorScheme='blue'
          justifyContent='flex-end'
          type='submit'
        >
          افزودن
        </Button>
      </Flex>
    </chakra.form>
  )
}
