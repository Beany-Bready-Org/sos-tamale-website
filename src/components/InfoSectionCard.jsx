import "../stylesheets/InfoSectionCard.scss";

export default function InfoSectionCard({imgSrc, heading, text, direction}) {
  return (
    <div className="info__card" style={{flexDirection: direction}}>
      <div className="info__card__text">
        <h1>{heading}</h1>
        <p>
          {text}
        </p>
      </div>
      <div className="info__card__img" style={{backgroundImage: `url(${imgSrc})`}}>
        {/* <img src={imgSrc} alt={heading} /> */}
      </div>
    </div>
  );
}
