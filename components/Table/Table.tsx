import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

export const TableComponent = ({ data, column }: any) => {
  return (
    <TableContainer>
      <Table variant='striped'>
        <Thead>
          <Tr>
            {column.map((col: any, index: number) => (
              <Th fontWeight='semibold' color="gray.800" fontSize='sm' fontFamily='IRANSansXV' key={index}>
                {col}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row: any, index: number) => (
            <Tr key={index}>
              {row.map((tr: any, number: number) => (
                <Td key={number}>{tr}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
