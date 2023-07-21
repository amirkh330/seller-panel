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
} from '@chakra-ui/react'
import React from 'react'
import { TableComponent } from '../Table/Table'
import { factorColumn } from '../../Utils/Constants'

export const ModalCheckOrder = (props: any) => {
  const { modalCheckVisible, setModalCheckVisible, productList } = props
  return (
    <Modal
      isOpen={modalCheckVisible}
      onClose={setModalCheckVisible.off}
      size='5xl'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>چک کردن نهایی</ModalHeader>
        <ModalCloseButton w='95%' justifyContent='end' />
        <ModalBody>
          <TableComponent data={productList} column={factorColumn} />
          <Flex my='5'>
            <Button colorScheme='blue'>ایجاد فاکتور</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
