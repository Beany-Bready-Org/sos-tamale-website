import React from "react";

const SuccessCard =  ({name, occupation, successMessage}) => {
  return (
    <div className="success-card">
       <img src="https://unsplash.it/300/300" alt="sucees image" />
       <div className="success-card__body">
            <div className="success-card__body-details">
                <h2 className="success-card__body-name">John Doe</h2>
                <p className="success-card__body-occupation">UI/UX Designer</p>
            </div>
            <p className="success-card__body-success-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin urna non libero porta aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
       </div>
    </div>
  )
};

export default SuccessCard;