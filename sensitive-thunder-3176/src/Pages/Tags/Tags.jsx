import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TagCard from "./TagCard";
import { useDispatch } from "react-redux";
import { getTags } from "../../Redux/AppReducer/action";
const Tags = () => {
  const [create,setCreate]= useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags());
  }, []);
  const inputCreateTag=()=>{
setCreate(true)
  }
  const cancelCreateTag=()=>{
setCreate(false)
  }
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
            onClick={inputCreateTag}
          >
            + Add tag list
          </Button>
          <Flex   display={create?"block":"none"} >
            <Input m={2} w={"40%"} placeholder="Enter Tag Name" />
            <Button
              color={"white"}
              bgColor={"green.400"}
              _hover={"green"}
              w={"20%"}
              mx={2}
            >
              Create
            </Button>
            <Button
              color={"white"}
              bgColor={"gray.400"}
              _hover={"green"}
              w={"20%"}
              mx={2}
              onClick={cancelCreateTag}
            >
              Cancel
            </Button>
          </Flex>
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
   
      </Box>
    </Box>
  );
};

export { Tags };
