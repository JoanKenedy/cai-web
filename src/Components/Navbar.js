import React from "react";
import Portada from "../img/portada-new.jpg";
import "../styles/navbar.css";
import Logo from "../img/logo-cai.png";

const Navbar = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <h1>Centro Académico Integral</h1>
      </header>
      <div className="barraUno">
        <p>Inicio de curso 31 de Marzo </p>
        <p>|</p>
        <p>Tiene duración de 1 año</p>
      </div>
      <div className="barraText">
        <p>Cupo Límitado</p>
      </div>
      <div className="hero">
        <img src={Portada} alt="" />
      </div>
    </>
  );
};

export default Navbar;
