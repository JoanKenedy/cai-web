import React from "react";
import '../styles/cursos.css';

const ModalUno = ({isOpen, closeModal}) =>{
 
    return(
        <div className={`modal ${isOpen && 'modal-open'}`}> 
        <i class="fa-solid fa-x" onClick={closeModal}></i>
            <div className="container-modal">
            <div className="modal-1">
                  <h2>Odontologia Digital desde 0</h2>
                  <h3>Beneficios</h3>
                  
                  <p>
                  <ul>
                    <li>50% de descuento a recien egresados de la carrera</li>
                    <li>Constancia de asistencia</li>
                    <li>Coffee Break</li>
                  </ul>
                  </p>
                  <h3>Temario</h3>
                 <p>
               
              <ul>
                <li>Historia de la odontologia Digital </li>
                <li> ¿Que Necesito?</li>
               <li>Selección de equipo de Cómputo, procesador, memoria RAM, tarjeta de video etc.</li>  
               <li>Fotografía extra oral, tipos de cámaras tipos de archivos usos en odontologia</li> 
              <li>Radiografías Digitales .
               Usos, tipos, software de diagnóstico. </li>
               <li>Cámaras o escaneres intraorales 
Tipos de archivos usos en odontologia diferencias entre equipos. </li>
           <li>Tomografías Computarizada,
            Software para diagnóstico, tipos de archivos, herramientas para diagnóstico .</li>
          <li>Practica con software BlueSkyBio, Diseño de Cirugía guiada para implantes con diferentes Software Blue Sky Bio, 3d Implant, Exoplan.</li>
                    <li>Sistemas CAD-CAM, Tipos de sistemas, ventajas y desventajas elección correcta que se adapte a nuestra práctica. </li>
<li>Diseño de Sonrisa, Software tipos generalidades integración de archivos.</li>
              </ul>  

</p> 

                </div> 
                

            </div>

        </div>
    );
}

export default ModalUno;