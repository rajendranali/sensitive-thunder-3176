import { Box } from "@chakra-ui/layout";
import React from "react";
import TimeSide from "./TimeSide";
import {Tags as TagComponent} from "../Tags/Tags"

const Tags = () => {
  return (
    <div>
      <TimeSide />
      <Box mt={-785} ml={265} bgColor={"#f1f1f1"} h={"80vh"} w={"86%"}>
        {/*TODO:  import Your Component here */}
        <TagComponent />

      </Box>
    </div>
  );
};

export default Tags;
