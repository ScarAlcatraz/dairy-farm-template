import React from "react";
import { Link } from 'react-router-dom'
import homesection_img from "../../imgs/homesection.png";
import "./Homesection.scss";

function Homesection() {
  return (
    <div className="Home-section-container">
      <div className="Home-section-wrapper">
        <div className="Home-section-image">
          <img src={homesection_img} alt="" />
        </div>
        <div className="Home-section-desc">
          <h1 className="Home-section-desc-title">Dairy Start Up</h1>
          <p className="Home-section-desc-title-body1">
            Bask is the goodness of essential nutrients and unadulterated
            dairy products delivered right to your door-step
          </p>
          <p className="Home-section-desc-title-body2">
            A belief that brings the goodness of nature to you.
          </p>

          <Link to='/products' className='Home-section-product-redirect'>TRY OUR PRODUCTS</Link>
            <p className='Home-section-desc-title-foot'>
              *T&C Apply
            </p>
        </div>
      </div>
    </div>
  );
}

export default Homesection;
