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
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";
export default function Feature() {
  return (
    <>
      <Container maxW={"7xl"} my={10}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as={"span"} fontSize={"5xl"}>
                Time tracker your team will actually use
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Track time against your projects and create reports and timesheets
              in seconds.
            </Text>
            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Input
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                fontSize={["sm", "md", "lg"]}
                px={6}
                bg={"white"}
                placeholder={"Add your email"}
                boxShadow={"lg"}
              />
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"sm"}
                px={10}
                w={60}
                color={"white"}
                bg={"#37c266"}
                _hover={"#42f87f"}
              >
                Start tracking time
              </Button>
            </Stack>
            <HStack spacing={8}>
              <Flex gap={2} w={"45%"}>
                <Text color={"gray.500"} justifyContent={"center"}>
                  Or sign up with:
                </Text>
                <IconButton
                  icon={<AiOutlineGoogle />}
                  bg={"#37c266"}
                  color={"white"}
                  rounded={"full"}
                  w={4}
                  _hover={"#42f87f"}
                />
              </Flex>
              <Text w={"55%"} fontSize={12} color={"gray.500"}>
                By signing up you agree to our
                <Text as={"span"} color="#37c266">
                  {" "}
                  Terms and Conditions{" "}
                </Text>{" "}
                and
                <Text as={"span"} color="#37c266">
                  {" "}
                  Privacy Policy{" "}
                </Text>
                .
              </Text>
            </HStack>
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
                  "https://cdn-m.timecamp.com/img/greenbranding/features/features-time-tracking.svg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Stack bg={"#37c266"} m={0} p={4} spacing={8}>
        <Text
          fontWeight={"semibold"}
          fontSize={"lg"}
          color={"white"}
          textAlign={"center"}
        >
          Trusted by 18,000 teams from all over the world (and still growing!)
        </Text>
        <SimpleGrid
          px={[10, 20, 40]}
          justifyContent={"center"}
          columns={[2, 3, 3, 6]}
          spacing={6}
        >
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
        </SimpleGrid>
      </Stack>
      <Container maxW={"7xl"} my={8}>
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
          mx={[20, 40, 60, 80]}
          mb={-8}
        />
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
          mx={[200, 400, 600, 800]}
          mb={-2}
        />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
       
          bg={"gray.100"}
          p={10}
          rounded={10}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent={"space-between"}
          >
            <Stack spacing={4} textAlign={"left"}>
              <Heading fontWeight={600} fontSize={["md", "lg", "xl"]}>
                Schedule a demo and learn more about TimeCamp
              </Heading>
              <Text color={"gray.500"} fontSize={["sm", "md", "lg"]}>
                Hop on a call with TimeCamp's top minds to get the best possible
                introduction to our product.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Button
                color={"white"}
                bg={"#F7B801"}
                rounded={"full"}
                px={6}
                height={[8, 12, 16]}
                w={[80, 160, 200]}
                fontSize={[10, 20, 24]}
                fontWeight={"semibold"}
                _hover={"#ffbf00"}
              >
                Book a Demo
              </Button>
            </Stack>
          </Flex>
        </Stack>
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
          mx={[20, 40]}
          mt={-8}
        />
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
          mx={[400, 600, 800]}
          mt={-2}
        />
      </Container>
      <Container maxW={"7xl"}>
        <Heading fontSize={'4xl'}>One app. A multitude of benefits </Heading>
      </Container>
    </>
  );
}
