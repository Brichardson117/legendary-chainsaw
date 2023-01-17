import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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

export default function EventCards() {
  return (
    <section>
      <Grid container spacing={2} className="uk-flex">
        {Events().map((event) => (
          <Grid item sm={6} md={4} sx={{ flexGrow: 1 }} key={event.EventName}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <CardMedia
                component="a"
                sx={{ height: 0, pt: " 65%" }}
                image={event.src}
                title={event.EventName}
                rel="nofollow"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  align="left"
                  component="h2"
                >
                  {event.EventName}
                </Typography>
                <Typography component="p">{event.location}</Typography>
                <Typography component="p">{event.Date}</Typography>
                <Button variant="contained" color="success">
                 Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
