import React from "react";
import Styles from "../Styles/Navbar/Navbarheaders.module.css";

const Navbarheader = () => {
  const handleclick = () => {};
  return (
    <div className={Styles.conatiner_navbar}>
      <div className={Styles.text_div}>
        <h2 className={Styles.h1tag}>
          Want to become a Reseller, Affiliate, or Integration Partner? We are
          recruiting for our new Partner Programs.
        </h2>
      </div>
      <div>
        <h1 className={Styles.underline_tag} onClick={handleclick}>
          Learn more and apply here ➡️
        </h1>
      </div>
    </div>
  );
};

export default Navbarheader;
