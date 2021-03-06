import React, { useEffect } from "react";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuoteBox from "../components/Quote-box";

import autoInsuranceImg from "../images/Auto-Insurance.png";
import homeInsuranceImg from "../images/Home-Insurance.jpg";
import lifeInsuranceImg from "../images/Life-Insurance.png";
import commercialInsuranceImg from "../images/Commercial-1.png";

const Home = ({ width }) => {

  useEffect(() => {
    document.title = 'Cainglet Insurance Home'
  })

  return (
    <div className="home-page">
      <Header />
      <NavBar />
      <div className="inner-padding">
        {width <= 769 ? <QuoteBox /> : <Hero />}
        <section className="insurance-selector level">
          <div className="level-item has-text-centered">
            <a href="/quote/auto-insurance">
              <img src={autoInsuranceImg} alt="cars" />
              <p>
                Auto
                <br />
                Insurance
              </p>
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a href="/quote/homeowners-insurance">
              <img src={homeInsuranceImg} alt="cars" />
              <p>
                Home
                <br />
                Insurance
              </p>
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a href="/contact-us">
              <img src={lifeInsuranceImg} alt="cars" />
              <p>
                Life
                <br />
                Insurance
              </p>
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a href="/contact-us">
              <img src={commercialInsuranceImg} alt="cars" />
              <p>
                Commercial <br />
                Insurance
              </p>
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
