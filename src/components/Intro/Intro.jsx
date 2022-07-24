import React from "react";
import { Link } from "react-router-dom";
import "./Intro.scss";
import quality_check from "../../imgs/quality-check.png";
import plant_based from "../../imgs/plant-based.png";
import delivery from "../../imgs/milk-delivery.png";

function Intro() {
  return (
    <div className="Intro-container">
      <div className="Intro-wrapper">
        <div className="Intro-desc">
          <div className="Intro-desc-title">
            <h2 className="Intro-desc-title1">Why Dairy Start Up?</h2>
            <p className="Intro-desc-title-elab">
            We make sure that each product you get has undergone thorough testing for purity and freshness.
            </p>
          </div>
          <div className="Intro-card-container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={quality_check} alt="" />
                  <h3>Quality Test Everyday</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                  Lorem ipsum dolor sit amet. Id labore doloribus sit eveniet voluptatem velit quasi.
                  </p>
                  <Link to="/ourStory">Read More</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={plant_based} alt="" />
                  <h3>Eco-Friendly</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                  Lorem ipsum dolor sit amet. Id labore doloribus sit eveniet voluptatem velit quasi.
                  </p>
                  <Link to="/ourStory">Read More</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={delivery} alt="" />
                  <h3>Healthy & Nutritious</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                  Lorem ipsum dolor sit amet. Id labore doloribus sit eveniet voluptatem velit quasi.
                  </p>
                  <Link to="/ourStory">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
