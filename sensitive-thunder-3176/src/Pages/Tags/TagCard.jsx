import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai' 
import {GrAdd } from 'react-icons/gr' 
import { useSelector } from 'react-redux'
const TagCard = ({tagName,key}) => {
  const tags = useSelector((state) => state.AppReducer.tags);
  console.log(tags)

  return (
    <Box key={key} m={4}  p={4} rounded={8} bgColor={'gray.100'}>
        <Flex justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} color={'grey'} fontSize={20}>{tagName}</Text>
            <ButtonGroup>
                <Button border={'2px solid'} borderColor={'#b7b8b8'} _hover={'grey'} bgColor={'white'} ><GrAdd/></Button>
                <Button  border={'2px solid'} borderColor={'#b7b8b8'} _hover={'grey'} bgColor={'white'}
            ><AiOutlineDelete/></Button>
            </ButtonGroup>
        </Flex>
    </Box>
  )
}

export default TagCard