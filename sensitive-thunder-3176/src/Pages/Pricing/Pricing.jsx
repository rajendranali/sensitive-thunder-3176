import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomerReview from "./CustomerReview";
import PlanTable from "./PlanTable";
import PricingCard from "./PricingCard";
import styles from "./Pricing.module.css";
import FrequentQues from "./FrequentQues";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "360px",
  xl: "1200px",
};

const theme = extendTheme({ breakpoints });

const Pricing = () => {
  const [billMonthly, setBillMonthly] = useState(true);
  const [billYearly, setBillYearly] = useState(false);
  // const isAuth = useSelector((state) => state.isAuth);
  const isAuth = true;

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (isAuth) navigate("/dashboard");
    else navigate("/auth/signup");
  };
  const handleBillMonthly = () => {
    setBillMonthly(true);
    setBillYearly(false);
  };
  const handleBillYearly = () => {
    setBillMonthly(false);
    setBillYearly(true);
  };

  return (
    <Box align="center" justify="center" width={{ base: "100%" }}>
      <Box
        width={{ base: "100%", xl: "100%" }}
        bgColor={"#f3f3f3"}
        w={"100%"}
        h={{ xl: "360px", sm: "700px" }}
        border={"1px solid #f3f3f3"}
      >
        <Box w={{ xl: "50%", sm: "75%" }} mt={100}>
          <Text
            fontSize={"33px"}
            lineHeight={{ xl: "1.6", sm: "70%" }}
            fontWeight={"700"}
          >
            TimeCamp fits perfectly for companies big and small. Regardless of
            your budget.
          </Text>
        </Box>
        <Box w={{ xl: "50%", sm: "100%" }} mt={50}>
          <Text fontSize={"20px"}>
            Choose the most accurate pricing for you and start gaining crucial
            insights for your business.
          </Text>
          <Text fontSize={"20px"} fontWeight={500}>
            You can also start with a free 14-day trial.
          </Text>
        </Box>
      </Box>
      <Box
        maxW={"100%"}
        mt={70}
        width={{ base: "100%", xl: "100%" }}
      >
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          w={"100%"}
        >
          <Text
            textAlign={"center"}
            fontSize={"14px"}
            fontWeight="700"
            lineHeight={"1.33"}
            letterSpacing="normal"
            color={"#25cf60"}
          >
            PRICING
          </Text>
        </Box>
        <Box
          w={{xl:"50%", sm:"100%"}}
          justifyContent={"center"}
          margin={"auto"}
          alignItems={"center"}
        >
          <Text
            textAlign={"center"}
            pt={"20px"}
            fontSize={"2rem"}
            fontWeight="500"
            lineHeight={"1.1"}
            letterSpacing="0.1px"
          >
            Your time cost more
          </Text>
        </Box>
        <Box
          w={{xl:"50%", sm:"100%"}}
          justifyContent={"center"}
          margin={"auto"}
          alignItems={"center"}
        >
          <Text
            textAlign={"center"}
            pt={"20px"}
            fontSize={"18px"}
            fontWeight="450"
            lineHeight={"26px"}
            letterSpacing="0.1px"
            color={"#767676"}
          >
            Use free forever plan or subscribe to a paid plan to get more
            features!
          </Text>
        </Box>
        <Box
          justifyContent={"center"}
          margin={"auto"}
          h={"50px"}
          boxShadow="md"
          w={"400px"}
          borderRadius={"30px"}
          mt={"50px"}
          mb={"80px"}
        >
          <Flex align="center" justify="center">
            <ButtonGroup variant="outline"
             spacing={"-0.1"} cursor={"pointer"}>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"50px"}
                fontSize={"15px"}
                w={"200px"}
                onClick={handleBillMonthly}
                className={
                  billMonthly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Annually{" "}
                <span
                  className={
                    billMonthly ? styles.btnSpanActive : styles.btnSpanDeactive
                  }
                >
                  10% discount
                </span>
              </Button>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"50px"}
                fontSize={"15px"}
                w={"200px"}
                onClick={handleBillYearly}
                className={
                  billYearly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Monthly
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Box>
      <HStack
        justifyContent={"center"}
        mt="30px"
        margin={"auto"}
        gap={"14px"}
        w={"63%"}
        h={"600px"}
      >
        <Box h={"100%"} w={"22%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="None"
            cost="Free"
            costDescription="Free forever plan"
            description={
              "Measure on which activities you spend time while working"
            }
            // btnLabel={isAuth ? "Current Plan" : "Get Started"}
            btnLabel={"Join for free"}
            billMonthly={billMonthly}
            includeList={[
              { title: "Unlimited users" },
              { title: "Unlimited Projects & tasks" },
              { title: "Desktop & Mobile app" },
            ]}
          />
        </Box>
        <Box h={"100%"} w={"20%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="BASIC"
            cost={billMonthly ? "6.3" : "7"}
            costDescription="user/mo"
            description={"Be more transparent and gain customers' trust"}
            // btnLabel={isAuth ? "Upgrade" : "Get Started"}
            btnLabel={"Start your free trial"}
            includeList={[
              { title: "Time rounding" },
              { title: "Custom report" },
              { title: "Hide time from users" },
              { title: "Management roles" },
              { title: "Team productivity tracking" },
              { title: "XLS reports export" },
              { title: "Unlimited integrations" },
              { title: "Billable time & budgeting" },
            ]}
          />
        </Box>

        <Box h={"100%"} w={"20%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="PRO"
            cost={billMonthly ? "199" : "149"}
            costDescription="user/mo"
            description={"Get full control over your business"}
            // btnLabel={isAuth ? "Upgrade" : "Get Started"}
            btnLabel={"Start your free trial"}
            status={"active"}
            includeHeading="Everything in Basic plus"
            includeList={[
              { title: "Custom user roles" },
              { title: "Billing rates" },
              { title: "Invoicing" },
              { title: "Timesheet approvals" },
              { title: "Screenshots" },
              { title: "SSO login" },
              { title: "2-factor authentication" },
            ]}
          />
        </Box>
        <Box h={"100%"} w={"20%"}>
          <PricingCard
            sizeGiven={"100"}
            title="ENTERPRISE"
            cost="Let's discuss"
            costDescription="None"
            description={"Customize TimeCamp to your custom needs"}
            btnLabel="Contact us"
            includeHeading="Everything in Pro plus"
            includeList={[
              { title: "Personalized training" },
              { title: "Private cloud implementation" },
              { title: "Self hosted server" },
            ]}
          />
        </Box>
      </HStack>
      <HStack
        justifyContent={"center"}
        mt="30px"
        margin={"auto"}
        gap={"10px"}
        w={"98%"}
      >
        <Box>
          <Image src="https://cdn-m.timecamp.com/img/landing-page/icon-padlock.png"></Image>
        </Box>
        <Box>
          <Text color="#767676" fontSize={"18px"}>
            SSL Secure Payment
          </Text>
        </Box>
      </HStack>
      <Box justifyContent={"center"} m={"40px 0px 40px"} mt={"150px"}>
        <Box>
          <Text
            color="#1b1b20"
            fontSize="16px"
            fontWeight={"600"}
            textAlign={"center"}
          >
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
          <HStack
            justifyContent={"center"}
            borderBottom={"1px solid #d8d8d8"}
            mt="30px"
            margin={"auto"}
            gap={"60px"}
            w={"98%"}
            h={"100px"}
          >
            <Box>
              <VStack>
                <Image
                  src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
                  alt="Dan Abramov"
                ></Image>
                <Image
                  src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
                  alt="Dan Abramov"
                ></Image>
              </VStack>
            </Box>
            <Image
              src="https://cdn-m.timecamp.com/img/logos/dsv.png"
              alt="Dan Abramov"
            ></Image>
            <Image
              src="https://cdn-m.timecamp.com/img/logos/usp.png"
              alt="Dan Abramov"
            ></Image>
            <Image
              src="https://cdn-m.timecamp.com/img/logos/saatchi.png"
              alt="Dan Abramov"
            ></Image>
            <Image
              src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
              alt="Dan Abramov"
            ></Image>
            <Box>
              <VStack>
                <Image
                  src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
                  alt="Dan Abramov"
                ></Image>
                <Image
                  src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
                  alt="Dan Abramov"
                ></Image>
              </VStack>
            </Box>
          </HStack>
        </Box>
        {/* Book a demo */}
        <Box
          bgColor={"#f3f3f3"}
          borderRadius={"15px"}
          height={"auto"}
          w={"60%"}
          mt={"200px"}
          border={"1px solid #f3f3f3 "}
        >
          <Box w={"65%"} mt={"60px"}>
            <Text fontSize="40px" lineSpacing="-10px" fontWeight="700">
              If you want a product tour, here you can book a call demo with our
              experts.
            </Text>
          </Box>
          <Box w={"85%"} mt={"40px"} mb={"20px"}>
            <Text fontSize="20px" fontWeight="500">
              Hop on a call with TimeCamp's top minds to get the best possible
              introduction to our product.
            </Text>
          </Box>
          <Button
            bgColor="#f7b801"
            borderRadius={"50px"}
            color={"white"}
            fontSize={"17px"}
            w={"230px"}
            h={"50px"}
            mb={"70px"}
          >
            Book a demo
          </Button>
        </Box>
      </Box>

      {/* Customer REview */}
      <CustomerReview />
      {/* Choose plan table  */}
      <Box mt={"150px"} h={"auto"} w={"100%"}>
        <VStack
          h={"auto"}
          // maxW={"1260px"}
          w={"60%"}
          justifyContent={"center"}
          margin={"auto"}
        >
          <Box>
            <Text fontSize="40px" fontWeight="700" mb={"80px"}>
              Choose the right fit for you
            </Text>
          </Box>
          <PlanTable />
        </VStack>
      </Box>
      {/* prices */}
      <Box mt={100} h={"400px"} w={"100%"}>
        <Grid templateColumns="repeat(2, 1fr)" w={"65%"}>
          <Box mt={"50px"} h={"400px"} w={"80%"}>
            <Grid templateColumns="repeat(2, 1fr)" gap={45}>
              <Box boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)" h={"150px"}>
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/crozdesk.jpg"
                  }
                ></Image>
              </Box>
              <Box boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)" h={"150px"}>
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/capterra.svg"
                  }
                ></Image>
              </Box>
              <Box boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)" h={"150px"}>
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/g2crowd.svg"
                  }
                ></Image>
              </Box>
              <Box boxShadow="20px 20px 40px 0 rgb(0 0 0 / 10%)" h={"150px"}>
                <Image
                  src={
                    "https://cdn-m.timecamp.com/img/greenbranding/getapp.svg"
                  }
                ></Image>
              </Box>
            </Grid>
          </Box>
          <Box h={"400px"}>
            <Box>
              <Box w={"53%"} ml={"-290px"}>
                <Text textAlign={"start"} fontSize={30} fontWeight={600}>
                  Loved by customers and recognized among online communities
                </Text>
              </Box>
            </Box>
            <Box>
              <Text textAlign={"start"} fontSize={20}>
                While shiny and classy awards are always appreciated, it's the
                great feedback from our customers that makes us proud. Nothing
                beats knowing that we're helping improve our customer's work
                life.
              </Text>
            </Box>
            <Box mt={"30px"}>
              <Grid templateColumns="repeat(5, 1fr)">
                <Box>
                  <Image
                    boxSize={95}
                    src={
                      "https://cdn-m.timecamp.com/img/greenbranding/pricing/leader-summer-reviews-signup.svg"
                    }
                  ></Image>
                </Box>
                <Box>
                  <Image
                    boxSize={95}
                    src={
                      "https://cdn-m.timecamp.com/img/greenbranding/pricing/sourceforce.svg"
                    }
                  ></Image>
                </Box>
                <Box>
                  <Image
                    boxSize={95}
                    src={
                      "https://cdn-m.timecamp.com/img/greenbranding/pricing/recommended.png"
                    }
                  ></Image>
                </Box>
                <Box>
                  <Image
                    boxSize={95}
                    src={
                      "https://cdn-m.timecamp.com/img/greenbranding/pricing/easiest-to-use-icon-review-signup.svg"
                    }
                  ></Image>
                </Box>
                <Box>
                  <Image
                    boxSize={95}
                    src={
                      "https://cdn-m.timecamp.com/img/greenbranding/pricing/front.png"
                    }
                  ></Image>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
      {/* frequent question */}
      <Container maxW={"50%"} mb={"2  00px"}>
        <Box justifyContent={"center"} margin={"auto"}>
          <Text
            fontSize="30px"
            textAlign={"center"}
            fontWeight={"700"}
            mt={"200px"}
            mb={"80px"}
          >
            Frequently Asked Questions
          </Text>
        </Box>
        <FrequentQues />
      </Container>
    </Box>
  );
};

export default Pricing;
