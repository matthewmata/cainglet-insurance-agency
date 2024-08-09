import React, { useEffect } from "react";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

const PrivacyPolicy = ({ width }) => {
  useEffect(() => {
    document.title = "Privacy Policy";
  });

  return (
    <div className="form-page">
      <Header />
      <NavBar />
      <div className="inner-padding">
        <div className="inner">
          <section className="form-full container has-text-centered">
            <h1>Privacy Policy</h1>
            <div className="privacy-policy">
              Per our company’s underwriting guidelines, our agency collects the
              following information to ensure that our clients get the most
              accurate quote that we can provide. The information that we
              request includes the full name, date of birth, home address, phone
              number, email address, gender, driver’s license number, VIN # of
              vehicles, year make and model of vehicles, and desired coverage
              level. This information is only used for quoting purposes. Your
              information WILL NOT be sold or shared to third parties or other
              outside parties. This includes phone numbers, emails, and any
              other sensitive information. If the quote is converted to a full
              policy with our agency, this information will be stored to our
              internal database to allow us to contact you for servicing of your
              policy. This includes payments, policy updates, upcoming renewals,
              company changes, and any other policy related services.
            </div>
            {width <= 1023 ? <div className="divider"></div> : ""}
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
