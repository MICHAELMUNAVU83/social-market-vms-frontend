import React from "react";
import "../HomePage.css";
import strategy_pic from "../images/strategy.jpg";
import marketing_pic from "../images/marketing.jpg";
import partnership_pic from "../images/partnerships.jpg";
import informed_pic from "../images/informed.png";
import partner from "../images/partner.png";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <section className="home-with-background">
        <div className="home-first-div">
          <h1>
            <span>SOCIAL MARKET VMS</span>
          </h1>
          <p>
            We provide best information{" "}
            <span>about vending spaces events </span> In kenya {"  "}
          </p>
          <p>
            
            <h1>Book your space now</h1>
          </p>
          <Link to="/events">
            <button className="btn btn-lg btn-dark">See Events</button>
          </Link>
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
              alt="partnership"
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
            <h6  className="text-wrap page-details-text">
              By making a resrvation with us, you will be informed about the
              events. We form a lasting partnership with you so you will get the
              first call when there's an event.
            </h6>
          </div>
        </div>
        <div className="what-we-do-first-div d-flex justify-content-around">
          <div>
            <h6 className="text-wrap page-details-text ">
              We provide the best information about the best events in Kenya.
              You will see the number of people who will attend the event and
              plan stock accordingly.
            </h6>
            <h6 className="text-wrap  page-details-text">
              We will also provide you with details of gender
            </h6>
            <h6 className=" page-details-text">and age of the people who will attend the event.</h6>
          </div>
          <div>
            <img src={partner} alt="informed" />
          </div>
        </div>
      </section>
      <footer>
        <div className="d-flex justify-content-center">
          <BsInstagram className="social-media-icons" />
          <FiTwitter className="social-media-icons" />
          <HiOutlineMail className="social-media-icons" />

          <FiPhoneCall className="social-media-icons" />
        </div>
        <div className="footer-text">
          the social market vms &copy; 2021
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
