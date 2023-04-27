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
          El curso de Maxilares Atróficos tiene una duración de tres días el cuál es teórico-práctico-clínico en donde 
          veremos las bases para poder diagnosticar, y tratar a pacientes con maxilares atróficos. Veremos técnicas diversas como:
           <ul>
            <li>Implantes monofásicos </li>
            <li>Mini implantes </li>
            <li>Implantes cortos </li>
            <li>Implantes pterigoideos </li>
            <li>Implantes corticales</li>
            <li>Técnica de Split-Ridge </li>
            <li>Óseo densificación </li>
            <li>Elevación de seno </li>
            <li>Soldadura intraoral </li>
           </ul>
          </p>
          <p>
          Se tendrá teoría y práctica de estas técnicas además de que tendremos pacientes en vivo, donde veremos aplicadas estas técnicas. 
El curso se impartirá en las instalaciones de Centro Académico Integral, las cuales son de primer nivel y se encuentran ubicadas al oriente de la Ciudad de México a 500 mts de FES Zaragoza UNAM.
El Curso está impartido por el Dr. Christian Garrido el cual está especializado en tratamiento de pacientes con maxilares Atroficos y está certificado por el Colegio Mexicano de Implantologia Bucal y Maxilofacial.
El costo del curso es de $18000. 00 pesos los cuales incluyen los tres dias del curso, uniforme, alimentos durante los tres días del curso.
El curso se pude apartar con $5000.00 pesos y el resto cubrirlo 1 semana antes del curso.
El cupo es limitado a 10 asistentes por lo cual se sugiere apartar su lugar lo antes posible
Cualquier duda estamos a sus órdenes
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
