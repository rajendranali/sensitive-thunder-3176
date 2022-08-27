import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";

import { Tooltip } from "@chakra-ui/tooltip";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiUser,
} from "react-icons/fi";
import TimeSide from "./TimeSide";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  " Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Projects = () => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  const tasks = [];
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let monthName = months[d.getMonth()];
  return (
    <div>
      <TimeSide />
      <Box mt={-785} ml={265} bgColor={"#f1f1f1"} h={"80vh"} w={"86%"}>
        <Box mt={-785} ml={50} bgColor={"white"} h={"80vh"} w={"86%"}>
          {/*TODO:  import Your Component here */}
          <Box m={"auto"} justifyContent={"center"} h={"80vh"} w={"70%"}>
            <HStack mt={20} h={100} w={"100%"}></HStack>

            <HStack
              mt={2}
              h={"70px"}
              w={"100%"}
              boxShadow={"0 0 10px 0 rgb(37 207 96 / 35%)"}
              border={"1px solid #4bb064"}
              borderRadius={10}
              p={2.5}
            >
              <Input
                placeholder="Select task and project"
                h={"60px"}
                w={"30%"}
                variant="outline"
                border={"none"}
                _hover={{ border: "1px solid gray" }}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              ></Input>

         
              
           
              <Button
                _hover={{ backgroundColor: "#7bca84", color: "white" }}
                bgColor={"#4bb063"}
                borderColor={"#49ac61"}
                color={"white"}
              >
                ADD Project
              </Button>
            </HStack>

            {tasks.length === 0 ? (
              <Box>
                <VStack justifyContent="center">
                  <Image
                    h={"300px"}
                    w={"250px"}
                    src={
                      "https://cdn.timecamp.com/res/css/images/timesheet-classic-empty-state.svg"
                    }
                  ></Image>
                  <Box ml={5} mt={-50}>
                    <Text fontSize={"24px"} fontWeight={500}>
                      No recent Time entries
                    </Text>
                  </Box>
                  <Box ml={5} mt={"-50px"}>
                    <Text fontSize={"14px"}>
                      Seems like you haven’t tracked any time yet
                    </Text>
                  </Box>
                </VStack>
                <HStack>
                  <Tooltip
                    label="new time entry"
                    placement="bottom-start"
                    fontSize="md"
                  >
                    <IconButton
                      color={"gray"}
                      bgColor={"white"}
                      border={"1px solid gray"}
                      borderRadius={7}
                      icon={<FiPlus />}
                    ></IconButton>
                  </Tooltip>
                  <Tooltip
                    label="entries from previous timesheets"
                    placement="bottom-start"
                    fontSize="md"
                  >
                    <IconButton
                      color={"gray"}
                      bgColor={"white"}
                      border={"1px solid gray"}
                      borderRadius={7}
                      icon={<FiCopy />}
                    ></IconButton>
                  </Tooltip>
                  <Spacer />
                  <Button bgColor={"#fcbd01"} color={"white"}>
                    Pending Approval - Reopen
                  </Button>
                </HStack>
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
