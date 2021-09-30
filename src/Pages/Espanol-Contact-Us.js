import React, { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/Nav-Bar";
import Footer from "../components/Footer";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const EspanolContactUs = ({ width }) => {
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
    const response = await axios.post("/.netlify/functions/ringy", {
      phone_number: phone,
      full_name: name,
      email,
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-us",
        name,
        phone,
        email,
        interestIn,
        comments,
      }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => alert(error));
      
    if (response.status === 200) {
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
          id="form"
        >
          <h1>¿Está Pagando Demasiado en Su Seguro de Auto?</h1>
          <h1>¡Llámenos Ahora!</h1>
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
            <b>Lunes a Viernes de: 9:00 am - 6:00 pm</b>
            <br />
            <b>Sábado: 10:00 am - 2:00 pm</b>
          </h5>
          <div className="divider"></div>
          <p className="call-us">
            <b>¡Obtenga su Cotización Gratis Aquí!</b>
          </p>
          <div className="contact-us-form">
            <p>
              Nombre
              <input
                type="text"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              Correo Electrónico
              <input
                type="text"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              Teléfono
              <input
                type="text"
                name="phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p>
              Interesado
              <select
                onChange={(e) => setInterestIn(e.target.value)}
                name="interestedIn"
              >
                <option>---</option>
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
          {submit ? (
            <div className="submitted">
              ¡Gracias por solicitar una cotización de seguro! Uno de nuestros
              agentes con licencia se comunicará con usted lo antes posible para
              ayudarlo con su cotización. Si desea hablar con alguien de
              inmediato, llámenos al 310-830-7136. (De lunes a viernes de 9:00am
              to 6:00pm, Sábado de 10am to 12:30pm)
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

export default EspanolContactUs;
