import React from "react";
import { useState, useEffect } from "react";
import "../../stylesheets/Dashboard.scss";

export default function Dashboard({ profileImgSrc, username, email }) {
  let date = new Date();
  let [time, setTime] = useState(`${date.getHours()}:${date.getMinutes()}`);


  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <div className="dashboard__nav__profile">
          {/* <img src={profileImgSrc} alt="profile image" />
          <h2>{username}</h2>
          <p>{email}</p> */}

          {/* placeholder */}
          <img src="/src/assets/images/bg-img2.jpg" alt="profile image" />
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
        <h1 className="--header">Home</h1>
        <div className="dashboard__main__info">
          <div className="dashboard__main__info__greeting">
            {/* <h2>{greeting}</h2> */}
            <h2 className="greeting">Good Afternoon,</h2>
            {/* <h2>{username}</h2> */}
            <h2 className="username">Alexander Afoko</h2>
          </div>
          <div className="dashboard__main__info__date">
            <p className="time">{time}</p>
            {/* <p className="time">11:00<span>am</span></p> */}
            {/* <span>{date}</span> */}
            <p className="date">Tuesday</p>
          </div>
        </div>

        <div className="dashboard__main__inbox">
          {/* dummy text for now */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          exercitationem assumenda expedita similique ut accusantium voluptatem
          dicta porro reprehenderit mollitia distinctio illum esse quam ullam,
          doloribus, deleniti possimus vero in est autem libero aliquid alias
          enim? Fuga inventore, pariatur assumenda distinctio repudiandae
          praesentium cumque dolorem, quisquam, quo porro maxime magnam optio
          harum delectus vel accusantium accusamus tempora? Totam fugiat aperiam
          consequatur beatae sapiente cum animi iste sunt temporibus delectus
          debitis neque nesciunt libero, praesentium blanditiis eum, assumenda
          quo, error eligendi. Eum quam pariatur rerum dignissimos rem
          necessitatibus consequatur enim, quas quo omnis, totam sunt labore
          reprehenderit doloremque nulla blanditiis! Est sint libero, laborum
          ratione perspiciatis voluptates, impedit necessitatibus beatae sequi
          architecto, delectus inventore recusandae animi. Omnis, aspernatur
          explicabo officiis nisi vel laborum. Exercitationem odio placeat vitae
          molestiae alias dolorem! Sit esse voluptatum libero ex et ipsam eaque
          incidunt tempora dolorum dolorem, in nisi minima cupiditate, eligendi
          dicta porro reprehenderit mollitia distinctio illum esse quam ullam,
          doloribus, deleniti possimus vero in est autem libero aliquid alias
          enim? Fuga inventore, pariatur assumenda distinctio repudiandae
          praesentium cumque dolorem, quisquam, quo porro maxime magnam optio
          harum delectus vel accusantium accusamus tempora? Totam fugiat aperiam
          consequatur beatae sapiente cum animi iste sunt temporibus delectus
          debitis neque nesciunt libero, praesentium blanditiis eum, assumenda
          quo, error eligendi. Eum quam pariatur rerum dignissimos rem
          necessitatibus consequatur enim, quas quo omnis, totam sunt labore
          reprehenderit doloremque nulla blanditiis! Est sint libero, laborum
          ratione perspiciatis voluptates, impedi dicta porro reprehenderit
          mollitia distinctio illum esse quam ullam, doloribus, deleniti
          possimus vero in est autem libero aliquid alias enim? Fuga inventore,
          pariatur assumenda distinctio repudiandae praesentium cumque dolorem,
          quisquam, quo porro maxime magnam optio harum delectus vel accusantium
          accusamus tempora? Totam fugiat aperiam consequatur beatae sapiente
          cum animi iste sunt temporibus delectus debitis neque nesciunt libero,
          praesentium blanditiis eum, assumenda quo, error eligendi. Eum quam
          pariatur rerum dignissimos rem necessitatibus consequatur enim, quas
          quo omnis, totam sunt labore reprehenderit doloremque nulla
          blanditiis! Est sint libero, laborum ratione perspiciatis voluptates,
          impedi exum delectus ipsum aspernatur perferendis. Adipisci, magnam?
        </div>
      </main>

      <aside className="dashboard__aside">
        <div className="dashboard__aside__events">
          <h2 className="--header">Most viewed events</h2>
          <ul>
            <li>
              <img src="/src/assets/images/bg-img2.jpg" alt="image" />
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
              <img src="/src/assets/images/bg-img2.jpg" alt="image" />
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
        <div className="dashboard__aside__contacts">
          <h2 className="--header">Recent contacts</h2>
          <ul>
            <li>
              <img src="/src/assets/images/bg-img4.jpg" alt="image" />
              <div>
                <h3>John Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit tenetur.
                </p>
              </div>
            </li>

            <li>
              <img src="/src/assets/images/bg-img4.jpg" alt="image" />
              <div>
                <h3>Jane Doe</h3>
                <p>
                  Rutenet tiredneherper. Tile gnicisipida rutetcesnoc tema tis
                  rolod muspi merol.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
