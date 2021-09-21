import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

import AJ from "../images/Aj-Cainglet-square.png";
import Alex from "../images/Alex-Cainglet.jpg";

const About = ({ width }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestIn, setInterestIn] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(`${name}, ${phone}, ${email}, ${interestIn}, ${comments}`);
    setName("");
    setPhone("");
    setEmail("");
    setInterestIn("");
    setComments("");
  };

  return (
    <div className="form-page">
      <Header />
      <NavBar />
      <div className="inner-padding">
        <div className="inner">
          <section className="form-full container has-text-centered">
            <h1>Our Agency</h1>
            <div className="level has-text-centered">
              <div className="level-item headshot-container">
                <img src={AJ} alt="Aj Cainglet"></img>
              </div>
              <div className="level-item headshot-container">
                <img src={Alex} alt="Alex Cainglet"></img>
              </div>
            </div>
            <div className="about-us-text">
              For over 25 years, the Cainglet insurance Agency has been devoted
              to providing quality protection and service to our clients. Our
              agency is built on <b>family, trust, excellent service,</b> and
              years of risk management expertise. Our mission is to provide you
              with the care, service, knowledge, and expertise that we would
              provide to members of our own immediate family.
            </div>
            <div className="about-us-text">
              This philosophy has allowed our agency to provide over{" "}
              <b>25 years of award-winning service</b> to our clients. When you
              sign up with us, you are taken care of!
            </div>
            <h3>
              Please feel free to call us at{" "}
              <a href="tel:+310-830-7136">( 310-830-7136 )</a> or
              <a href="mailto: ajcainglet@gmail.com"> email us </a>
              if you have any questions with your insurance needs!
            </h3>
            <div className="divider"></div>
            <p className="call-us">
              <b>Contact Us Today!</b>
            </p>
            <form className="contact-us-form" onSubmit={handleSubmit}>
              <p>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                Email
                <input
                  type="text"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                Phone
                <input
                  type="text"
                  name="phone"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </p>
              <p>
                Interested In
                <select
                  onChange={(e) => setInterestIn(e.target.value)}
                  name="interestedIn"
                >
                  <option disabled selected>
                    ---
                  </option>
                  <option>Auto Insurance</option>
                  <option>Homeowners Insurance</option>
                  <option>Business Insurance</option>
                  <option>Life Insurance</option>
                  <option>Motorcycle Insurance</option>
                  <option>Umbrella Insurance</option>
                  <option>Other</option>
                </select>
              </p>
              <p>
                Comments (optional)
                <input
                  type="text"
                  name="comments"
                  onChange={(e) => setComments(e.target.value)}
                />
              </p>
              <input
                type="submit"
                name="submit"
                value="Get Quote!"
                className="submit-form"
              ></input>
            </form>
            {width <= 1023 ? <div className="divider"></div> : ""}
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
