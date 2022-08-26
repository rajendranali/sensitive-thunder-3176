import { Avatar, Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TagCard from './TagCard'

const Tags = () => {
  return (
    <Box my={20} ml={40}>
        <Flex justifyContent={'space-between'}>
            <Text fontSize={'2xl'}>Tags</Text>
            <Avatar/>
        </Flex>
        <hr />
        <Box  w={'500px'}>

<Stack my={8}>

        <Button color={'white'} bgColor={'green.400'} _hover={'green'}  w={40} ml={300}>+ Add tag list</Button>
        <Text>Manage your tags, like list of customers or activities. All workspace members can assign tags to time entries, when they track time. Project managers can set lists of tags for projects. Reports can be filtered and grouped by tags.</Text>

</Stack>
        <TagCard/>
        <hr />
        <Button my={10} color={'white'} bgColor={'green.400'} _hover={'green'}>Save settings</Button>
        {/* <Button> </Button> */}
        </Box>
    </Box>
  )
}

export default Tags