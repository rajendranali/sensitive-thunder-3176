import { Box, Td } from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "@chakra-ui/icons";

const CheckIconTd = ({ first, second, third, fourth }) => {
  return (
    <>
      <Td>{first && <Box as={CheckIcon} color="black"></Box>}</Td>
      <Td>{second && <Box as={CheckIcon} color="black"></Box>}</Td>
      <Td>{third && <Box as={CheckIcon} color="black"></Box>}</Td>
      <Td>{fourth && <Box as={CheckIcon} color="black"></Box>}</Td>
    </>
  );
};

export default CheckIconTd;
