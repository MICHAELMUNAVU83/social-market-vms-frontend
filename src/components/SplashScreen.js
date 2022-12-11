import React, { useEffect, useRef } from "react";
import "../SplashScreen.css";
import { Link } from "react-router-dom";
import Typed from "typed.js";
function SplashScreen() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WELCOME TO THE SOCIAL MARKET VMS"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: false,
      showCursor: false
     
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="splash-screen">
      <div className="splash-screen-content">
        <span className="text-bold text-center fs-3" ref={el}></span>
        
    
        <small className="splash-screen-text text-center">
          Please login or sign up to book your next vending space at the hottest
          events in your Kenya{" "}
        </small>
        <div className="my-2">
          <Link to="/login" className="mx-2">
            <button className="btn btn-dark btn-lg">Login</button>
          </Link>
          -or-
          <Link to="/signup" className="mx-2">
            <button className="btn btn-light btn-lg">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
