import { Avatar, Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TagCard from "./TagCard";

const Tags = () => {
  return (
    <Box ml={10}>
      
      <Box w={"500px"}>
        <Stack my={8}>
          <Button
            color={"white"}
            bgColor={"green.400"}
            _hover={"green"}
            w={40}
            ml={300}
          >
            + Add tag list
          </Button>
          <Input />
          <Button>Create</Button>
          <Text>
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          </Text>
        </Stack>
        <TagCard />
        <hr />
        <Button my={10} color={"white"} bgColor={"green.400"} _hover={"green"}>
          Save settings
        </Button>
        {/* <Button> </Button> */}
      </Box>
    </Box>
  );
};

export { Tags };
