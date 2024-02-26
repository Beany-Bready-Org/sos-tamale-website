import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <h1>Welcome, Admin</h1>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__main__events">
          <div className="dashboard__main__events__header">
            <h1>
              Manage Events{" "}
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </h1>
          </div>
          <div className="dashboard__main__events__items">
            
          </div>
        </div>
      </div>
    </main>
  );
}
