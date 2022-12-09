import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../Events.css";

function Events({ currentUserName, setEvents, events }) {
  const handleDelete = (id) => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/events/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      response.json().then((data) => {
        setEvents(data);
      });
    });
  };

  const AllEvents = events.map((event) => (
    <SplideSlide>
      <div className="events-card-hover card" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src={event.event_poster}
          alt="Card "
          style={{ height: "20rem" }}
        />
        <div className="card-body">
          <h4 className="card-title">{event.name}</h4>
          <p className="card-text">Date of Event: {event.date}</p>
          <p className="card-text">Time of Event: {event.time_event_starts}</p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-primary text-center"
              to={`/events/${event.id}`}
            >
              See Available vending Categories
            </Link>
          </div>
          {currentUserName === "admin" ? (
            <div className="d-flex justify-content-center my-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(event.id)}
              >
                Delete Event
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <hr></hr>
      <Splide
        className="container"
        options={{
          perPage: 2,
          arrows: false,
          autoplay: true,
          speed: 10000,
          pagination: false,
          interval: 6000,
          rewindByDrag: true,
          drag: "free",
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        {events.length > 0 ? (
          AllEvents
        ) : (
          <h1 className="text-center">No Events Available</h1>
        )}
      </Splide>
    </div>
  );
}

export default Events;
