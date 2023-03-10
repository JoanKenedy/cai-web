import React from "react";
import Whats from "../img/whatsapp.png";
import "../styles/boton.css";

const Boton = () => {
  return (
    <div className="container-btn">
      <a href="https://wa.me/524431462935" target="_blank">
        <img src={Whats} alt="" className="btn-contacto" />
      </a>
    </div>
  );
};

export default Boton;
