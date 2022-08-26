import React, { useContext } from "react";
import Navbarheader from "./Navbarheader";
import styles from "../Styles/Navbar/Navbar.module.css";
import Nav from "./Nav";
import { Condi } from "../Context/Navbarcondition";
const Navbar = () => {
  const {nav}=useContext(Condi)
  console.log("nav",nav)


  return (

    <div className={styles.Navbar_container}>
      {/* {!nav?   <>
      <Navbarheader className={styles.navheader_css}></Navbarheader>
      <div className="Navdiv">
        <Nav></Nav>
      </div>
        </>:""} */}
        <Navbarheader className={styles.navheader_css}></Navbarheader>
      <div className="Navdiv">
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Navbar;
