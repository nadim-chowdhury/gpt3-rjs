import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Imporving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem.",
  },
  {
    title: "Message or aim nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem.",
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem.",
  },
];

const features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default features;
