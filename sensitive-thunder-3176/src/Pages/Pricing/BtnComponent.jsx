import { Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Pricing.module.css";

const BtnComponent = ({ label, sizeGiven, status, setActive }) => {
  const navigate = useNavigate();
  // const isAuth = useSelector((state) => state.isAuth);
  const isAuth = true;

  return (
    <Button
      _hover={{ backgroundColor: "#1da44c", color: "white" }}
      h={"50px"}
      fontWeight={"400"}
      borderRadius={"30px"}
      bgColor={
        label === "Join for free" ||
        label === "Start your free trial" ||
        label === "Contact us"
          ? "#25cf60"
          : "orange" || setActive == true
          ? "white"
          : ""
      }
      color={
        label === "Join for free" ||
        label === "Start your free trial" ||
        label === "Contact us"
          ? "white"
          : "#5846f6"
      }
      size={sizeGiven === 100 ? "100%" : "lg"}
      className={status === "active" ? styles.activeBtn : ""}
      w={"100%"}
    >
      {label}
    </Button>
  );
};

export default BtnComponent;
