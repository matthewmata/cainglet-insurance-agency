import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(
      `${name}, ${streetAddress}, ${city}, ${state}, ${zip}, 
      ${phone}, ${email}, ${comments}, ${gender}, ${birthday},
      ${reasonForShopping}, ${driversLicenseNumber}, ${yearOfVehicle1}, ${modelOfVehicle1}, ${makeOfVehicle1}, ${desiredCoverage1}`
    );
    setName("");
    setStreetAddress("");
    setCity("");
    setState("");
    setZip("");
    setPhone("");
    setEmail("");
    setGender("");
    setComments("");
    setBirthday("");
    setReasonForShopping("");
    setDriversLicenseNumber("");
    setYearOfVehicle1("");
    setModelOfVehicle1("");
    setMakeOfVehicle1("");
    setDesiredCoverage1("");
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
          <form onSubmit={handleSubmit}>
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
                    <option disabled selected>
                      ---
                    </option>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  Gender
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                  >
                    <option disabled selected>
                      ---
                    </option>
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
                    <option disabled selected>
                      ---
                    </option>
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
            {width <= 1023 ? <div className="divider"></div> : ""}
          </form>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default AutoInsurance;
