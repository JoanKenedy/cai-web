import React from "react";
import Foto1 from "../img/paseo1.png";
import Foto2 from "../img/xochi2.png";
import Foto3 from "../img/paseo2.png";
import Foto4 from "../img/xochi3.jpg";
import Foto5 from "../img/paseo5.png";
import Foto6 from "../img/xochi5.jpg";
import "../styles/galery.css";
const Galery = () => {
  return (
    <div className="galery">
      <h2>Lugares que conoceras en la Cdmx</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={Foto1} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto2} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto3} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto4} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto5} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
