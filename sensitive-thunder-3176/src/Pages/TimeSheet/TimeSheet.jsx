import { Box } from "@chakra-ui/layout";
import React from "react";
import TimeSide from "./TimeSide";

const TimeSheet = () => {
  return (
    <div>
      <TimeSide />
      <Box mt={-785} ml={265} bgColor={"#f1f1f1"} h={"80vh"} w={"86%"}>
        {/*TODO:  import Your Component here */}
        TimeSheet Component
      </Box>
    </div>
  );
};

export default TimeSheet;
