import React, { useState } from "react";
import truncate from "../../helper-functions/Truncator";

const ClubCard = ({ imgSrc, alt, clubName, clubDescription, clubStatus }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="club-card"
    >
      <div className="club-card__image">
        <img src={imgSrc} alt={alt} />
        <h1>{clubName}</h1>
      </div>
      <p className="club-card__description">
        {clubDescription > 100 || !showMore
          ? truncate(clubDescription)
          : clubDescription}
        <br />
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="club-card__cta"
        >
          Show {showMore ? "less" : "more"}
        </button>
      </p>
      <span className="club-card__status">
        Club status: <b>{clubStatus}</b>
      </span>
    </div>
  );
};

export default ClubCard;
