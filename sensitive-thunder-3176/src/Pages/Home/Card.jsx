import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
export default function Card() {
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Text
                as={"span"}
                alignItems={"rigth"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),

                  bottom: 1,
                  left: 0,
                }}
              >
                Track your employees working time
              </Text>
              <br />
              <br />
              <Text color={"#1b1b20"} fontSize={"16px"} fontWeight={"400"}>
                Log working hours of your employees automatically or manually
                and make sure they are billed fairly.
              </Text>{" "}
            </Heading>

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"#25cf60"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Track Employment Time
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            w={"600px"}
            src={
              "https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
