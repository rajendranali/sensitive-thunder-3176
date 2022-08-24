import React from "react";
import Navbarheader from "./Navbarheader";
import styles from "../Styles/Navbar/Navbar.module.css";
import Nav from "./Nav";
const Navbar = () => {
  return (
    <div className={styles.Navbar_container}>
      <Navbarheader></Navbarheader>
      <div>

  <Nav></Nav>
      </div>
    </div>
  );
};

export default Navbar;
