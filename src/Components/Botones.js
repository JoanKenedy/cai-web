import React from "react";
import Whatsapp from "../img/whatsapp.png";
import "../styles/botones.css";

const Botones = () => {
  return (
    <div className="botones">
      <a href="https://wa.me/524431462935" target="_blank">
        <img src={Whatsapp} alt="" />
      </a>
    </div>
  );
};

export default Botones;
