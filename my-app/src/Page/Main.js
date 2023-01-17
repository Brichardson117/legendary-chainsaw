import React from "react";
import "../assets/style/main.css";




function Events() {
  return [
    {
      EventName: "Book Drive",
      Date: "February 12, 2023",
      location: "to be determined",
      src: require(`../assets/images/events/0.jpg`),
    },
    {
      EventName: "Food Drive",
      Date: "January 30, 2023",
      location: "to be determined",
      src: require(`../assets/images/events/1.jpg`),
    },
    {
      EventName: "Clothes and Shoes drive",
      Date: "February 20, 2023",
      location: "to be determined",
      src: require(`../assets/images/events/2.jpg`),
    },
    {
      EventName: "Free tutoring",
      Date: "Every Thursday",
      location: "To be detemined",
      src: require(`../assets/images/events/3.jpg`),
    },
  ];
}

function Main() {
  return (
    <>
      <header>
        <h1>Donate</h1>
        <nav>
          <ul>
            <li>
              <a>Call: 555-555-5555</a>
            </li>
            <li>
              <a>email: donate@mail.com </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* carousel section */}
      <section>
     <h2 id="section-title">
         <div className="carousel-container">
          <div className="carousel-item">
            <h1>item1</h1>
          </div>
          <div className="carousel-item">
            <h1>item2</h1>
          </div>
          <div className="carousel-item">
            <h1>item3</h1>
          </div>
         </div>
          </h2>
      </section>

     { /* About us section */}
      <section>
        <h2 id="section-title">About us</h2>
        <p>
          Nullam at est eu quam sodales ultricies lacinia eget urna. Cras tortor
          sapien, laoreet sed faucibus id, hendrerit tincidunt velit. Nam mollis
          justo elit, a porta felis tempus vel. Vivamus auctor, elit ut
          venenatis posuere, sem ante egestas elit, nec eleifend felis dolor in
          diam. Curabitur magna augue, condimentum quis vehicula congue, cursus
          sit amet sem. Mauris mauris libero, tristique sit amet libero ac,
          vulputate varius justo. Duis consequat bibendum urna, et hendrerit
          mauris tincidunt sit amet. Donec feugiat lorem sem, et ullamcorper
          odio convallis sed.
        </p>
      </section>

      {/* Upcoming events section */}
      <section>
        <h2 id="section-title">Upcoming Events</h2>

      </section>
    </>
  );
}

export default Main;
