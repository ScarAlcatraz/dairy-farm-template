import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo-a.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-wrapper">
        <div className="Footer-top">
          <div className="Pages">
            <p className="Pages-title">PAGES</p>
            <Link to="/">Home</Link>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/ourTeam">Our Team</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="Legal-Support">
            <div className="Legal">
              <p className="Legal-title">LEGAL</p>
              <Link to="/termsAndconditions">Terms & Conditions</Link>
            </div>
            <div className="Support">
              <p className="Support-title">SUPPORT</p>
              <Link to="/orderAt">Contact Us</Link>
            </div>
          </div>
          <div className="Social">
            <p className="Social-title">SOCIAL</p>
            <div className="Link-tags">
              <Link to="/orderAt">
                <FacebookIcon style={{ color: "#2ec4b6" }} />
              </Link>
              <Link to="/orderAt">
                <InstagramIcon style={{ color: "#2ec4b6" }} />
              </Link>
              <Link to="/orderAt">
                <TwitterIcon style={{ color: "#2ec4b6" }} />
              </Link>
            </div>
          </div>
        </div>
        <div className="Footer-bottom">
          <img className="Footer-logo" src={logo} alt="" />
          <p className="Copyright-statement">
            Copyright © 2022 Dairy Start Up - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
