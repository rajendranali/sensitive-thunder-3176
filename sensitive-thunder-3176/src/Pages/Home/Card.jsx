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

            {/* plz cut from here */}
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem p={5}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Check Log Time on handy time Sheet
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={1}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        {" "}
                        Enjoy the transparency - check your employees time
                        records with more detailed information on the handy
                        timesheet or a graphical, calendar-like view.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem p={1}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Try our easy-to-use desktop app
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={1}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        TimeCamp desktop app is reliable and easy to use time
                        tracking tool that works in the background and
                        seamlessly fills the timesheets. All you have to do is
                        to focus on your work!
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem p={1}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={18} fontWeight={600}>
                            Try Your Activity Automatically
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={1}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        Fill your timesheets with the daily activities and time
                        entries with just one click. Easy time tracking app is
                        here!
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            {/* plx cut fromhere */}

            
            
            
            
            
            
            
            
            
            
            
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
