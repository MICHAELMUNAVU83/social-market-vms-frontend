import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddReservation({ currentUserId }) {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");

  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  console.log(currentUserId);
  const addReservationAction = (e) => {
    e.preventDefault();
    fetch("/api/v1/reservations", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone_number: phone_number,
        email: email,
        user_id: currentUserId,
        vendor_category_id: Number(params.id),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setTimeout(() => {
      navigate("/my-reservations");
    }, 1000);
  };
  const addReservationDiv = (
    <div className="d-flex justify-content-center">
      <form onSubmit={addReservationAction} className="d-flex flex-column">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-control"
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
  return (
    <div>
      <h1 className="text-center">Reserve Your Spot</h1>
      {addReservationDiv}
    </div>
  );
}

export default AddReservation;
