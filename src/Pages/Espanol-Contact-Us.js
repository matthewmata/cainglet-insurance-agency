import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

const EspanolContactUs = ({ width }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestIn, setInterestIn] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(
      `${name}, ${city}, ${state} ${phone}, ${email}, ${interestIn}, ${comments}`
    );
    setName("");
    setCity("");
    setState("");
    setPhone("");
    setEmail("");
    setInterestIn("");
    setComments("");
  };

  return (
    <div className="form-page">
      <Header />
      <NavBar />
      <div className="inner">
        <form
          className="form-full container has-text-centered"
          onSubmit={handleSubmit}
        >
          <h1>¡Permítanos Ayudarle a Ahorrar Dinero!</h1>
          <img
            loading="lazy"
            src="https://www.dankitajimainsuranceagency.com/wp-content/uploads/2020/10/overpaying-1200-by-628-1024x536.jpg"
            alt="Team"
          ></img>
          <h1>¿Está Pagando Demasiado en Su Seguro de Auto?</h1>
          <h1>¡Llámenos Ahora!</h1>
          <a href="tel:+310-830-7136">
            <p className="call-us">
              <svg
                width="28px"
                height="28px"
                fill="#ed1d2e"
                viewBox="0 0 195 195"
              >
                <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
              </svg>
              <b>310-830-7136</b>
              <svg
                width="28px"
                height="28px"
                fill="#ed1d2e"
                viewBox="0 0 195 195"
              >
                <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
              </svg>
            </p>
          </a>
          <h5>
            <b>Lunes a Viernes de: 9:00 pm - 7:00 pm</b>
            <br />
            <b>Sábado: 10:00 am - 2:00 pm</b>
          </h5>
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
            <b>¡Obtenga su Cotización Gratis Aquí!</b>
            <svg
              width="28px"
              height="28px"
              fill="#ed1d2e"
              viewBox="0 0 492 492"
            >
              <path d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z" />
            </svg>
          </p>
          <div className="contact-us-form">
            <p>
              Nombre
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              Ciudad
              <input
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </p>
            <p>
              Estado
              <input
                type="text"
                name="state"
                onChange={(e) => setState(e.target.value)}
              />
            </p>
            <p>
              Correo Electrónico
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              Teléfono
              <input
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p>
              Interesado
              <select
                onChange={(e) => setInterestIn(e.target.value)}
                name="interestedIn"
              >
                <option disabled selected>
                  ---
                </option>
                <option>Seguro de Auto</option>
                <option>Seguro de Casa</option>
                <option>Seguro de Vida</option>
                <option>Seguro de Negocio</option>
                <option>Seguro de Motocicleta</option>
              </select>
            </p>
            <p>
              Comentarios
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
            value="¡Obtener un Presupuesto!"
            className="submit-form"
          ></input>
          {width <= 1023 ? <div className="divider"></div> : ""}
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default EspanolContactUs;
