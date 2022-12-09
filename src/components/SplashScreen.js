import React from "react";
import "../SplashScreen.css";
import { Link } from "react-router-dom";
function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-screen-content">
        <h1 className="text-center">Welcome to the SOCIAL MARKET VMS</h1>
        <small className="splash-screen-text">
          Please login or sign up to book your next vending space at the
          hottest events in your Kenya{" "}
        </small>
        <div className="my-2">
          <Link to="/login" className="mx-2">
            <button className="btn btn-dark">Login</button>
          </Link>
          -or-
          <Link to="/signup" className="mx-2">
            <button className="btn btn-light">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
