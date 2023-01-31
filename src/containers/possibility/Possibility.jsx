import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="img" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          facilis dolorem veritatis asperiores assumenda porro doloribus
          molestias rem deserunt quasi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo, asperiores dolores odit at eum perferendis
          praesentium provident magnam velit explicabo.
        </p>
        <h4>Request Early Access</h4>
      </div>
    </div>
  );
};

export default Possibility;
