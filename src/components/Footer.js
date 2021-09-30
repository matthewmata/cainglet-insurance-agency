import React from "react";

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-contact-us">
      <h2>Contact Us!</h2>
      <div className="columns">
        <div className="column has-text-centered">
          <p>
            Call Us: <a href="tel:+310-830-7136">310-830-7136</a>
          </p>
          <p>
            Text Us: <a href="tel:+916-827-3385">916-827-3385</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto: acainglet1@farmersagent.com">
              acainglet1@farmersagent.com
            </a>
          </p>
        </div>
        <div className="column has-text-centered">
          <p>
            860 E Carson St Suite 119, Carson CA 90745
            <br />
            Monday to Friday: 9:00 am to 6:00 pm
            <br />
            Saturday: 10:00 am to 2:00 pm
            <br />
            24 Hours Claims: <a href="tel:+800-435-7764">800-435-7764</a>
          </p>
        </div>
      </div>
    </div>
    <div className="watermark">
      Designed and developed by Matthew Mata © 2021
    </div>
  </footer>
);

export default Footer;
