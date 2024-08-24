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
          <section className="form-full container">
            <h1 className="has-text-centered">Privacy Policy</h1>
            <div className="privacy-policy">
              <b className="bold-header">What are our policies?</b>
              <div>
                The State of California requires all insurance companies and
                agencies to tell customers about their information practices.
                Information practices include things companies do to gather and
                share information about customers. Insurance companies need
                information to make decisions. They make all sorts of day-to-day
                decisions: who to insure, how much to charge, how to handle
                claims, and others. Because our agency is licensed and appointed
                through Farmers insurance, we follow and comply with the Farmers
                Insurance Company information gathering policies and privacy
                practices.
              </div>
              <b className="bold-header">
                Phone numbers collected for SMS consent will not be shared with
                third parties or affiliates for marketing purposes under any
                circumstances.
              </b>
              <div>
                This information is only used for quoting and servicing
                purposes. Additionally, none of the other information collected
                will be sold or shared with third parties unless under
                compliance with CA state law for judicial or legal reasons.
              </div>
              <b className="bold-header">What are your rights?</b>
              <div>
                Our information practices extend to applicants and policyholders
                (past and present). State and federal laws give you certain
                rights when you take part in transactions having to do with
                insurance for yourself, your family, or your household.
              </div>
              <div className="second-paragraph">
                We send our customers a notice called the "Farmers Privacy
                Notice." The Farmers Privacy Notice does not limit any rights
                you may have - as a consumer, claimant, or beneficiary. Your
                state gives you additional protections. They are explained in
                this notice.
              </div>
              <b className="bold-header">How do we collect the information?</b>
              <div>
                You give us most of the information we need when you apply for
                insurance either through this online questionnaire, in person,
                through phone or through email. Much of it is made up of common,
                practical facts: your employment information, your driving
                record, your age, where you live, and other things like that.
                Many times, we need more information. Or we may need to verify
                information you've given us. When that happens, we normally ask
                for a report from an outside source. That source can be a
                consumer reporting agency or an insurance support organization.
                Both provide information in the form of consumer reports. Most
                insurance companies use these; it's a common industry practice.
              </div>
              <div className="second-paragraph">
                Sometimes one of these outside sources needs to gather
                information before they can prepare an investigative consumer
                report. This could be done as part of a fraud investigation, for
                example. They might then contact you, another adult member of
                your household, or a neighbor by phone or in person. If this
                happens, you can, as the Named Insured, ask us to interview you
                or your spouse as well. We will make every effort to honor your
                request.
              </div>
              <b className="bold-header">
                What types of information do we collect?
              </b>
              <div>
                <b>Auto</b> - While taking your application for insurance and to
                service policies covering your personal vehicles, we may obtain
                information about
                <ul>
                  <li>How you use your vehicle(s), including annual mileage</li>
                  <li>Age, personal habits, and characteristics of drivers</li>
                  <li>
                    History of accidents, driving violations, arrests or
                    convictions, and claims
                  </li>
                  <li>Previous insurance experience</li>
                  <li>
                    Vehicle info such as VIN#, Year Make Model, and desired
                    coverage
                  </li>
                </ul>
              </div>
              <div>
                <b>Personal</b> - Personal information is required for quoting
                various policies this information includes
                <ul>
                  <li>Names of drivers on household</li>
                  <li>Date of Birth</li>
                  <li>Home address of insured</li>
                  <li>Drivers license numbers of drivers on the household</li>
                  <li>Contact information such as phone numbers and emails</li>
                </ul>
              </div>
              <div>
                <b>Property</b> - While taking your application for insurance
                and to service policies covering your real and personal
                property, we may obtain information about
                <ul className="no-margin-bottom">
                  <li>Type of construction and square footage of dwelling</li>
                  <li>
                    Heating system and other physical characteristics of the
                    property
                  </li>
                  <li>Care and maintenance of the property</li>
                  <li>Claims history</li>
                  <li>Previous insurance experience</li>
                  <li>
                    Personal habits and characteristics of the property's
                    occupants
                  </li>
                </ul>
              </div>
              <b className="bold-header">What do we do with the information?</b>
              <div>
                We use the information we collect about you to perform insurance
                functions. This includes
              </div>
              <div>
                <ul>
                  <li>Underwriting and servicing your policy</li>
                  <li>
                    Processing claims (we may obtain information relating to
                    health and employment)
                  </li>
                  <li>Investigating potential fraud</li>
                  <li>Other activities permitted by state and federal law</li>
                </ul>
              </div>
              <div>
                Here's an example: If you ask us to set up a payment by
                electronic funds transfer, we may obtain financial information
                for a particular bank account.
              </div>
              <div className="second-paragraph">
                We may also disclose information to other parties. The law
                permits us to do this without your prior authorization when the
                information goes, for example, to these parties:
              </div>
              <div>
                <ul className="numbered-list">
                  <li>
                    Your Farmers agent - to service your policy as well as their
                    licensed and appointed staff members
                  </li>
                  <li>
                    Persons who need this information to perform normal business
                    functions for us.
                  </li>
                  <li>
                    Persons conducting actuarial or research studies on our
                    behalf.
                  </li>
                  <li>
                    Another insurance company or an insurance support
                    organization - to perform an insurance transaction, or to
                    detect or prevent criminal activity or fraud in connection
                    with an insurance transaction.
                  </li>
                  <li>
                    A medical professional or medical care institution - to
                    verify insurance coverage or benefits or to inform an
                    individual of a medical problem the individual may not know
                    about.
                  </li>
                  <li>An insurance regulatory authority.</li>
                  <li>Law enforcement or other governmental authority.</li>
                </ul>
                <div>
                  An insurance support organization that prepares a report may
                  keep information it gathers and disclose that information to
                  other persons, but only to the extent permitted by federal and
                  state law.
                </div>
                <b className="bold-header">
                  How can you see or make corrections to your personal
                  information?
                </b>
                <div>You have these rights:</div>
                <div>
                  <ul>
                    <li>
                      To know what personal information about you we have in our
                      records. That includes reports from outside sources.
                    </li>
                    <li>To get a copy of your personal information.</li>
                    <li>
                      To request that we correct, change, or remove any
                      information you feel is incorrect.
                    </li>
                  </ul>
                </div>
                <div>
                  To use these rights, you must send us a written request. Your
                  Farmers agent can give you the appropriate service center
                  address.
                </div>
                <div className="second-paragraph">
                  If you request that we correct, change, or remove incorrect
                  information, we'll check our records and make the changes if
                  we can. We'll let you know in writing what we decide.
                </div>
                <div className="second-paragraph">
                  If we cannot make a change you asked for, you can file a
                  statement. Write down the reasons you disagree with our
                  decision. We'll include the statement in our records. That
                  way, anyone who looks at the disputed personal information
                  will also see your statement. From then on, if we disclose
                  your information to another party, we'll include your
                  statement. We will also send a copy to anyone who has gotten
                  your personal information from us in the past two years. Just
                  tell us who you would like us to send it to.
                </div>
                <div className="second-paragraph">
                  For more information please visit:{" "}
                  <a className="privacy-policy-link">
                    https://www.farmers.com/california-consumer-privacy/
                  </a>
                </div>
                <div className="second-paragraph">
                  There are some types of information for which these rights do
                  not apply:
                </div>
                <div>
                  <ul className="no-margin-bottom">
                    <li>
                      Information we collect to process an actual or anticipated
                      claim
                    </li>
                    <li>
                      Information we collect for an actual or anticipated civil
                      or criminal proceeding
                    </li>
                    <li>
                      Specific items of privileged information when an applicant
                      or policyholder is suspected of fraud, material
                      misrepresentation, or material nondisclosure
                    </li>
                  </ul>
                </div>
                <b className="bold-header">We'll keep you informed.</b>
                <div>
                  As required by law, we will keep you up to date on our
                  information practices. We reserve the right to modify our
                  practices at any time, when permitted by law.
                </div>
                <b className="bold-header">Contact Us</b>
                <div>
                  If you have any questions, comments or concerns about this
                  Notice, please email{" "}
                  <a
                    href="mailto: acainglet1@farmersagent.com"
                    className="privacy-policy-link"
                  >
                    acainglet1@farmersagent.com
                  </a>
                  .
                </div>
                <div className="second-paragraph">
                  Or, you can write to us at:
                </div>
                <div className="second-paragraph">
                  Alexander Cainglet Insurance Agency.
                </div>
                <div>Attn: Alexander Cainglet</div>
                <div>860 E Carson. St Suite 119,</div>
                <div>Carson, California 90745, USA</div>
              </div>
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
