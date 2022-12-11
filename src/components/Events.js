import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../Events.css";

function Events({
  currentUserName,
  setEvents,
  events,
  setFilterQuery,
  setQuery,
}) {
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
          <h4 className="titles">{event.name}</h4>
          <div className="d-flex justify-content-center my-1">
            <span className="font-italic mx-1">Venue of the event: </span>
            <span className="paragraphs">{event.venue}</span>
          </div>
          <div className="d-flex justify-content-center my-1">
            <span className="font-italic mx-1">Time event starts: </span>
            <span className="paragraphs">{event.time_event_starts}</span>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-primary text-center"
              to={`/events/${event.id}`}
            >
              See Available Vending Categories
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
      {window.innerWidth < 800 && (
        <input
          className="form-control w-75 my-2 d-flex justify-content-center mx-auto"
          type="text"
          placeholder="Search for an event"
          aria-label="Search"
          onChange={(e) => {
            setFilterQuery(e.target.value);
          }}
        />
      )}

      {window.innerWidth < 800 && (
        <section
          className=" d-flex justify-content-center my-2 w-75 mx-auto"
          onChange={(e) => setQuery(e.target.value)}
        >
          <select class="form-select">
            <option value="">All events</option>
            <option value="male">Male dominated events </option>
            <option value="female">Female dominated events</option>
            <option value="day">Day Events</option>
            <option value="night">Night Events</option>
            <option value="oldest">Events with people over 30yrs old</option>
            <option value="youngest">Events with people under 30yrs old</option>
          </select>
        </section>
      )}
      <hr></hr>
      {window.innerWidth > 800 ? (
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
      ) : (
        <Splide
          className="container"
          options={{
            perPage: 1,
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
      )}
    </div>
  );
}

export default Events;
