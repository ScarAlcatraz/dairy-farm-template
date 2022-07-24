import React from "react";
import "./Contact.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import Contact_image from "../../imgs/Contact.png";

function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact-wrapper">
        <div className="Contact-information">
          <div className="Contact-title">
            <p>Order At</p>
          </div>
          <div className="Contact-details">
            <div className="Contact-address">
              <p>Dairy Start Up</p>
              <p>Village:</p>
              <p>PO:</p>
              <p>Circle:</p>
              <p>District:  Assam</p>
              <p>PIN Code: 101010</p>
            </div>
            <div className="Contact-mail">
              <EmailOutlinedIcon
                style={{ color: "#4e71d3", fontSize: "20px" }}
              />
              <p>dairystartup@gmail.com</p>
            </div>
            <div className="Contact-phone">
              <PhoneIcon style={{ color: "#4e71d3", fontSize: "20px" }} />
              <p>9876543210 (M)</p>
            </div>
          </div>
        </div>
        <div className="Contact-image">
          <img src={Contact_image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
