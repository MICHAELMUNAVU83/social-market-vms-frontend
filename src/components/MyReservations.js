import React, { useEffect, useState } from "react";

function MyReservations({ currrentUserName, currentUserId }) {
  console.log(currrentUserName, currentUserId);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/reservations/${currentUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        console.log(data);
      });
  }, [currentUserId]);

  const handleDelete = (id) => {
    fetch(`/api/v1/reservations/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((data) => {
        fetch(`/api/v1/reservations/${currentUserId}`)
          .then((res) => res.json())
          .then((data) => {
            setReservations(data);
          });
      });
    });
    alert("reservations deleted");
  };

  const MyReservations = reservations.map((reservation) => (
    <div className="card my-4">
      <div className="card-header text-center">
        Here are the details of your vending reservation for{" "}
        {reservation.event.name}
      </div>
      <div className="d-flex justify-content-center  container">
        <div className="card-body">
          <h5 className="card-title">
            <span>Event: </span>
            {reservation.event.name}
          </h5>
          <p className="card-text">
            <span>Event Date: </span>
            {reservation.event.date}
          </p>
          <p className="card-text">
            <span>Event Venue : </span>
            {reservation.event.venue}
          </p>
          <p className="card-text">
            <span>Time : </span>
            {reservation.event.time_event_starts}
          </p>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>Vending Category: </span>
            {reservation.vendor_category.category}
          </h5>
          <p className="card-text">
            <span>Vendor Passes: </span>
            {reservation.vendor_category.vendor_passes_per_slot}
          </p>
          <p className="card-text">
            <span>Ammenities: </span>
            {reservation.vendor_category.amenities_provided}
          </p>
          <p className="card-text">
            <span>Cost: </span>
            {reservation.vendor_category.cost_per_slot}
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
      <div className="card-footer text-center text-muted">
        You will be contacted to pay the reservation fee of{" "}
        {reservation.vendor_category.cost_per_slot}
      </div>
    </div>
  ));

  return (
    <div className="container">
      {reservations.length > 0 ? MyReservations : <h1 className="text-center">You have no reservations</h1>}
    </div>
  );
}

export default MyReservations;
