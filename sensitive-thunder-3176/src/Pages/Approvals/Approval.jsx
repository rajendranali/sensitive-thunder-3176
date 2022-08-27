import { Box, Button, Container, Flex, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  
  TableContainer,
} from '@chakra-ui/react'
const Approval = () => {
  return (
    <Box m={4}>
      <Text color={'gray.400'} fontSize={'2xl'}>Daily approvals</Text>
<Flex  gap={8} p={8}  bgColor={'gray.100'}>
<Box>

        <label>TimeFrame</label>
      <Flex>

        <Input aria-label='Start' w={40} type={'datetime-local'}/>
        <Input w={40} type={'datetime-local'}/>
      </Flex>
</Box>
<Box>

        <label>Status</label>
      <Flex>
      <Select>
        <option>All Statuses</option>
        <option>Approved</option>
        <option>Open</option>
        <option>Pending</option>
        <option>Rejected</option>
        </Select>  
      </Flex>
</Box>

</Flex>
<TableContainer border={'1px solid'} borderColor={'gray.300'} rounded={10} py={8}>
  <Table size='sm' >
    <Thead >
      <Tr>
        <Th>Period</Th>
        <Th>Total Time</Th>
        <Th>Status</Th>
        <Th>Last Action</Th>
        <Th>Approver</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Aug 23, 2022</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td><Button color={'white'} bgColor={'orange.300'}>Pending Approval</Button></Td>
      </Tr>
      <Tr>
      <Td>Aug 23, 2022</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td><Button color={'white'} bgColor={'orange.300'}>Pending Approval</Button></Td>
      </Tr>
      <Tr>
      <Td>Aug 23, 2022</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td>2m</Td>
        <Td><Button color={'white'} bgColor={'orange.300'}>Pending Approval</Button></Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

    </Box>
  )
}

export default Approval