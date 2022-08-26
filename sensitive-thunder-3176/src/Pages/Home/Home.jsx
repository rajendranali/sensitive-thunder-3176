
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import a from "../../Styles/Home/home.module.css";
import Card from "./Card";
import Demo from "./Demo";
import Imagelogo from "./Imagelogo";


import Middlesection from "./Middlesection";
const Home = () => {
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className={a.container}>
      <Middlesection></Middlesection>
     <Imagelogo /> 
     <Box ><Text color={" #25cf60"} fontSize='xl' marginLeft="50px" marginTop="40px" textTransform="uppercase">For Employess</Text></Box> 
<Card/>
    </div>
  );
};

export default Home;
