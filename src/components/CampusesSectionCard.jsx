import React from "react"
import "../stylesheets/CampusesSectionCard.scss";

export default function CampusesSectionCard({imgSrc, heading, text, direction}) {
  return (
    <div className="campuses__card" style={{flexDirection: 'row'}}>
      <div className="campuses__card__text">
        <h1>{heading}</h1>
        <p>
          {text}
        </p>
      </div>
      <div className="campuses__card__img">
        <img src={imgSrc} alt={heading} />
      </div>
    </div>
  );
}
