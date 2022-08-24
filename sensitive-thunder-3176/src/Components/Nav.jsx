import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar/Nav.css";
import { Button } from "@chakra-ui/react";
const Nav = () => {
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
  console.log(scrollclass);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setClick(false);
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
            <Link to="/Blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" onClick={closeMenu}>
              Sign in
            </Link>
          </li>
        </ul>
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
      </nav>
    </div>
  );
};

export default Nav;
