import React from "react";
import "../../Styles/Sign/Sign.css";
import { Button, Center, Heading, Input, Text } from "@chakra-ui/react";

const Siginform = () => {


  const googleclick=()=>{
    console.log("zaki")
  }
  return (
    <div className="container_form">
      <div className="text">text div</div>

      <div className="form">
        <div className="heading">
          <Heading as="h1" size="md" noOfLines={1} textAlign={"center"}>
            Log in to TimeCamp
          </Heading>
        </div>
<div className="googlelog" onClick={googleclick}>

<div className="child">
<div className="freelogo"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png" alt="" /></div>
<div className="textitem"><h1>Login With Google</h1></div>


</div>
</div>
        <div className="heading">
          <Input placeholder="Enter Email" type={"email"} />
        </div>
        <div className="heading">
          <Input placeholder="Enter Password" type={"password"} />
        </div>
        <div id="head">
          <Text color={"#25cf60"}>Forget Password</Text>
        </div>

        <div className="heading">
          <Button
            backgroundColor={"#25cf60"}
            size="md"
            height="48px"
            width="150px"
            color="white"
          >
            Login
          </Button>
        </div>
        <div className="footer_div">
          <div className="footer">
            {" "}
            <Text color={"#25cf60"} className="smtext">No Accoutn? Sign Up </Text>
          </div>
          <div className="footer">
            {" "}
            <Text className="smtext"  color={"#25cf60"}>Login With SSO </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siginform;
