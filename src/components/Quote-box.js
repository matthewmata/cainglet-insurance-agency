import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuoteBox = () => {
  const [url, setUrl] = useState("/quote/auto-insurance");

  return (
    <section className="quote-box-wrap">
      <div className="hero-text has-text-centered">
        <div className="has-text-centered quote-box">
          <h1>Let’s Get Started</h1>
          <h2>Get a Free Quote!</h2>
          <h3>Includes personal service from one of our agents!</h3>
          <h4>
            <strong>Select type of insurance…</strong>
          </h4>
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
          <h4>
            <strong>Or call us!</strong>
          </h4>
          <a href="tel:+310-830-7136">
            <h5>
              <strong>310-830-7136</strong>
            </h5>
          </a>
        </div>
        <h5>
          CAINGLET INSURANCE AGENCY
          <br /> Insurance you can depend on!
        </h5>
      </div>
    </section>
  );
};

export default QuoteBox;
