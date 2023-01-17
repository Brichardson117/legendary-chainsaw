import React from "react";
import "../assets/style/main.css";
import Carousel from "../componets/carousel";
import EventCards from "../componets/eventCards";





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
        <Carousel/>
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
        <EventCards/>
      </section>
    </>
  );
}

export default Main;
