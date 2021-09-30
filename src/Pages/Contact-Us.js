import React, { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

const ContactUs = ({ width }) => {
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
    // const response = await axios.post("/.netlify/functions/ringy", {
    //   full_name: name,
    //   phone_number: phone,
    //   email,
    // });

    // await axios.post("/.netlify/functions/form-submit", {
    //   full_name: name,
    //   phone_number: phone,
    //   email,
    //   interestIn,
    //   comments,
    // });

    if (true) {
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
          name="contact-us"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          <h1>Contact Us!</h1>
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
            <b>Monday - Friday: 9:00 am - 6:00 pm</b>
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
            onSubmit='submit'
          ></input>
          {/* <div data-netlify-recaptcha="true"></div> */}
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

export default ContactUs;
