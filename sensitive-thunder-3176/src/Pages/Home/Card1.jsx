import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  Input,
  HStack,
  SimpleGrid,
  Center,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Accordion,
} from "@chakra-ui/react";
import Faq from "./Faq";
const Card1 = () => {
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/insightful-reports-header.svg"
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={"2"} w={"90%"}>
              <Text
                as={"span"}
                color={"#25cf60"}
                fontSize={"sm"}
                fontFamily={"nunito sans, sans-serif"}
              >
                FOR MANAGERS
              </Text>
              <Heading
                lineHeight={0.8}
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"46px"} fontFamily={"lato"}>
                  Track project time and budget easier than ever before
                </Text>
              </Heading>
              <Text color={"#1b1b20"}>
                Stay on top of your team’s performance and create accurate
                resource estimates for all the projects.
              </Text>
            </Stack>
            {/* faq */}
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box backgroundColor={"teal"} />
                        ) : (
                          <Box backgroundColor={"red"} />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Unsure Project Profatibility by Analyszing Report
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        TimeCamp provides you with all the data you need to
                        analyze the projects’ performance to ensure your team
                        always stays on track. Look at the clear graphics and
                        get a better view of the time tracked!,
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box textDecoration={"underline"} />
                        ) : (
                          <Box />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Integrated with other tools for better Performance
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        Does your organization have more advanced or
                        extraordinary needs? Our team would be happy to ensure
                        you a private cloud implementation and help with
                        dedicated onboarding.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box backgroundColor={"teal"} />
                        ) : (
                          <Box backgroundColor={"red"} />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={18} fontWeight={600}>
                            Take Advantage of simple accurate budgeting
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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

            {/* faq */}
            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"sm"}
                px={10}
                w={80}
                color={"white"}
                bg={"#25cf60"}
                _hover={"grey"}
              >
                Increase Team Productivity
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={"2"} w={"90%"}>
              <Text as={"span"} fontSize={"sm"} color={"#25cf60"}>
                ENTERPRISE
              </Text>
              <Heading
                lineHeight={0.8}
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"46px"} fontFamily={"lato"}>
                  Try enterprise time tracking at the highest level
                </Text>
              </Heading>
              <Text color={"#1b1b20"}>
                Custom needs? No problem! Contact us, and we will definitely
                find a perfect solution for your enterprise.
              </Text>
            </Stack>
            {/* faq */}

            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box backgroundColor={"teal"} />
                        ) : (
                          <Box backgroundColor={"red"} />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Transfer Multilevel Project
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        No matter how many projects your team is currently
                        working on, with TimeCamp you'll be able to organize
                        work time without any problem.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box textDecoration={"underline"} />
                        ) : (
                          <Box />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={16} fontWeight={600}>
                            Acheive All company with data regulation
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        Our time tracking tool is fully GDPR compliant so that
                        you can leave personal data and its privacy on us.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem p={2}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <Box backgroundColor={"teal"} />
                        ) : (
                          <Box backgroundColor={"red"} />
                        )}
                        <Box ml={5} flex="1" textAlign="left">
                          <Text fontSize={18} fontWeight={600}>
                            Get Help from our customer service manager
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                        Does your organization have more advanced or
                        extraordinary needs? Our team would be happy to ensure
                        you a private cloud implementation and help with
                        dedicated onboarding.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            {/* faq */}
            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"sm"}
                px={10}
                w={80}
                color={"white"}
                bg={"#25cf60"}
                _hover={"grey"}
              >
                Find out more about effortless invoicing
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.png"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Card1;
