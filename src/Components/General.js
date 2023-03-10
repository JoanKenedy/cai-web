import React from "react";
import { useState } from "react";
import "../styles/general.css";
import Doctor from "../img/doctor.png";
import Foto1 from "../img/foto-1.jpeg";
import Foto2 from "../img/foto-2.jpeg";
import Foto3 from "../img/foto-3.jpeg";
import Foto4 from "../img/foto-4.jpeg";
import Foto5 from "../img/foto-5.jpeg";
import Foto6 from "../img/foto-6.jpeg";
import Foto7 from "../img/foto-7.jpeg";
import Foto8 from "../img/foto-9.jpeg";
import Exito1 from "../img/exito-1.jpeg";
import Exito2 from "../img/exito-2.jpeg";
import Exito3 from "../img/exito-3.jpeg";
import Exito4 from "../img/exito-4.jpeg";
import Exito5 from "../img/exito-5.jpeg";
import Exito6 from "../img/exito-6.jpeg";
import Exito7 from "../img/exito-7.jpeg";

const General = () => {
  const general = [
    {
      title: "Dirigido a",
      texto:
        "El curso está dirigido a odontólogos y especialistas en el área. ",
    },
    {
      title: "Instalaciones",
      texto: "Contamos con instalaciones y equipo de primer nivel",
    },
    {
      title: "Casos de éxito",
      texto:
        " Nuestra misión es tu aprendizaje y que superes tu limites, aqui pruebas éxito que te motivaran a venir con nostros.",
    },
  ];

  const fotos = [
    {
      foto: Foto1,
      caso: Exito1,
    },
    {
      foto: Foto2,
      caso: Exito2,
    },
    {
      foto: Foto3,
      caso: Exito3,
    },
    {
      foto: Foto4,
      caso: Exito4,
    },
    {
      foto: Foto5,
      caso: Exito5,
    },
    {
      foto: Foto6,
      caso: Exito6,
    },
    {
      foto: Foto7,
      caso: Exito7,
    },
    {
      foto: Foto8,
      caso: Exito1,
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
    <div className="general">
      <div className="barra-general">
        <p>Información General</p>
      </div>
      <div className="container-general-informacion">
        <div className="item-general">
          <div className="texto-info">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos un grupo de dentistas especializados en el área de
              periodoncia-implantología-rehabilitación. Con el objetivo de
              formar profesionales de la implantología, en un periodo de tiempo
              corto pero con resultados objetivos al final del curso.
            </p>
          </div>
          <div className="preguntas">
            <div className="wraper">
              {general.map((item, i) => (
                <div className="item-acordeon">
                  <div className="title-acordeon" onClick={() => toggle(i)}>
                    <h5>{item.title}</h5>
                    <i class="fa-solid fa-plus"></i>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <p>{item.texto}</p>
                    {item.title === "Instalaciones" ? (
                      <div className=" container-img-fotos">
                        {fotos.map((element) => (
                          <div className="item-img">
                            <img src={element.foto} alt="" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={
                          item.title === "Dirigido a"
                            ? "container-img-casos ocultar"
                            : "container-img-casos"
                        }
                      >
                        {fotos.map((element) => (
                          <div className="item-img">
                            <img src={element.caso} alt="" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="registrar">
        <p>
          <a href="https://wa.me/524431462935" target="_blank">
            Regístrate ahora mismo
          </a>
        </p>
      </div>
    </div>
  );
};

export default General;
