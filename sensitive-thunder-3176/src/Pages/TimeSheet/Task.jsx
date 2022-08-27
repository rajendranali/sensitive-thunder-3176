import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChartPie, FaHistory, FaTags } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { deleteTask, getTasks } from "../../Redux/AppReducer/action";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleTaskDelete=(id)=>{
    dispatch(deleteTask(id)).then((r) => dispatch(getTasks()));


  }
  return (
    <Box borderBottom={"1px solid gray"} h={"80px"}>
      <HStack p={5}>
        <Flex
          // border={"1px solid blue"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          w={600}
        >
          <Box h={"100%"}>
            <Box>
              <Text>
                {task.name ? (
                  task.name
                ) : (
                  <Text fontWeight={"500"} color={"#4bb063"}>Select Task</Text>
                )}
              </Text>
              <Text>
                {task.tag ? (
                  task.tag
                ) : (
                  <Box>
                    <IconButton
                      bg={"white"}
                      color={"gray"}
                      borderRadius={5}
                      w={"2px"}
                      h={"2px"}
                      // border={"1px solid gray"}
                      icon={<FaTags />}
                    ></IconButton>
                    <Button
                      fontSize={12}
                      bg={"white"}
                      w={"70px"}
                      h={"18px"}
                      border={"1px solid gray"}
                      borderRadius={10}
                      _hover={{}}
                    >
                      add a tag
                    </Button>
                  </Box>
                )}
              </Text>
            </Box>
          </Box>
          <Spacer />
          <Box>
            {hover === true && (
              <Box>
                <HStack>
                  <IconButton
                    bg={"white"}
                    color={"gray"}
                    borderRadius={5}
                    w={"5px"}
                    border={"1px solid gray"}
                    icon={<FaChartPie />}
                    _hover={{ bgColor: "#eaeaea" }}
                  ></IconButton>
                  <IconButton
                    bg={"white"}
                    color={"gray"}
                    borderRadius={5}
                    w={"5px"}
                    border={"1px solid gray"}
                    icon={<FiCalendar />}
                    _hover={{ bgColor: "#eaeaea" }}
                  ></IconButton>
                  <IconButton
                    bg={"white"}
                    color={"gray"}
                    borderRadius={5}
                    w={"5px"}
                    border={"1px solid gray"}
                    icon={<FaHistory />}
                    _hover={{ bgColor: "#eaeaea" }}
                  ></IconButton>
                  <IconButton
                    bg={"white"}
                    color={"gray"}
                    borderRadius={5}
                    w={"5px"}
                    border={"1px solid gray"}
                    icon={<AiTwotoneDelete />}
                    _hover={{ bgColor: "#eaeaea" }}
                    onClick={()=>handleTaskDelete(task.id)}
                  ></IconButton>
                </HStack>
              </Box>
            )}
          </Box>
        </Flex>
        <Box>
          <Text color={"#4bb063"} fontSize={13} fontWeight={"500"} >
            {task.note ? task.note : <Text> add note</Text>}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Task;
