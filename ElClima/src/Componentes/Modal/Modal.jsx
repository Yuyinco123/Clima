import React from 'react';
import { createPortal } from 'react-dom';
import feather from 'feather-icons';
import '../../assets/css/stylos.scss';

function Modal({ children, setOpenModal }) {
  const modalRoot = document.getElementById('modal');

  // Verificamos que el nodo modalRoot exista antes de crear el portal
  if (!modalRoot) return null;

  const iconSvg = feather.icons['x-circle'].toSvg();



  return createPortal(
    <div className="ModalBackground">
      <div className="ModalContent">
        <div className="buttonContent">
            <button
                className="CloseButton"
                onClick={() => {
                    setOpenModal(false); // Cerrar el modal estableciendo setOpenModal a false
                }}
                >
                  <div className="iconoClose"
                      dangerouslySetInnerHTML={{ __html: iconSvg }}  style={{ color: '#0066ff' }} // Cambia 'red' al color que desees
                  />
            </button>
        </div>

        <div className="childrenContent">
            {children}
        </div>
            
      </div>
    </div>,
    modalRoot
  );
}

export { Modal };
