import React from "react";
import Teacher from "../assets/svg/teacher.svg";
import "../stylesheets/Teachers.scss";

const Teachers = () => {
  return (
    <div
     className="teachers"
    >
      <img
        src={Teacher}
        alt="Teacher and students illustration"
      />
      <div className="message">
        <h1 className="--header">Coming Soon!!</h1>
        <span className="--description">
          We can&apos;t wait to show you our amazing teachers here at SOS HGSTL!
        </span>
      </div>
    </div>
  );
};

export default Teachers;
