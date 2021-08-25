import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

// import TeamPicture from "../images/Highway-1.jpg";

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
            <img
              src="https://www.dankitajimainsuranceagency.com/wp-content/uploads/2020/10/overpaying-1200-by-628-1024x536.jpg"
              alt="Team"
            ></img>
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
              <svg
                width="28px"
                height="28px"
                fill="#ed1d2e"
                viewBox="0 0 492 492"
              >
                <path d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z" />
              </svg>
              <b>Contact Us Today!</b>
              <svg
                width="28px"
                height="28px"
                fill="#ed1d2e"
                viewBox="0 0 492 492"
              >
                <path d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z" />
              </svg>
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
