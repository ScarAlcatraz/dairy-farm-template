import React from "react";
import { Link } from "react-router-dom";
import "./Homeproducts.scss";
// import product from "../../imgs/product.png";

function Homeproducts() {
  return (
    <div className="Homeproducts-container">
      <div className="Homeproducts-wrapper">
        <div className="Homeproducts-title">
          <h2 className="Homeproducts-title-head">Some of our Products</h2>
          <p className="Homeproducts-title-body">
            Pick from a selection of goods.
          </p>
        </div>
        {/* <div className="Homeproducts-cards">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={product} alt="" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>Product 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo hic optio cumque, nihil nesciunt labore quam ipsa
                  ipsum nostrum voluptatum dignissimos eveniet architecto
                  repellat veritatis autem reiciendis! Sit.
                </p>
                <p className="price">₹ 60.00</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={product} alt="" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>Product 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo hic optio cumque, nihil nesciunt labore quam ipsa
                  ipsum nostrum voluptatum dignissimos eveniet architecto
                  repellat veritatis autem reiciendis! Sit.
                </p>
                <p className="price">₹ 85.00</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={product} alt="" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>Product 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo hic optio cumque, nihil nesciunt labore quam ipsa
                  ipsum nostrum voluptatum dignissimos eveniet architecto
                  repellat veritatis autem reiciendis! Sit.
                </p>
                <p className="price">₹ 45.00</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={product} alt="" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>Product 4</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo hic optio cumque, nihil nesciunt labore quam ipsa
                  ipsum nostrum voluptatum dignissimos eveniet architecto
                  repellat veritatis autem reiciendis! Sit.
                </p>
                <p className="price">₹ 30.00</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="Homeproducts-explore-products">
          <Link to="/products">Explore More</Link>
        </div>
      </div>
    </div>
  );
}

export default Homeproducts;
