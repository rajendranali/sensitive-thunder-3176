import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaChartPie, FaHistory, FaTags } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  deleteTask,
  getTags,
  getTasks,
  updateTask,
} from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ task }) => {
  const tagSelect = useSelector((state) => state.AppReducer.tags);
  const [tagSelection, setTagSelection] = useState("");

  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id)).then((r) => dispatch(getTasks()));
  };

  // const handleTaskUpdate = () => {
  //   const payload = {
  //     tag: tagSelection.value,
  //   };
  //   console.log(payload);
  //   dispatch(updateTask(task.id, payload)).then((r) => dispatch(getTasks()));
  // };

  useEffect(() => {
    dispatch(getTags());
  }, []);
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
                  <Text fontWeight={"500"} color={"#4bb063"}>
                    Select Task
                  </Text>
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
                    <select
                      fontSize={12}
                      bg={"white"}
                      w={"150px"}
                      h={"auto"}
                      border={"1px solid gray"}
                      // onChange={(event) => {
                      //   setTagSelection({ value: event.target.value });
                      //   // handleTaskUpdate();
                      // }}
                      value={tagSelection}
                    >
                      {tagSelect.length > 0 &&
                        tagSelect.map((tag) => (
                          <option value={tag.name} key={tag.id}>
                            {tag.name}
                          </option>
                        ))}
                    </select>
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
                    onClick={() => handleTaskDelete(task.id)}
                  ></IconButton>
                </HStack>
              </Box>
            )}
          </Box>
        </Flex>
        <Box>
          <Text color={"#4bb063"} fontSize={13} fontWeight={"500"}>
            {task.note ? task.note : <Text> add note</Text>}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Task;
