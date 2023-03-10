import React from "react";
import "../styles/barratres.css";
import Portada2 from "../img/portada-dos.png";

const BarraTres = () => {
  return (
    <div className="portada2">
      <img src={Portada2} alt="" />
      <div className="item-portada2"></div>
      <div className="item-portada2">
        <div className="sub-item-portada2">
          <h2>objetivo del curso</h2>
          <p>
            Capacitar y reforzar conocimientos en el área de implantología
            bucal, a través de este curso enfocado en un alto nivel teórico
            práctico y así lograr que el cursante desarrolle su destreza y la
            habilidad para aplicar técnicas quirúrgicas de implantología bucal.
          </p>
          <p>
            El eje de este curso se centra principalmente en potenciar la
            experiencia práctica, colocando implantes sobre pacientes reales,
            además siendo instruidos paso a paso por nuestros ponentes.
          </p>
        </div>
        <div className="sub-item-portada2">
          <div className="porciento">
            <p>25%</p>
            <p>
              TEÓRICO, <br /> PRÁCTICO, <br /> PRECLíNICO
            </p>
          </div>
          <div className="porciento">
            <p>75%</p>
            <p>Clínica</p>
          </div>
        </div>
        <a href="https://wa.me/525570090108" target="_blank">
          Contacto
        </a>
      </div>
    </div>
  );
};

export default BarraTres;
