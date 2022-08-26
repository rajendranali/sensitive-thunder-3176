import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai' 
import {GrAdd } from 'react-icons/gr' 
const TagCard = () => {
  return (
    <Box m={4}  p={4} rounded={8} bgColor={'gray.100'}>
        <Flex justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} color={'grey'} fontSize={20}>tageName</Text>
            <ButtonGroup>
                <Button border={'2px solid'} borderColor={'#b7b8b8'} _hover={'grey'} bgColor={'white'} ><GrAdd/></Button>
                <Button  border={'2px solid'} borderColor={'#b7b8b8'} _hover={'grey'} bgColor={'white'}><AiOutlineDelete/></Button>
            </ButtonGroup>
        </Flex>
    </Box>
  )
}

export default TagCard