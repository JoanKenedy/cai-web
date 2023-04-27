import React, { useState} from "react";
import Curso1 from '../img/curso-2.jpg';
import Curso2 from '../img/curso-3.jpg';
import CursoMovil1 from '../img/curso-movil-2.jpg';
import CursoMovil2 from '../img/curso-movil-3.jpg';
import '../styles/cursos.css';
import ModalUno from "./ModalUno";
import ModalDos from "./ModalDos";


const Cursos = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () =>{
        setIsOpenModal(true)
    }
    const closeModal = () =>{
        setIsOpenModal(false)
    }
    const [isOpenMod, setIsOpenMod] = useState(false);
    const openMod = () =>{
        setIsOpenMod(true)
    }
    const closeMod = () =>{
        setIsOpenMod(false)
    }
    
   
    return (
    <div className="cursos">
        <h2>Otros Cursos</h2>
        <div className="container-cursos">
            <div className="item-cursos">
             <img src={Curso1} className="img-descktop" alt=""/>
             <img src={CursoMovil1} className="img-movil"  alt=""/>
               <button id="1" onClick={openModal}>Saber más</button>
            </div>
            <div className="item-cursos">
            <img src={Curso2} className="img-descktop"  alt=""/>
            <img src={CursoMovil2} className="img-movil"  alt=""/>
              <button id="2" onClick={openMod}>Saber más</button>
            </div>

        </div>
        <ModalUno 
        isOpen={isOpenModal} 
        closeModal={closeModal}/>
      
        <ModalDos
         isOpenMod={isOpenMod}
         closeMod={closeMod}
         />

    </div>
 );
};
export default Cursos;