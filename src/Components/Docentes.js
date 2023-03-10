import React, { useState } from "react";
import Docente1 from "../img/cristhian.png";
import Docente2 from "../img/jorge.jpeg";
import "../styles/docentes.css";

const Docentes = () => {
  const doctores = [
    {
      img: Docente1,
      name: "Dr. Christian Garrido Barbosa",
      texto:
        " Cirujano dentista, profundizanso sus estudios y especializado en la colocación de implantes y su rehabilitación con más de 10 años de experiencia clínica. ",
      curso1:
        "Especialidad en rehabilitación Oral y Rehabilitación IIOHS.2020-actualmente.",
      curso2:
        "Maestría en administración de servicios de salud, UNAM 2015-2017.",
      curso3: "Licenciatura de cirujano dentista 2002-2006.",
      curso4:
        "Master en carga inmediata estratégica IDHE Dental Colombia 2020-2021.",
      curso5: "Diplomado en prótesis total Gnatologica 2011.",
      curso6: "Master en Carga Inmediata Zaragoza España 2021.",
    },
    {
      img: Docente2,
      name: "Dr. Jorge Parra Garcia",
      texto:
        "Cirujano Maxilofacial con experiencia en trauma y el tratamiento de trastornos temporomanbibulares, así como en pacientes con requerimientos complejos para su rehabilitación restaurativa bucal.",
      curso1:
        "Licenciatura en odontología en la Universidad Intercontinental (UIC) 1979 -1984.",
      curso2:
        "Tesis de licenciatura ”Análisis funcional modelo seccionado de Kennedy”.",
      curso3:
        "Residencia hospitalaria en Cirugía Maxilofacial Cruz Roja Naucalpan, 1997-2000.",
      curso4:
        "Fundador, Colegio Mexicano de Implantología Bucal y Maxilofacial, A.C. 2016.",
      curso5:
        " Fundador y Secretario de la Asoc. Mexicana de Implantologia Bucal, A.C. 2003-2005",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="docentes">
      <div className="barra-docente">
        <h2>Ponentes</h2>
      </div>

      <div className="container-docentes">
        {doctores.map((item, i) => (
          <div className="item-docente">
            <div className="item-foto">
              <img src={item.img} alt="" />
            </div>
            <div className="item-description">
              <div className="name-text" onClick={() => toggle(i)}>
                <h6>{item.name}</h6>
                <i class="fa-solid fa-plus"></i>
              </div>
              <div
                className={selected === i ? "text-hide text-show" : "text-hide"}
              >
                <p>{item.texto}</p>
                <ul>
                  <li>{item.curso1}</li>
                  <li>{item.curso2}</li>
                  <li>{item.curso2}</li>
                  <li>{item.curso3}</li>
                  <li>{item.curso4}</li>
                  <li>{item.curso5}</li>
                  <li>{item.curso6}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="barra-abajo-ponente">
        <h2>Reconocimiento con validez oficial (horas crédito).</h2>
      </div>
    </div>
  );
};

export default Docentes;
