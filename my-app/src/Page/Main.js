import React from "react";
import "../assets/style/main.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
      <section>
        <h2 id="section-title">
          <strong>DONATE AND HELP TODAY</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          finibus orci vitae massa luctus molestie. Integer dictum purus quis
          nisi aliquet, quis vehicula dolor dignissim.
        </p>
        <button>DONATE NOW</button>
      </section>
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
      <section>
        <h2 id="section-title">Upcoming Events</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={4}>
            {Events().map((events) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={events.src}
                  title={events.EventName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {events.EventName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {events.location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Main;
