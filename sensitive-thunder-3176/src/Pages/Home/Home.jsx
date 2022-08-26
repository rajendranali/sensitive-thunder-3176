import a from "../../Styles/Home/home.module.css";
import Card from "./Card";
import Demo from "./Demo";
import Imagelogo from "./Imagelogo";
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineGoogle, AiOutlineArrowRight } from "react-icons/ai";

import Middlesection from "./Middlesection";
import Card1 from "./Card1";
import Minicard from "./Minicard";
import Logocomp from "./Logocomp";
import FooterFaq from "./FooterFaq";
import Review from "./Reveiw";
const Home = () => {
  return (
    <div className={a.container}>
      <Middlesection></Middlesection>
      <Imagelogo />
      <Demo />
      <Minicard />
      <Card1 />

      <Logocomp />

      <Container maxWidth={"9xl"} bgColor={"gray.100"} px={[4, 8, 16, 32, 64]}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={"2"} w={"90%"}>
              <Text as={"span"} color={"green.400"} fontSize={"sm"}>
                Time tracking integrations
              </Text>
              <Heading
                lineHeight={1}
                fontWeight={500}
                fontSize={{ base: "3xl", sm: "4xl" }}
              >
                <Text as={"span"} fontSize={"2xl"}>
                  Easy and quick integration with more than 100 apps and work
                  tools
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                TimeCamp works great alongside with all of the most popular work
                management tools. Now, you can also track time directly from
                your go-to apps such as Trello or Asana thanks to our Chrome
                extension.
              </Text>
              <Button
                h={16}
                rounded={20}
                as={"a"}
                bgColor={"#3c91e6"}
                color="white"
                _hover={"none"}
              >
                <Image
                  w={8}
                  src="https://cdn-m.timecamp.com/img/integrations/chrome.png"
                  m={2}
                />
                Track time in chrome
              </Button>
              <Button
                h={16}
                rounded={20}
                as={"a"}
                bgColor={"#3c91e6"}
                color="white"
                _hover={"none"}
              >
                {" "}
                <Image
                  w={16}
                  src="https://cdn-m.timecamp.com/img/integrations/edge.svg"
                />
                Track time in edge
              </Button>

              <Text color={"gray.500"}>
                Maintain your current workflow and connect TimeCamp, the best
                time tracking software, with your currently used apps.
              </Text>
            </Stack>

            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"sm"}
                px={10}
                w={80}
                variant={"ghost"}
                color={"green"}
              >
                Check Integrations <AiOutlineArrowRight />
              </Button>
            </Stack>
          </Stack>

          <SimpleGrid
            p={10}
            justifyContent={"center"}
            columns={[2, 3, 3]}
            spacing={[10, 20]}
          >
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
            <Box
              bgColor={"white"}
              boxShadow={"lg"}
              w={"100px"}
              h={"100px"}
              border={"none"}
              p={2}
              borderRadius={24}
            >
              <Image
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"
                }
                w={"50px"}
                m={4}
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
      <Box bgColor={"gray.100"} my={10} px={[4, 8, 16, 32, 64]}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>You might be interested in these blog posts</Heading>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Flex gap={8} direction={{ base: "column", md: "row" }}>
              <Stack w={"60%"}>
                <Image
                  w={"300px"}
                  src="https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg"
                />
                <Text color={"blue.400"}>M&C SAATCHI</Text>
                <Text fontWeight={"semibold"}>
                  How to Blend in TimeCamp to an Already Established Workflow.
                  Some Insights From M&C Saatchi
                </Text>
              </Stack>
              <Stack w={"60%"}>
                <Image
                  w={"300px"}
                  src="https://cdn-m.timecamp.com/img/customer-stories/tense/tensegroup.jpg"
                />
                <Text color={"blue.400"}>Grupa TENSE</Text>
                <Text fontWeight={"semibold"}>
                  How TimeCamp helped a thriving digital agency by automating
                  its workflow.
                </Text>
              </Stack>
              <Stack w={"60%"}>
                <Image
                  w={"300px"}
                  src="https://cdn-m.timecamp.com/img/greenbranding/features/timeTracking.png"
                />
                <Text color={"blue.400"}>Time tracking</Text>
                <Text fontWeight={"semibold"}>
                  Why You Should Use Time Tracking for Your Business
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Container>
      </Box>
      <FooterFaq />
    </div>
  );
};

export default Home;
