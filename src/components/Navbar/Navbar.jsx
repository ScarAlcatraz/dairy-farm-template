import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../imgs/logo-a.png";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#ff9f1c" : "#ffffff",
    };
  };

  const [ToggleMenu, setToggleMenu] = useState(false);

  const ToggleNav = () => {
    setToggleMenu(!ToggleMenu);
  };

  return (
    <div>
      <div className="Navbar-container">
        <div className="Navbar-wrapper">
          <a href="/" className="Navbar-home-logo">
            <img className="home-logo" src={logo} alt="" />
          </a>
          <nav className="Navbar-menu">
            <div className="Navbar-navigation">
              <NavLink style={navLinkStyles} to="/ourStory">
                Our Story
              </NavLink>
              <NavLink style={navLinkStyles} to="/ourTeam">
                Our Team
              </NavLink>
            </div>
            <div className="Navbar-menu-right">
              <NavLink
                style={navLinkStyles}
                to="/products"
                className="Navbar-products"
              >
                Products
              </NavLink>
              <NavLink to="/orderAt" className="Navbar-order-at">
                Order @
              </NavLink>
            </div>
          </nav>
          <div className="Navbar-toggle-menu" onClick={ToggleNav}>
            <MenuRoundedIcon style={{ color: "#ffffff", fontSize: "40px"}} />
          </div>
        </div>
      </div>
      <div className="Toggle-menu">
        {ToggleMenu && (
          <ul>
            <li>
              <NavLink style={navLinkStyles} to="/ourStory">
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/ourTeam">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/orderAt">
                Order @
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
