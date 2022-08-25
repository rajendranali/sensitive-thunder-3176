import {
  Box,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import BtnComponent from "./BtnComponent";

const PricingCard = ({
  title,
  description,
  cost,
  costDescription,
  btnLabel,
  includeHeading,
  sizeGiven,
  status,
  includeList,
}) => {
  return (
    <Box h={"90%"}>
      <Box
        textAlign={"left"}
        h={"100%"}
        w={"100%"}
        border={"1px solid #dddee6"}
        borderRadius={"26px"}
        boxShadow={"0 2px 4px 2px rgb(0 0 0 / 5%)"}
        padding={"10px 20px 40px"}
        marginBottom={"40px"}
        justifyContent={"center"}
        margin={"auto"}
      >
        <Box>
          <Text
            textAlign="center"
            mt={"-10px"}
            fontWeight={"700"}
            fontSize={"10px"}
            lineHeight={"22px"}
            color={"#25cf60;"}
          >
            {title === "None" ? (
              <Text style={{ color: "white" }}>.</Text>
            ) : (
              `${title}`
            )}
          </Text>
          <Box mt={"50px"} mb={"20px"} textAlign="center">
            <Text
              fontWeight={"600"}
              fontSize={"36px"}
              color={"black"}
              lineHeight={"22px"}
            >
              {title === "BASIC" || title === "PRO" ? (
                <span style={{ fontSize: "20px" }}>$</span>
              ) : (
                ""
              )}
              {cost}
            </Text>
            <Text
              mt={"10px"}
              fontSize={"15px"}
              lineHeight="18px"
              color={"#767676"}
            >
              {costDescription === "None" ? (
                <span style={{ color: "white" }}>-</span>
              ) : (
                `${costDescription}`
              )}
            </Text>
          </Box>
          <hr
            style={{
              color: "#25cf60",
              backgroundColor: "#25cf60",
              height: 1,
            }}
          />
          <Text
            mt={"15px"}
            mb={"15px"}
            fontSize="15px"
            lineHeight="20px"
            color={"#767676"}
          >
            {description}
          </Text>
        </Box>

        <Box mb={"30px"} w={"100%"}>
          <BtnComponent
            label={btnLabel}
            sizeGiven={sizeGiven}
            status={status}
          />
        </Box>
        <Box textAlign={"left"}>
          <Text fontSize="15px" color={"#767676"} m={"35px 10px 10px 10px"}>
            {includeHeading}
          </Text>
          <UnorderedList spacing={2} ml={"20px"}>
            {includeList.map((item, index) => (
              <ListItem>
                <Box mb={"-8px"}>
                  {/* <ListIcon key={index} as={CheckIcon} color="green.500" /> */}

                  <Text color={"#767676"} fontSize="15px">
                    {" "}
                    {item.title}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingCard;
