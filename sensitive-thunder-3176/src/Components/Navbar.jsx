import React from "react";
import Navbarheader from "./Navbarheader";
import styles from "../Styles/Navbar/Navbar.module.css";
import Nav from "./Nav";

const Navbar = () => {
 


  return (

    <div className={styles.Navbar_container}>
    
        <Navbarheader className={styles.navheader_css}></Navbarheader>
      <div className="Navdiv">
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Navbar;
