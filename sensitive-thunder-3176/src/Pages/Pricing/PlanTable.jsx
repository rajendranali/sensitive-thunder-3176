import React from "react";
import {
  Table,
  Thead,
  Tbody,
  tr,
  Th,
  Td,
  Box,
  Text,
  Tr,
} from "@chakra-ui/react";
import BtnComponent from "./BtnComponent";
import styles from "./Pricing.module.css";
import { useSelector } from "react-redux";
import CheckIconTd from "./CheckIconTd";

const PlanTable = () => {
  //  const isAuth = useSelector((state) => state.isAuth);
  const isAuth = true;

  return (
    <>
      <Box>
        <Table
          variant={"striped"}
          size="lg"
          justifyContent={"center"}
          margin={"auto"}
        >
          <Thead>
            <Tr className={"trHeight"}>
              <Th></Th>
              <Th>
                <Box>
                  <Text
                    texttransform={"none"}
                    color={"#eb5160"}
                    fontWeight={"700"}
                    fontSize="17px"
                  >
                    Free
                  </Text>
                  <Box justifyContent={"center"} margin={"auto"}>
                    <Text
                      fontSize="14px"
                      texttransform={"none"}
                      color={"gray.500"}
                      fontWeight={"400"}
                      m={"15px 0 25px"}
                    >
                      $0
                    </Text>
                  </Box>
                </Box>
              </Th>
              <Th>
                <Box>
                  <Text
                    texttransform={"none"}
                    color={"#F7B801"}
                    fontWeight={"700"}
                    fontSize="17px"
                  >
                    Basic
                  </Text>
                  <Box justifyContent={"center"} margin={"auto"}>
                    <Text
                      fontSize="14px"
                      texttransform={"none"}
                      color={"gray.500"}
                      fontWeight={"400"}
                      m={"15px 0 25px"}
                    >
                      $7 billed monthly
                    </Text>
                  </Box>
                </Box>
              </Th>
              <Th>
                <Box>
                  <Text
                    texttransform={"none"}
                    color={"#00bf71"}
                    fontWeight={"700"}
                    fontSize="17px"
                  >
                    Pro
                  </Text>
                  <Box justifyContent={"center"} margin={"auto"}>
                    <Text
                      fontSize="14px"
                      texttransform={"none"}
                      color={"gray.500"}
                      fontWeight={"400"}
                      m={"15px 0 25px"}
                    >
                      $10 billed monthly
                    </Text>
                  </Box>
                </Box>
              </Th>
              <Th>
                <Box>
                  <Text
                    texttransform={"none"}
                    color={"#3c91e6"}
                    fontWeight={"700"}
                    fontSize="17px"
                    
                  >
                    Enterprise
                  </Text>
                  <Box justifyContent={"center"} margin={"auto"}></Box>
                  <BtnComponent label={"Contact us"} />
                </Box>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Time tracking
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Time entries
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Multi-platform tracking
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Projects & Tasks
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Tags
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Notes{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Goals
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Automatic time tracking
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Daily/weekly timesheet
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Idle time tracking
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Reporting
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Detailed projects & tasks
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Websites & App reports{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Idle time report{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  GPS
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Export data to PDF
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Productivity reports
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Export data to Excel{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Time budget report
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Revenue, Cost, Margin reports
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Collaboration
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Guests
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Email notification
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Attendance & leave management
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  User Roles{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Timesheet Approvals
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Approval workflow
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Optional screenshots
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>

            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Billing & Invoicing
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Billable & unbillable hours
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Time estimations{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Time budget
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Billing rates{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Invoices
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Integrations & Add-ons
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Plugins
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Desktop App{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Mobile App
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Integrations{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Calendar integration
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Security
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Data Backups
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  GDPR compliance{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Advanced permission system
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  SSO{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  On-premise
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Private SaaS
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
            <Text
              textAlign={"start"}
              mt={"30px"}
              mb={"30px"}
              ml={"30px"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              24h Support
            </Text>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Knowledge base{" "}
                </Text>
              </Td>
              <CheckIconTd
                first={true}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Email support
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Chat support
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={true}
                third={true}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Account Manager
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Dedicated trainings
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Implementation trainings
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
            <Tr>
              <Td>
                <Text textAlign={"start"} fontSize={"16px"}>
                  Customization
                </Text>
              </Td>
              <CheckIconTd
                first={false}
                second={false}
                third={false}
                fourth={true}
              />
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default PlanTable;
