import React from 'react';
import '../../assets/css/stylos.scss'
import logo from '../../assets/img/logoAgua.png'; 

function Izquierdo( { setOpenModal } ) {
    return (
        <div className="column column-1">
            <div className="container">

                <div className="row row-1">
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <div className="row row-2">
                    <h1 className="row row-2">JorgeGallardo Company.</h1>
                </div>
                
                <div className="row row-3">
                    <button className="location"  
                        onClick={
                          () => {
                            setOpenModal(state => !state);
                          }
                      }>
                        <p className="locationT">Selecionar la ciudad la cual desea conocer su pronostico</p>
                    </button>
                </div>

            </div>
        </div>
    );
}

export { Izquierdo };
