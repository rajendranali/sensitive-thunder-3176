import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"
import  "../Styles/Navbar/Nav.css";


const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="Nav">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/feature">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing">Project</Link>
          </li>
          <li className="nav-item">
            <Link to="/integration">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
