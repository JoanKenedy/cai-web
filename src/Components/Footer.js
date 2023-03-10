import React from "react";
import LogoFooer from "../img/logo-footer.png";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="item-footer">
        <img src={LogoFooer} alt="" className="logo-footer" />
        <h2>Centro Académico Integral</h2>
      </div>
      <div className="item-footer">
        <p>
          Desarrollado por
          <a href="https://dentarios.com.mx/" target="_blank">
            Agencia de Marketing Dentarios
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
