import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores
          tempore possimus perspiciatis eveniet inventore fugiat commodi placeat
          tempora facilis, porro laborum aliquid ipsam totam culpa quis ex.
          Debitis reiciendis deserunt quam, corrupti hic cupiditate, omnis
          repellendus, ratione laboriosam ex ullam amet non. Voluptas amet
          repellat reprehenderit alias accusantium assumenda.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter Your Email" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="img" />
          <p>1,680 people requested access to visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="img" />
      </div>
    </div>
  );
};

export default Header;
