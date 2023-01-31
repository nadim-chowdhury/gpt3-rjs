import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const Whatgtp3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem."
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem."
        />
        <Feature
          title="Knowldege"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio a aliquam doloremque reiciendis sed facilis explicabo, veritatis necessitatibus exercitationem."
        />
      </div>
    </div>
  );
};

export default Whatgtp3;
