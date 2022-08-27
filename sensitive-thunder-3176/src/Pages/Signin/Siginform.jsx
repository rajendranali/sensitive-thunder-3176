import React from "react";
import "../../Styles/Sign/Sign.css";
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Signtext from "./Signtext";
import { Getlogin } from "../../Redux/AuthReducer/Action";
import { useDispatch, useSelector } from "react-redux";

const Siginform = () => {
  const [authdata, setAuthdata] = React.useState({ email: "", password: "" });

const data=useSelector(store=>store.AuthReducer)
  const dispatch = useDispatch();
  const googleclick = () => {};

  const handlechange = (e) => {
    const { name, value } = e.target;

    setAuthdata({ ...authdata, [name]: value });
  };

  const handlesubmit = () => {
    if (authdata.email && authdata.password) {
      dispatch(Getlogin(authdata));
    } else {
      alert("Invalid Feild");
    }
  };





  return (
    <div className="container_form">
      <div className="text">
        <Signtext />
      </div>

      <div className="form">
        <div className="heading">
          <Heading as="h1" size="md" noOfLines={1} textAlign={"center"}>
            Log in to TimeCamp
          </Heading>
        </div>
        <div className="googlelog" onClick={googleclick}>
          <div className="child">
            <div className="freelogo">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
                alt=""
              />
            </div>
            <div className="textitem">
              <h1>Login With Google</h1>
            </div>
          </div>
        </div>

        <div className="heading">
          <FormControl isRequired>
            <Input
              placeholder="Enter Email"
              type={"email"}
              name="email"
              onChange={handlechange}
              value={authdata.email}
            />
          </FormControl>
        </div>
        <div className="heading">
          <FormControl isRequired>
            <Input
              placeholder="Enter Password"
              type={"password"}
              name="password"
              onChange={handlechange}
              value={authdata.password}
            />
          </FormControl>
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
            onClick={handlesubmit}
            variant={"solid"}
          >
            Login
          </Button>
        </div>

        <div className="footer_div">
          <div className="footer">
            {" "}
            <Text color={"#25cf60"} className="smtext">
              No Accoutn? Sign Up{" "}
            </Text>
          </div>
          <div className="footer">
            {" "}
            <Text className="smtext" color={"#25cf60"}>
              Login With SSO{" "}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siginform;
