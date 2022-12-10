import React from "react";
import "../HomePage.css";

import strategy_pic from "../images/strategy.jpg";
import marketing_pic from "../images/marketing.jpg";
import partnership_pic from "../images/partnerships.jpg";
import informed_pic from "../images/informed.png";
import partner from "../images/partner.png";
function HomePage() {
  return (
    <div>
      <section className="home-with-background">
        <div className="home-first-div">
          <h1>
            We provide the <span>BEST CONDITIONS</span>
          </h1>
          <p>
            We provide the best conditions for your <span>vending</span> at the{" "}
            <span>best events </span> In Kenya
          </p>
        </div>
        <div className="home-second-div d-flex justify-content-around">
          <div className="each-service-card text-center d-flex flex-column align-items-center">
            <img
              src={strategy_pic}
              alt="strategy"
              className="each-service-img"
            />
            <h2>STRATEGY</h2>
            <p>
              We provide the best information about the best events in Kenya so
              we can help you plan your vending business
            </p>
          </div>
          <div className="each-service-card text-center  d-flex flex-column align-items-center">
            <img
              src={marketing_pic}
              alt="marketing"
              className="each-service-img"
            />
            <h2>MARKETING</h2>
            <p>
              We provide your business with the best marketing strategies so you
              can get the best results
            </p>
          </div>
          <div className="each-service-card text-center  d-flex flex-column align-items-center">
            <img
              src={partnership_pic}
              alt="marketing"
              className="each-service-img"
            />
            <h2>PARTNERSHIPS</h2>
            <p>
              We form lasting relationships with you . You will get the first
              call when there's an event
            </p>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="what-we-do-first-div d-flex justify-content-around">
          <div>
            <img src={informed_pic} alt="informed" />
          </div>
          <div>
            <h6>
              By making a resrvation with us, you will be informed about the
              events. We form a lasting partnership with you so you will get the
              first call when there's an event.
            </h6>
          </div>
        </div>
        <div className="what-we-do-first-div d-flex justify-content-around">
          <div>
            <h6 className="text-wrap ">
              We provide the best information about the best events in Kenya.
              You will see the number of people who will attend the event and
              plan stock accordingly.
            </h6>
            <h6 className="text-wrap">
              We will also provide you with details of gender
            </h6>
            <h6>and age of the people who will attend the event.</h6>
          </div>
          <div>
            <img src={partner} alt="informed" />
          </div>
        </div>
      </section>
      <footer>Heyyy</footer>
    </div>
  );
}

export default HomePage;
