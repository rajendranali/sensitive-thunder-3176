import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Input,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";
export default function Feature() {
  return (<>
    <Container  maxW={"7xl"} my={10}>

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
            <Text as={"span"} fontSize={'5xl'}>
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
              _hover={'#42f87f'}
              >
              Start tracking time
            </Button>
          </Stack>
          <HStack spacing={8}>
            <Flex gap={2} w={"45%"}>
              
            <Text color={'gray.500'} justifyContent={'center'}>Or sign up with:</Text>
            <IconButton
              icon={<AiOutlineGoogle />}
              bg={"#37c266"}
              color={"white"}
              rounded={"full"}
              w={4}
              _hover={'#42f87f'}
              />
              </Flex>
              <Text w={"55%"} fontSize={12} color={'gray.500'}>By signing up you agree to our<Text as={'span'} color="#37c266"> Terms and Conditions </Text> and 
              <Text as={'span'} color="#37c266"> Privacy Policy </Text>.</Text>
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
            // height={'300px'}
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
      <Stack bg={'#37c266'}  m={0} p={4} spacing={8}>
              <Text fontWeight={'semibold'} fontSize={'lg'} color={'white'} textAlign={'center'}>Trusted by 18,000 teams from all over the world (and still growing!)</Text>
              <SimpleGrid px={[10,20,40]} justifyContent={'center'} columns={[2,3,6]} spacing={6}>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"/>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"/>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"/>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"/>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"/>
                <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"/>
              </SimpleGrid>
      </Stack>
      
              </>
  );
}
