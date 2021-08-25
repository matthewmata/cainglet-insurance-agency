import React, { Component } from "react";
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
  const [interestIn, setInterestIn] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(
      `${name}, ${streetAddress}, ${city}, ${state}, ${zip}, 
      ${phone}, ${email}, ${comments},`
    );
    setName("");
    setStreetAddress("");
    setCity("");
    setState("");
    setZip("");
    setPhone("");
    setEmail("");
    setComments("");
  };


class AutoInsurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearOfVehicl1: "",
      modelofVehicle1: "",
      makeofVehicle1: "",
      desiredCoverage1: "",
      yearOfVehicl2: "",
      modelofVehicle2: "",
      makeofVehicle2: "",
      desiredCoverage2: "",
      yearOfVehicl3: "",
      modelofVehicle3: "",
      makeofVehicle3: "",
      desiredCoverage3: "",
      yearOfVehicl4: "",
      modelofVehicle4: "",
      makeofVehicle4: "",
      desiredCoverage4: "",
      birthday: "",
      gender: "",
      driversLicenseNumber: "",
      reasonForShopping: "",
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
                      name="yearOfVehicl1"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Make of Vehicle
                    <input
                      type="text"
                      name="makeofVehicle1"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                </div>
                <div className="column">
                  <p>
                    Model of Vehicle
                    <input
                      type="text"
                      name="modelofVehicle1"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Desired Coverage
                    <select
                      onChange={(e) => set(e.target.value)}
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
                      name="fullName"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Gender
                    <select onChange={(e) => set(e.target.value)} name="gender">
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
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Drivers License Number
                    <input
                      type="text"
                      name="driversLicenseNumber"
                      onChange={(e) => set(e.target.value)}
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
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    City
                    <input
                      type="text"
                      name="city"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    State
                    <input
                      type="text"
                      name="state"
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Zip Code
                    <input
                      type="text"
                      name="zip"
                      onChange={(e) => set(e.target.value)}
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
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Phone
                    <input
                      type="text"
                      name="phone"
                      required
                      onChange={(e) => set(e.target.value)}
                    />
                  </p>
                  <p>
                    Reason for shopping
                    <select
                      onChange={(e) => set(e.target.value)}
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
                      onChange={(e) => set(e.target.value)}
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
              {this.props.width <= 1023 ? <div className="divider"></div> : ""}
            </form>
          </section>
          <Footer />
        </div>
      </div>
    );
  
}

export default AutoInsurance;
