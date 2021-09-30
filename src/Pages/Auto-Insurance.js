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
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `${name}, ${streetAddress}, ${city}, ${state}, ${zip}, 
      ${phone}, ${email}, ${comments}, ${gender}, ${birthday},
      ${reasonForShopping}, ${driversLicenseNumber}, ${yearOfVehicle1}, ${modelOfVehicle1}, ${makeOfVehicle1}, ${desiredCoverage1},
      ${submit}`
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
      <div className="inner">
        <section className="form-full container has-text-centered">
          <h1>Auto Insurance</h1>
          <h2>Get your Free Auto Insurance Quote Today!</h2>
          <h3>
            Please give us a call {""}
            <a href="tel:+310-830-7136">(310-830-7136)</a>
            {""} or fill out the form below and we will be very happy to help
            you purchase auto insurance smartly with quality and affordable
            insurance with the Cainglet Agency!
          </h3>
          <div className="divider"></div>
          <form onSubmit={handleSubmit} id="form">
            <h6>Vehicle Information</h6>
            <div className="columns">
              <div className="column">
                <p>
                  Year of Vehicle
                  <input
                    type="text"
                    name="yearOfVehicle1"
                    onChange={(e) => setYearOfVehicle1(e.target.value)}
                  />
                </p>
                <p>
                  Make of Vehicle
                  <input
                    type="text"
                    name="makeOfVehicle1"
                    onChange={(e) => setMakeOfVehicle1(e.target.value)}
                  />
                </p>
              </div>
              <div className="column">
                <p>
                  Model of Vehicle
                  <input
                    type="text"
                    name="modelOfVehicle1"
                    onChange={(e) => setModelOfVehicle1(e.target.value)}
                  />
                </p>
                <p>
                  Desired Coverage
                  <select
                    onChange={(e) => setDesiredCoverage1(e.target.value)}
                    name="desiredCoverage1"
                  >
                    <option>---</option>
                    <option>Liability Only</option>
                    <option>Liability & Uninsured Motorist</option>
                    <option>Full Coverage</option>
                    <option>Full Coverage & Uninsured Motorist</option>
                    <option>Not Sure</option>
                  </select>
                </p>
              </div>
            </div>
            <h6>Driver Information</h6>
            <div className="columns">
              <div className="column">
                <p>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  Gender
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                  >
                    <option>---</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </p>
              </div>
              <div className="column">
                <p>
                  Birthday (MM/DD/YYYY)
                  <input
                    type="text"
                    name="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </p>
                <p>
                  Drivers License Number
                  <input
                    type="text"
                    name="driversLicenseNumber"
                    onChange={(e) => setDriversLicenseNumber(e.target.value)}
                  />
                </p>
              </div>
            </div>
            <h6>Contact Information</h6>
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
              <div className="column">
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

export default AutoInsurance;
