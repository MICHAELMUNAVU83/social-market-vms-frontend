import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import EachEvent from "./components/EachEvent";
import AddEvents from "./components/AddEvents";
import AddVendorCategory from "./components/AddVendorCategory";
import EachCategory from "./components/EachCategory";
import MyReservations from "./components/MyReservations";
import AllReservations from "./components/AllReservations";
import AddReservation from "./components/AddReservation";
function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [events, setEvents] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (storedToken) {
      fetch("/api/v1/profile ", {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCurrentUserName(data.user.username);

          setCurrentUserId(data.user.id);
        });
      fetch("/api/v1/events")
        .then((response) => response.json())
        .then((data) => {
          if (!filterQuery && !query) {
            setEvents(data);
          } else if (filterQuery && !query) {
            setEvents(
              data.filter((event) =>
                event.name.toLowerCase().includes(filterQuery.toLowerCase())
              )
            );
          } else if (!filterQuery && query) {
            fetch(`/api/v1/${query}-events`)
              .then((response) => response.json())
              .then((data) => {
                setEvents(data);
              });
          }
        });
    }
  }, [storedToken, filterQuery, query, events]);

  return (
    <div>
      <Router>
        <NavBar
          storedToken={storedToken}
          setStoredToken={setStoredToken}
          currentUserName={currentUserName}
          currentUserId={currentUserId}
          setFilterQuery={setFilterQuery}
          setQuery={setQuery}
        />
        {storedToken ? (
          <Routes>
            <Route
              path="/"
              element={
                <Events
                  currentUserName={currentUserName}
                  events={events}
                  setEvents={setEvents}
                />
              }
            />
            <Route
              path="/events/:id"
              element={<EachEvent currentUserName={currentUserName} />}
            />
            {currentUserName === "admin" ? (
              <Route path="/add-events" element={<AddEvents />} />
            ) : null}

            {currentUserName === "admin" ? (
              <Route path="/all-reservations" element={<AllReservations />} />
            ) : (
              <Route
                path="/my-reservations"
                element={
                  <MyReservations
                    currentUserName={currentUserName}
                    currentUserId={currentUserId}
                  />
                }
              />
            )}
            <Route
              path="/add-reservation/:id"
              element={<AddReservation currentUserId={currentUserId} />}
            />
            {currentUserName === "admin" ? (
              <Route
                path="/add-vendor-category/:id"
                element={<AddVendorCategory />}
              />
            ) : null}

            <Route
              path="/vendor_categories/:id"
              element={
                <EachCategory
                  currentUserName={currentUserName}
                  currentUserId={currentUserId}
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<SignUp setStoredToken={setStoredToken} />}
            />

            <Route
              path="/login"
              element={<Login setStoredToken={setStoredToken} />}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
