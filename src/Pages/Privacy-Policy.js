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
              level. Phone numbers collected for SMS consent will not be shared
              with third parties or affiliates for marketing purposes under any
              circumstances. This information is only used for quoting purposes.
              Additionally, none of the other information collected will be sold
              or shared with third parties under any circumstances.
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
