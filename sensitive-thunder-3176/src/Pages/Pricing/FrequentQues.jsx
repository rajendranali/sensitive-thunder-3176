import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FrequentQues = () => {
  return (
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
                  <Text fontSize={18} fontWeight={600}>
                    What forms of payment do you accept?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                {" "}
                We accept all major credit cards - Visa, Mastercard, American
                Express, PayPal. We also accept wire transfers and check that
                cover annual payments over $2000. You'll receive an invoice for
                each charge made.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
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
                  <Text fontSize={18} fontWeight={600}>
                    Can I change my plan?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                You can switch plans, change the number of seats, upgrade or
                cancel your subscription any time you want or during the billing
                period, without any consequences. Additional charges will be
                automatically prorated. According to our policy, we do not grant
                any refunds.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
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
                  <Text fontSize={18} fontWeight={600}>
                    Do you offer discounts?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                We offer a 10% discount when billed annually. You can also
                contact us for an additional discount for larger (50) volume of
                seats. Please contact us at
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

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
                  <Text fontSize={18} fontWeight={600}>
                    Do you offer discounts for non-profit organizations?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                We offer an additional 30% discount for non-profits,
                universities, students and schools. Please contact our support
                at <a href="mailto:help@timecamp.com">help@timecamp.com</a> with
                a copy of your 501(c)(3) paperwork.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
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
                  <Text fontSize={18} fontWeight={600}>
                    Do you offer an on-premise verion of TimeCamp?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                Yes, for bigger organizations with more than 100 employees. For
                more information please contact us at
                <a href="mailto:sales@timecamp.com">sales@timecamp.com</a>.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FrequentQues;
