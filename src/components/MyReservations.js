import React, { useEffect, useState } from "react";
import "../MyReservations.css";

function MyReservations({ currrentUserName, currentUserId }) {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/reservations/${currentUserId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
      });
  }, [currentUserId, reservations]);

  const handleDelete = (id) => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/reservations/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      response.json().then((data) => {
        fetch(
          `https://social-market-vms-backend.herokuapp.com/api/v1/reservations/${currentUserId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setReservations(data);
          });
      });
    });
  };

  const MyReservations = reservations.map((reservation) => (
    <div className="card my-4">
      <div className="card-header text-center top-reservation-details">
        Here are the details of your vending reservation for{" "}
        {reservation.event.name}
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <h5 className="card-title">
            <span>Event: </span>
            <span>{reservation.event.name}</span>
          </h5>
          <p className="card-text">
            <span className="reservation-title">Event Venue : </span>
            <span className="reservation-span">{reservation.event.venue}</span>
          </p>
          <p className="card-text">
            <span className="reservation-title">Event Date: </span>
            <span className="reservation-span">{reservation.event.date}</span>
          </p>

          <p className="card-text">
            <span className="reservation-title">Time : </span>
            <span className="reservation-span">
              {reservation.event.time_event_starts}
            </span>
          </p>
        </div>
        <div>
          <h5 className="card-title">
            <span>Vending Category: </span>
            <span>{reservation.vendor_category.name}</span>
          </h5>
          <p className="card-text">
            <span className="reservation-title">Vendor Passes: </span>
            <span className="reservation-span">
              {reservation.vendor_category.vendor_passes_per_slot}
            </span>
          </p>
          <p className="card-text">
            <span className="reservation-title">Ammenities: </span>
            <span className="reservation-span">
              {reservation.vendor_category.amenities_provided}
            </span>
          </p>
          <p className="card-text">
            <span className="reservation-title">Cost: </span>
            <span className="reservation-span">
              Ksh {reservation.vendor_category.cost_per_slot}
            </span>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center my-2">
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(reservation.id)}
        >
          Delete
        </button>
      </div>
      <div className="card-footer text-center text-muted bottom-reservation-details">
        You will be contacted to pay the reservation fee of{" "}
        {reservation.vendor_category.cost_per_slot}
      </div>
    </div>
  ));

  return (
    <div className="container">
      {reservations.length > 0 ? (
        MyReservations
      ) : (
        <h1 className="text-center">You have no reservations</h1>
      )}
    </div>
  );
}

export default MyReservations;
