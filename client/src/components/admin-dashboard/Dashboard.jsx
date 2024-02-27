import React from "react";
import "../../stylesheets/Dashboard.scss";

export default function Dashboard({ profileImgSrc, username, email }) {
  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <div className="dashboard__nav__profile">
          {/* <img src={profileImgSrc} alt="profile image" />
          <h2>{username}</h2>
          <p>{email}</p> */}

          {/* placeholder */}
          <img src="/src/assets/images/bg-img1.jpg" alt="profile image" />
          <h2>Alexander Afoko</h2>
          <p>alexanderafoko@gmail.com</p>
        </div>

        <ul className="dashboard__nav__items">
          <li>Home</li>
          <li>All Events</li>
          <li>Enquiries</li>
        </ul>

        <div>
          <button>Logout</button>
        </div>
      </nav>

      <main className="dashboard__main">
        <h1>Home</h1>
        <div className="dashboard__main__info">
          <div className="dashboard__main__info__greeting">
            {/* <h2>{greeting}</h2> */}
            <h2>Good Afternoon,</h2>
            {/* <h2>{username}</h2> */}
            <h2>Alexander Afoko</h2>
          </div>
          <div className="dashboard__main__info__date">
            {/* <span>{time}</span> */}
            <span>11:00am</span>
            {/* <span>{date}</span> */}
            <span>Tuesday</span>
          </div>
        </div>

        <div className="dashboard__main__inbox">{/* nothin for now */}</div>
      </main>

      <aside className="dashboard__aside">
        <div className="dashboard__aside__events">
          <h2>Most viewed events</h2>
          <ul>
            <li>
              <img src="" alt="image" />
              <div>
                <h3>Graduation 2023</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit tenetur.
                </p>
                {/* <button>{likes}</button> */}
                <button>50</button>
              </div>
            </li>

            <li>
              <img src="" alt="image" />
              <div>
                <h3>BDAY 2023</h3>
                <p>
                  Rutenet tiredneherper. Tile gnicisipida rutetcesnoc tema tis
                  rolod muspi merol.
                </p>
                {/* <button>{likes}</button> */}
                <button>50</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="dashboard__aside__contacts"></div>
        <h2>Recent contacts</h2>
        <ul>
          <li>
            <img src="" alt="image" />
            <div>
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit tenetur.
              </p>
            </div>
          </li>

          <li>
            <img src="" alt="image" />
            <div>
              <h3>Jane Doe</h3>
              <p>
                Rutenet tiredneherper. Tile gnicisipida rutetcesnoc tema tis
                rolod muspi merol.
              </p>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
