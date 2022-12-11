import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

import { FaTimes, FaBars } from "react-icons/fa";

function NavBar({
  currentUserName,
  storedToken,
  setStoredToken,
  setFilterQuery,
  setQuery,
}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setStoredToken("");
    navigate("/");
  };

  const [click, setClick] = useState(false);
  const handleClicked = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar-light bg-light d-flex justify-content-between py-1">
      <div onClick={handleClicked} className="nav-icon">
        <i className="fs-1">{click ? <FaTimes /> : <FaBars />}</i>
      </div>
      <div className={click ? "nav-menu active " : "nav-menu"}>
        <Link to="/" className="navbar-brand" onClick={handleClicked}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/events" className="nav-link mx-3 " onClick={handleClicked}>
          Events
        </Link>
        {currentUserName === "admin" ? (
          <Link
            to="/all-reservations"
            className="nav-link"
            onClick={handleClicked}
          >
            {" "}
            All Reservations
          </Link>
        ) : (
          <Link
            to="/my-reservations"
            className="nav-link  w-100 "
            onClick={handleClicked}
          >
            {" "}
            My Reservations
          </Link>
        )}
        {currentUserName === "admin" ? (
          <Link to="/add-events" className="nav-link w-75">
            {" "}
            Add Events
          </Link>
        ) : null}
      </div>
      {window.innerWidth > 600 && (
        <div className="d-flex flex-row">
          <input
            class="form-control w-100"
            type="text"
            placeholder="Search for an event"
            aria-label="Search"
            onChange={(e) => {
              setFilterQuery(e.target.value);
            }}
          />
          <section
            className=" w-100 mx-2"
            onChange={(e) => setQuery(e.target.value)}
          >
            <select class="form-select w-100 mx-5">
              <option value="">All events</option>
              <option value="male">Male dominated events </option>
              <option value="female">Female dominated events</option>
              <option value="day">Day Events</option>
              <option value="night">Night Events</option>
              <option value="oldest">Events with people over 30yrs old</option>
              <option value="youngest">
                Events with people under 30yrs old
              </option>
            </select>
          </section>
        </div>
      )}

      <div>
        <button className="btn btn-danger mx-5" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
