import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "../../stylesheets/Dashboard.scss";

export default function Dashboard() {
  // placeholder variables
  let name = "Amalitech Internship Excursion";
  let brief = "lorem ipsum dolor sit amet, consectetur adipiscing";
  let imgSrc = "src/assets/images/gallery-images/gallery-img3.png";
  let startDate = "24 Feb";
  let endDate = "1 Mar";
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <h1 className="--header">Welcome, Admin</h1>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__main__events">
          <div className="dashboard__main__events__header">
            <Link to="/events-dashboard">
              Manage Events <FontAwesomeIcon icon={faArrowCircleRight} />
            </Link>
          </div>
          <div className="dashboard__main__events__container">
            <div className="dashboard__main__events__container__item">
              {/* <img src={imgSrc} alt="image" /> */}
              <h1>{name}</h1>
              <p>{brief}</p>
              <p>
                {startDate}
                {endDate ? ` - ${endDate}` : ""}
              </p>
            </div>

            <div className="dashboard__main__events__container__item">
              {/* <img src={imgSrc} alt="image" /> */}
              <h1>{name}</h1>
              <p>{brief}</p>
              <p>
                {startDate}
                {endDate ? ` - ${endDate}` : ""}
              </p>
            </div>

            <div className="dashboard__main__events__container__item">
              {/* <img src={imgSrc} alt="image" /> */}
              <h1>{name}</h1>
              <p>{brief}</p>
              <p>
                {startDate}
                {endDate ? ` - ${endDate}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
