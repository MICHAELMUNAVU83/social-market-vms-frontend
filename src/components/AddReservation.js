import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function AddReservation({ currentUserId }) {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const addReservationAction = (e) => {
    e.preventDefault();
    fetch(
      "https://social-market-vms-backend.herokuapp.com/api/v1/reservations",
      {
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
      }
    ).then((res) => res.json());

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
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />

        <label>Phone Number</label>

        <PhoneInput
          placeholder="Enter phone number"
          value={phone_number}
          country={"ke"}
          onChange={(e) => {
            setPhoneNumber(e);
          }}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
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
