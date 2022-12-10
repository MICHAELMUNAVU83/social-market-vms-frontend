import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {IoMdCall} from "react-icons/io"
import {MdEmail} from "react-icons/md"
import {FaUser} from "react-icons/fa"

function AddReservation({ currentUserId }) {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");

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
        <label className="my-1">Name <FaUser/></label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />

        <label className="my-1">Phone Number <IoMdCall/></label>

        <input
          type="number"
          value={phone_number}
          placeholder="Enter your phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-control"
        />

        <label className="my-1">Email <MdEmail/></label>
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
