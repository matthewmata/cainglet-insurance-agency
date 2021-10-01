import React, { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const HomeOwnerInsurance = ({ width }) => {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [dwellingCoveringAmount, setDwellingCoveringAmount] = useState("");
  const [deductible, setDeductible] = useState("");
  const [liabilityLimit, setLiabilityLimit] = useState("");
  const [reasonForShopping, setReasonForShopping] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ringyResponse = await axios.post("/.netlify/functions/ringy", {
      phone_number: phone,
      full_name: name,
      email,
    });

    const netlifyResponse = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "homeowners-insurance",
        name,
        streetAddress,
        city,
        state,
        zip,
        phone,
        email,
        comments,
        dwellingCoveringAmount,
        deductible,
        liabilityLimit,
        reasonForShopping,
      }),
    })

    if (ringyResponse.status === 200 || netlifyResponse.status === 200) {
      setSubmit(true);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <NavBar />
      <div className="inner">
        <section className="form-full container has-text-centered">
          <h1>Homeowners Insurance</h1>
          <h2>Get your Free Homeowners Insurance Quote Today!</h2>
          <h3>
            Please give us a call {""}
            <a href="tel:+310-830-7136">( 310-830-7136 )</a>
            {""} or fill out the form below and we will be very happy to help
            you purchase auto insurance smartly with quality and affordable
            insurance with the Cainglet Agency!
          </h3>
          <div className="divider"></div>
          <form onSubmit={handleSubmit} id="form">
            <h6>Home Information</h6>
            <div className="columns">
              <div className="column">
                <p>
                  Street Address
                  <input
                    type="text"
                    name="streetAddress"
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </p>
                <p>
                  City
                  <input
                    type="text"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </p>
              </div>
              <div className="column">
                <p>
                  State
                  <input
                    type="text"
                    name="state"
                    onChange={(e) => setState(e.target.value)}
                  />
                </p>

                <p>
                  Zip Code
                  <input
                    type="text"
                    name="zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <h6 className="split">Requested Coverage (Optional)</h6>
                <p>
                  Dwelling Coverage Amount
                  <input
                    type="text"
                    name="dwellingCoverageAmount"
                    onChange={(e) => setDwellingCoveringAmount(e.target.value)}
                  />
                </p>
                <p>
                  Deductible
                  <input
                    type="text"
                    name="deductible"
                    onChange={(e) => setDeductible(e.target.value)}
                  />
                </p>
                <p>
                  Liability Limit
                  <input
                    type="text"
                    name="liabilityLimit"
                    onChange={(e) => setLiabilityLimit(e.target.value)}
                  />
                </p>
                <p>
                  Reason for shopping
                  <select
                    onChange={(e) => setReasonForShopping(e.target.value)}
                    name="reasonForShopping"
                  >
                    <option>---</option>
                    <option>Not insured</option>
                    <option>Currently paying too much</option>
                    <option>Insured with bad company</option>
                    <option>Other</option>
                  </select>
                </p>
              </div>
              <div className="column">
                <h6 className="split">Contact Information</h6>
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
                  Phone
                  <input
                    type="text"
                    name="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
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
                  Comments (optional)
                  <input
                    type="text"
                    name="comments"
                    onChange={(e) => setComments(e.target.value)}
                  />
                </p>
              </div>
            </div>
            <input
              type="submit"
              name="submit"
              value="Get Quote!"
              className="submit-form"
            ></input>
            {submit ? (
              <div className="submitted">
                Thank You for Requesting an Insurance Quote! One of our licensed
                agents will be contacting you ASAP to help you with your quote.
                If you will like to speak with someone immediately, please call
                us at 310-830-7136! (Monday to Friday 9:00am to 6:00pm, Saturday
                10am to 12:30pm)
              </div>
            ) : (
              ""
            )}
            {width <= 1023 ? <div className="divider"></div> : ""}
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomeOwnerInsurance;
