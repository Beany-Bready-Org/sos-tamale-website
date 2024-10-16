import React from "react";
import "../../stylesheets/Clubs.scss";
import { clubData } from "../../data/clubData";
import ClubCard from "./ClubCard";

const Clubs = () => {
  return (
    <div className="clubs">
      <div>
        <h1 className="--header clubs__header">Get to know our clubs!</h1>
        <span className="--description clubs__description">
          We have a lot of clubs for you to explore!!
        </span>
      </div>
      <section className="clubs__clubs">
        {clubData.map((item, index) => (
          <ClubCard
            key={index}
            clubName={item.clubName}
            clubDescription={item.clubDescription}
            imgSrc={item.imgSrc}
            alt={item.alt}
          />
        ))}
      </section>
    </div>
  );
};

export default Clubs;
