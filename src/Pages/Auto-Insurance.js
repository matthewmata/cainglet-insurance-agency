import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Car from "../components/Car";
import Footer from "../components/Footer";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const AutoInsurance = ({ width }) => {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [comments, setComments] = useState("");
  const [birthday, setBirthday] = useState("");
  const [reasonForShopping, setReasonForShopping] = useState("");
  const [driversLicenseNumber, setDriversLicenseNumber] = useState("");
  const [yearOfVehicle1, setYearOfVehicle1] = useState("");
  const [modelOfVehicle1, setModelOfVehicle1] = useState("");
  const [makeOfVehicle1, setMakeOfVehicle1] = useState("");
  const [desiredCoverage1, setDesiredCoverage1] = useState("");
  const [yearOfVehicle2, setYearOfVehicle2] = useState("");
  const [modelOfVehicle2, setModelOfVehicle2] = useState("");
  const [makeOfVehicle2, setMakeOfVehicle2] = useState("");
  const [desiredCoverage2, setDesiredCoverage2] = useState("");
  const [yearOfVehicle3, setYearOfVehicle3] = useState("");
  const [modelOfVehicle3, setModelOfVehicle3] = useState("");
  const [makeOfVehicle3, setMakeOfVehicle3] = useState("");
  const [desiredCoverage3, setDesiredCoverage3] = useState("");
  const [yearOfVehicle4, setYearOfVehicle4] = useState("");
  const [modelOfVehicle4, setModelOfVehicle4] = useState("");
  const [makeOfVehicle4, setMakeOfVehicle4] = useState("");
  const [desiredCoverage4, setDesiredCoverage4] = useState("");
  const [submit, setSubmit] = useState(false);
  const [twoCars, setTwoCars] = useState(false);
  const [threeCars, setThreeCars] = useState(false);
  const [fourCars, setFourCars] = useState(false);

  useEffect(() => {
    document.title = "Auto Insurance";
  });

  const carFunctions = [
    [
      setYearOfVehicle1,
      setMakeOfVehicle1,
      setModelOfVehicle1,
      setDesiredCoverage1,
    ],
    [
      setYearOfVehicle2,
      setMakeOfVehicle2,
      setModelOfVehicle2,
      setDesiredCoverage2,
    ],
    [
      setYearOfVehicle3,
      setMakeOfVehicle3,
      setModelOfVehicle3,
      setDesiredCoverage3,
    ],
    [
      setYearOfVehicle4,
      setMakeOfVehicle4,
      setModelOfVehicle4,
      setDesiredCoverage4,
    ],
  ];

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
        "form-name": "auto-insurance",
        name,
        streetAddress,
        city,
        state,
        zip,
        phone,
        email,
        comments,
        gender,
        birthday,
        reasonForShopping,
        driversLicenseNumber,
        yearOfVehicle1,
        modelOfVehicle1,
        makeOfVehicle1,
        desiredCoverage1,
        yearOfVehicle2,
        modelOfVehicle2,
        makeOfVehicle2,
        desiredCoverage2,
        yearOfVehicle3,
        modelOfVehicle3,
        makeOfVehicle3,
        desiredCoverage3,
        yearOfVehicle4,
        modelOfVehicle4,
        makeOfVehicle4,
        desiredCoverage4,
      }),
    });

    if (ringyResponse.status === 200 || netlifyResponse.status === 200) {
      setSubmit(true);
    }
  };

  const handleAnotherCar = (i) => {
    if (i === 1) {
      setTwoCars(!twoCars);
      setThreeCars(false);
      setFourCars(false);
    }
    if (i === 2) {
      setThreeCars(!threeCars);
      setFourCars(false);
    }
    if (i === 3) {
      setFourCars(!fourCars);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <NavBar />
      <div className="inner">
        <section className="form-full container has-text-centered">
          <h1>Auto Insurance</h1>
          <h2>Get your Free Auto Insurance Quote Today!</h2>
          <h3>
            Please give us a call {""}
            <a href="tel:310-830-7136">(310-830-7136)</a>
            {""} or fill out the form below and we will be very happy to help
            you purchase auto insurance smartly with quality and affordable
            insurance with the Cainglet Agency!
          </h3>
          <div className="divider"></div>
          <form onSubmit={handleSubmit} id="form">
            <h6>Vehicle Information</h6>
            {carFunctions.map((funcs, index) => {
              if (
                index === 0 ||
                (index === 1 && twoCars) ||
                (index === 2 && threeCars) ||
                (index === 3 && fourCars)
              ) {
                return (
                  <Car
                    funcs={funcs}
                    index={index}
                    handleAnotherCar={handleAnotherCar}
                    key={index}
                    arrow={[twoCars, threeCars, fourCars]}
                  />
                );
              }
              return "";
            })}
            <h6>Driver Information</h6>
            <div className="columns">
              <div className="column">
                <p>
                  <label htmlFor="full name">
                    Full Name
                    <input
                      id="full name"
                      type="text"
                      name="name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="gender">
                    Gender
                    <select
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                    >
                      <option>---</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </label>
                </p>
              </div>
              <div className="column">
                <p>
                  <label htmlFor="birthday">
                    Birthday (MM/DD/YYYY)
                    <input
                      id="birthday"
                      type="text"
                      name="birthday"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="drivers license number">
                    Drivers License Number
                    <input
                      id="drivers license number"
                      type="text"
                      name="driversLicenseNumber"
                      onChange={(e) => setDriversLicenseNumber(e.target.value)}
                    />
                  </label>
                </p>
              </div>
            </div>
            <h6>Contact Information</h6>
            <div className="columns">
              <div className="column">
                <p>
                  <label htmlFor="street address">
                    Street Address
                    <input
                      id="street address"
                      type="text"
                      name="streetAddress"
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="city">
                    City
                    <input
                      id="city"
                      type="text"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="state">
                    State
                    <input
                      id="state"
                      type="text"
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="zip code">
                    Zip Code
                    <input
                      id="zip code"
                      type="text"
                      name="zip"
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </label>
                </p>
              </div>
              <div className="column">
                <p>
                  <label htmlFor="email">
                    Email
                    <input
                      id="email"
                      type="text"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="phone">
                    Phone
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="reason for shopping">
                    Reason for shopping
                    <select
                      id="reason for shopping"
                      onChange={(e) => setReasonForShopping(e.target.value)}
                      name="reasonForShopping"
                    >
                      <option>---</option>
                      <option>Not insured</option>
                      <option>Currently paying too much</option>
                      <option>Insured with bad company</option>
                      <option>Other</option>
                    </select>
                  </label>
                </p>
                <p>
                  <label htmlFor="comments">
                    Comments (optional)
                    <input
                      id="comments"
                      type="text"
                      name="comments"
                      onChange={(e) => setComments(e.target.value)}
                    />
                  </label>
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

export default AutoInsurance;
