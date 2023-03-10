import React from "react";
import "../styles/barrados.css";
import Pdf from "../donwload/temario2023.pdf";

const BarraDos = () => {
  return (
    <>
      <div className="container-todo">
        <div className="barra2">
          <p>En CD. Nezahualcóyotl, Edomex.</p>
        </div>
        <div className="descarga">
          <div className="arrow1"></div>
          <p>
            <a href={Pdf} target="_blank">
              Descarga el temario aquí
            </a>
          </p>
          <div className="arrow2"></div>
        </div>
      </div>
    </>
  );
};

export default BarraDos;
