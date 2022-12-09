import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AddEvents.css";

function AddEvents() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [artists, setArtists] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [event_poster, setEvent_poster] = useState("");
  const [gender, setGender] = useState("");
  const [average_age, setAverage_age] = useState("");
  const [number_of_attendees, setNumber_of_attendees] = useState("");
  const [time, setTime] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setEvent_poster(data.secure_url);
      });
  };

  const addAnEvent = (e) => {
    e.preventDefault();
    fetch("/api/v1/events", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        artists: artists,
        date: date,
        venue: venue,
        event_poster: event_poster,
        highest_gender_represented: gender,
        average_age: average_age,
        number_of_atendees: number_of_attendees,
        time_event_starts: time,
      }),
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="form">
      <div className="signup-container">
        <div className="left-container">
          <h1>SOCIAL MARKET VMS</h1>
        </div>
        <div className="right-container">
          <header>
            <h1>Add an Event for which you will handle Vending</h1>
            <div className="set">
              <div className="pets-name">
                <label htmlFor="events-name">Name of the Event</label>
                <input
                  id="events-name"
                  placeholder="Event Name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="pets-photo">
                <button id="pets-upload">
                  <input
                    type="file"
                    id="file-selector"
                    onChange={(e) => {
                      uploadImage(e.target.files);
                    }}
                  />
                </button>
                <label htmlFor="file-selector">Upload Event Poster</label>
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="events-venue">Venue</label>
                <input
                  id="events-venue"
                  placeholder="Venue..."
                  type="text"
                  value={venue}
                  onChange={(e) => {
                    setVenue(e.target.value);
                  }}
                ></input>
              </div>
              <div className="pets-birthday">
                <label htmlFor="pets-birthday">Event Date</label>
                <input
                  id="pets-birthday"
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="events-venue">
                  Select the most represented gender at the event{" "}
                </label>
                <select
                  class="form-select"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option selected>Select a gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="pets-breed">
                <label htmlFor="events-time">Time event starts</label>
                <input
                  id="events-time"
                  placeholder="Venue..."
                  type="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className="pets-weight">
              <label htmlFor="pet-weight-0-25">Main Artists at the Event</label>
              <div className="radio-container">
                <input
                  value={artists}
                  placeholder="Add the main artists"
                  onChange={(e) => {
                    setArtists(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="pets-weight">
                <label htmlFor="pet-weight-0-25">
                  Set the expected number of attendees
                </label>
                <div className="radio-container">
                  <input
                    value={number_of_attendees}
                    placeholder="Number of event attendees"
                    onChange={(e) => {
                      setNumber_of_attendees(e.target.value);
                    }}
                    type="number"
                  />
                </div>
              </div>
              <label htmlFor="pet-weight-0-25">
                Set the average age of attendees
              </label>
              <div className="radio-container">
                <input
                  type="number"
                  value={average_age}
                  onChange={(e) => {
                    setAverage_age(e.target.value);
                  }}
                  placeholder="Average age of attendees"
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button
                id="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button id="next" onClick={addAnEvent}>
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AddEvents;
