import React from "react";

const ModalDos = ({isOpenMod, closeMod}) => {
    
    return (
        <div className={`modal ${isOpenMod && 'modal-open'}`}> 
        <i class="fa-solid fa-x" onClick={closeMod} ></i>
            <div className="container-modal">
                <div className="modal-2">
                  <h2>Diplomado en Implantología digital quirúrgica y protésica</h2>
                  <h3>Beneficios</h3>
                  <p>
                  <ul>
                    <li>Cirugías en vivo , con pacientes reales.</li>
                    <li>Multimarcas en implantes</li>
                  </ul>
                  </p>
                  
                <h3>OBJETIVO DEL CURSO</h3>
                <p>
                    

Capacitar y reforzar conocimientos en el área de implantología bucal, 
a través de este curso enfocado en un alto nivel teórico práctico y así 
lograr que el cursante desarrolle su destreza y la habilidad para aplicar 
técnicas quirúrgicas de implantología bucal.

El eje de este curso se centra principalmente en potenciar la experiencia práctica, colocando implantes sobre pacientes reales, además siendo instruidos paso a paso por nuestros ponentes.
                </p>

                </div> 

            </div>

        </div>
    );
}

export default ModalDos;