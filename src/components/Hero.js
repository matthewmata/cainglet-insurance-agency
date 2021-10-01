import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../images/Highway-2.jpg";

const Hero = () => {
  const [url, setUrl] = useState("/quote/auto-insurance");

  return (
    <section className="hero is-large has-background">
      <img className="hero-background" src={hero} alt="stock background"></img>
      <div className="container">
        <div className="level">
          <div className="column has-text-centered is-three-quarters">
            <h1 className="hero-text">
              CAINGLET INSURANCE AGENCY
              <br /> Insurance you can depend on!
            </h1>
            <div className='hero-text-space'></div>
          </div>
          <div className="hero-quote-box is-vcentered ">
            <h2>Get Started Now</h2>
            <h3>Get a Free Quote!</h3>
            <h4>
              Free personalized consulting
              <br />
              from one of our agents!
            </h4>
            <h5>
              <strong>Select type of insurance…</strong>
            </h5>
            <form>
              <select onChange={(e) => setUrl(e.target.value)}>
                <option value="/quote/auto-insurance">Auto Insurance</option>
                <option value="/quote/homeowners-insurance">
                  Homeowners Insurance
                </option>
                <option value="/contact-us">Business Insurance</option>
                <option value="/contact-us">Life Insurance</option>
                <option value="/contact-us">Motorcycle Insurance</option>
                <option value="/contact-us">Umbrella Insurance</option>
              </select>
              <Link to={url}>
                <input
                  href={url}
                  type="submit"
                  name="submit"
                  value="Start Your Quote!"
                ></input>
              </Link>
            </form>
            <h5>
              <strong>Or call us!</strong>
            </h5>
            <a href="tel:+310-830-7136">
              <h1>
                <strong>310-830-7136</strong>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
