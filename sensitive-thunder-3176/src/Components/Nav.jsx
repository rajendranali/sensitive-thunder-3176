import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../Styles/Navbar/Nav.css";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Condi } from "../Context/Navbarcondition";
const Nav = () => {
  const {setNav}=useContext(Condi)
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [scrollclass, setScrollClass] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
    if (Number(position) > 20) {
      setScrollClass(true);
    } else {
      setScrollClass(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setClick(false);
  };
// const change=()=>{
// setNav(true)
// }
  const navigatortoothersite = () => {};
  return (
    <div className="header" id={scrollclass ? "headercon" : ""}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
            alt="logo"
          />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} className="fa_timescss" />
          ) : (
            <FaBars size={30} className="fa_timescss" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/feature" onClick={closeMenu}>
              Feature
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/integration" onClick={closeMenu}>
              Integration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Blog" onClick={closeMenu} style={{ color: "#1B1B20" }}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" onClick={onclose}>
              Sign in
            </Link>
          </li>
        </ul>
        <div className="buttn_navbar">
          <Button
            className="btn_navbar"
            onClick={navigatortoothersite}
            backgroundColor={"#F7B801"}
            borderRadius={"45px"}
            color={"#ffffff"}
            size="lg"
            variant="solid"
            _hover={{ bg: "#c79603;" }}
          >
            Go To App
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
