'use client'
import {
  Button,
  Card,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  chakra,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { Controller } from 'react-hook-form'
import { customers, factorColumn, products } from '../../Utils/Constants'
import { AddCustomerComponent } from '../../components/AddCustomer/AddCustomerComponent'
import { TableComponent } from '../../components/Table/Table'
import { useAddOrder } from './AddOrder.biz'
import { ModalCheckOrder } from '../../components/AddOrder/ModalCheckOrder'

const AddOrder = () => {
  const {
    control,
    onSubmit,
    register,
    productList,
    handleSubmit,
    selectedProduct,
    productValidate,
    setSelectedProduct,
    modalVisible,
    setModalVisible,
    AddCustomer,
    selectedCustomer,
    setSelectedCustomer,
    modalCheckVisible,
    setModalCheckVisible,
  } = useAddOrder()

  return (
    <chakra.div p={{ base: '1', md: '4' }} gap='4'>
      <Text fontWeight='bold' fontSize='lg' mb='4' color='gray.700'>
        ثبت سفارش
      </Text>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Card p='6' mb='4'>
          <Flex flexDir='column' justifyContent='space-between'>
            <Flex
              w='full'
              justifyContent='space-between'
              alignItems='center'
              mb='4'
            >
              <Text mb='2' fontWeight='semibold' fontSize='md'>
                مشتری
              </Text>
              <Button size='sm' colorScheme='blue' onClick={setModalVisible.on}>
                ایجاد مشتری جدید
              </Button>
            </Flex>
            <Select
              options={customers}
              value={selectedCustomer}
              placeholder='مشتری مورد نظر'
              onChange={(e) => setSelectedCustomer(e)}
            />
          </Flex>
        </Card>
        <Card p='6' mb='4'>
          <Flex my='6' gap='4' flexWrap='wrap' justifyContent='space-between'>
            <Flex w={{ base: 'full', md: '45%' }} direction='column'>
              <Text mb='2' fontWeight='semibold' fontSize='md'>
                محصول
              </Text>
              <Controller
                control={control}
                rules={{ required: true, validate: productValidate }}
                name='product'
                render={({ field: { onChange, value }, fieldState }) => {
                  return (
                    <>
                      <Select
                        value={value?.value}
                        onChange={(e: any) => {
                          onChange(e.label)
                          setSelectedProduct(e)
                        }}
                        placeholder='محصول مورد نظر'
                        options={products.map((i) => {
                          return { label: i.title, value: i.id, ...i }
                        })}
                      />
                      {!!fieldState.error && (
                        <Text my='2' color='red.500'>
                          محصول مورد نظر تکراری است
                        </Text>
                      )}
                    </>
                  )
                }}
              />
            </Flex>
            <Flex w={{ base: '45%', md: '25%' }} direction='column'>
              <Text mb='2' fontSize='md' defaultValue={0} fontWeight='semibold'>
                تعداد
              </Text>

              <Controller
                control={control}
                rules={{ required: true }}
                name='count'
                render={({ field: { onChange, value, ref } }) => {
                  return (
                    <NumberInput
                      value={value?.count}
                      placeholder='تعداد'
                      onChange={(e) => onChange(e)}
                    >
                      <NumberInputStepper dir='rtl'>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                      <NumberInputField dir='ltr' {...register('count')} />
                    </NumberInput>
                  )
                }}
              />
            </Flex>
            <Flex w={{ base: '45%', md: '25%' }} direction='column'>
              <Text mb='2' fontWeight='semibold' fontSize='md'>
                تخفیف
              </Text>

              <Controller
                control={control}
                name='discount'
                render={({ field: { onChange, value } }) => {
                  console.log(value)

                  return (
                    <Select
                      value={value?.label}
                      placeholder='تخفیف'
                      onChange={(e: any) => onChange(e?.label)}
                      isDisabled={!selectedProduct?.discount}
                      options={selectedProduct?.discount?.map((i: any) => {
                        return { label: i, value: 1 }
                      })}
                    />
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
            {productList.length ? (
              <Button
                variant='outline'
                onClick={() => setModalCheckVisible.on()}
              >
                ایجاد لینک پرداخت
              </Button>
            ) : null}
          </Flex>
        </Card>
      </chakra.form>
      {productList.length ? (
        <Card mt='4'>
          <TableComponent data={productList} column={factorColumn} />
        </Card>
      ) : null}
      {modalVisible && (
        <Modal isOpen={modalVisible} onClose={setModalVisible.off} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>معرفی مشتری</ModalHeader>
            <ModalCloseButton w='95%' justifyContent='end' />
            <ModalBody>
              <AddCustomerComponent onSubmit={AddCustomer} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {modalCheckVisible && (
        <ModalCheckOrder
          modalCheckVisible={modalCheckVisible}
          setModalCheckVisible={setModalCheckVisible}
          productList={productList}
        />
      )}
    </chakra.div>
  )
}
export default AddOrder
