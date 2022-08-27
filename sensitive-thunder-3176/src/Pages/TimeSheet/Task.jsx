import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <HStack>
        <Text>{task.name}</Text>
        <Text>{task.tag}</Text>
        <Text>{task.note}</Text>
      </HStack>
    </div>
  );
};

export default Task;
