import React, { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

import AJ from "../images/Aj-Cainglet-square.png";
import Alex from "../images/Alex-Cainglet.jpg";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const About = ({ width }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestIn, setInterestIn] = useState("");
  const [comments, setComments] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `${name}, ${phone}, ${email}, ${interestIn}, ${comments}, ${submit}`
    );
    const response = await axios.post("/.netlify/functions/ringy", {
      phone_number: phone,
      full_name: name,
      email,
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-us",
        name,
        phone,
        email,
        interestIn,
        comments,
      }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => alert(error));

    if (response.status === 200) {
      setSubmit(true);
    }
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
            <form className="contact-us-form" onSubmit={handleSubmit} id="form">
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
                  <option>---</option>
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
            {submit ? (
              <div className="submitted">
                Thank You for Requesting an Insurance Quote! One of our licensed
                agents will be contacting you ASAP to help you with your quote.
                If you will like to speak with someone immediately, please call
                us at 310-830-7136! (Monday to Friday 9:00am to 6:00pm, Saturday
                10am to 2pm)
              </div>
            ) : (
              ""
            )}
            {width <= 1023 ? <div className="divider"></div> : ""}
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
