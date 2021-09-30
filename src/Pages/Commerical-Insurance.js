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

const Commerical = ({ width }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestIn, setInterestIn] = useState("");
  const [comments, setComments] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${name}, ${phone}, ${email}, ${interestIn}, ${comments}, ${submit}`);

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
      <div className="inner">
        <form
          className="form-full container has-text-centered"
          onSubmit={handleSubmit}
          id="form"
        >
          <h1>Commerical</h1>
          <h3>
            Do you own or operate your own business? The Cainglet Insurance
            Agency has you covered! We offer reliable, dependable, and
            affordable business insurance policies for a multitude of different
            industries. Some industries that we specialize in include:
          </h3>
          <div className="columns">
            <ol className={width > 754 ? "column" : ""}>
              <li>• Restaurants</li>
              <li>• Commercial Real Estate Buildings</li>
              <li>• Condominiums</li>
              <li>• Apartment Complexes</li>
              <li>• Engineering Services</li>
              <li>• Specialty Food Stores</li>
              <li>• Electrical Contractors</li>
              <li>• Lawn and Gardening Services</li>
            </ol>
            <ol className={width > 754 ? "column" : ""}>
              <li>• Loan Brokers</li>
              <li>• Computer Programing Services</li>
              <li>• Bakeries</li>
              <li>• Markets</li>
              <li>• Real Estate Agencies</li>
              <li>• Legal Services</li>
              <li>• Auto Body Repair Shops</li>
              <li>• Offices and Clinics for Medical Doctors</li>
            </ol>
            <ol className={width > 754 ? "column" : ""}>
              <li>• Carpet Cleaning</li>
              <li>• Barber Shops</li>
              <li>• Florists</li>
              <li>• Architecture offices</li>
              <li>• Animal Specialty Services</li>
              <li>• Plumbing</li>
              <li>• Floor Laying</li>
              <li>• Florists</li>
            </ol>
          </div>
          <h1>AND MANY MORE!</h1>
          <a href="tel:+310-830-7136">
            <p className="call-us">
              <svg
                width="28px"
                height="28px"
                fill="#831618"
                viewBox="0 0 195 195"
              >
                <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
              </svg>
              <b>310-830-7136</b>
              <svg
                width="28px"
                height="28px"
                fill="#831618"
                viewBox="0 0 195 195"
              >
                <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
              </svg>
            </p>
          </a>
          <h5>
            <b>Monday - Friday 9:00 pm - 7:00 pm</b>
            <br />
            <b>Saturday: 10:00 am - 2:00 pm</b>
          </h5>
          <div className="divider"></div>
          <p className="call-us">
            <b>Contact Us Today!</b>
          </p>
          <div className="contact-us-form">
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
                name="interestedIn"
                onChange={(e) => setInterestIn(e.target.value)}
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
              agents will be contacting you ASAP to help you with your quote. If
              you will like to speak with someone immediately, please call us at
              310-830-7136! (Monday to Friday 9:00am to 6:00pm, Saturday 10am to
              2pm)
            </div>
          ) : (
            ""
          )}
          {width <= 1023 ? <div className="divider"></div> : ""}
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Commerical;
