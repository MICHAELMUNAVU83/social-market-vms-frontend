import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../EachEvent.css";
function EachEvent({ currentUserName }) {
  const params = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/events/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [currentUserName, params.id]);

  const handleDelete = (id) => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/vendor_categories/${id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      fetch(
        `https://social-market-vms-backend.herokuapp.com/api/v1/events/${params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEvent(data);
        });
    });
  };

  const eachEvent = (
    <div class="container">
      <div class="cardes float-left">
        <div class="row ">
          <div class="col-sm-7">
            <div class="card-block">
              <h1 class="card-title">{event.name}</h1>
              <p>
                <span className="font-italic">Venue of the event: </span>
                <span>{event.venue}</span>
              </p>
              <p>
                <span className="font-italic">Date of the event: </span>
                <span>{event.date}</span>
              </p>
              <p>
                <span className="font-italic">Time the event starts: </span>
                <span>{event.time_event_starts}</span>
              </p>
              <p>
                <span className="font-italic">
                  Main artists for the event:{" "}
                </span>
                <span>{event.artists}</span>
              </p>
              <p>
                <span className="font-italic">
                  Estimated number of attendees:{" "}
                </span>
                <span>{event.number_of_atendees}</span>
              </p>
              <p>
                <span className="font-italic">Average age of attendees: </span>
                <span>{event.average_age}</span>
              </p>

              <p>
                <span className="font-italic">
                  Highest gender representation:{" "}
                </span>
                <span>{event.highest_gender_represented}</span>
              </p>
            </div>
          </div>

          <div class="col-sm-5">
            <img class="d-block w-100" src={event.event_poster} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
  const eventVendorCategories = event.vendor_categories?.map(
    (eventVendorCategory) => (
      <div
        class="col-4 m-5 bg-light rounded p-1 eachevent"
        style={{ height: "300px" }}
      >
        <p>
          <span>Event category:</span>{" "}
          <span>{eventVendorCategory.category}</span>
        </p>
        <p>
          <span>Cost:</span> Ksh
          <span>{eventVendorCategory.cost_per_slot}</span>
        </p>
        <p>
          <span>Slots left:</span>
          <span>{eventVendorCategory.number_of_slots} </span>
        </p>
        <p>
          <span>Vendor passes provided:</span>{" "}
          <span>{eventVendorCategory.vendor_passes_per_slot}</span>
        </p>
        <p>
          <span>Things to be provided:</span>{" "}
          <span>{eventVendorCategory.amenities_provided}</span>
        </p>
        {eventVendorCategory.number_of_slots > 0 &&
        currentUserName !== "admin" ? (
          <div class="d-flex justify-content-center">
            <Link
              to={`/vendor_categories/${eventVendorCategory.id}`}
              class="btn btn-primary"
            >
              Book a slot for this Category
            </Link>
          </div>
        ) : null}

        {currentUserName === "admin" && (
          <div class="d-flex justify-content-center my-2">
            <button
              class="btn btn-danger"
              onClick={() => handleDelete(eventVendorCategory.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    )
  );
  return (
    <div className="container">
      {eachEvent}
      {currentUserName === "admin" ? (
        <div className="d-flex justify-content-center my-5">
          <Link
            to={`/add-vendor-category/${params.id}`}
            className="text-light text-decoration-none btn btn-danger"
          >
            Add Vendor Category
          </Link>
        </div>
      ) : null}
      <div class="row justify-content-around d-flex flex-wrap">
        {eventVendorCategories}
      </div>
    </div>
  );
}

export default EachEvent;
