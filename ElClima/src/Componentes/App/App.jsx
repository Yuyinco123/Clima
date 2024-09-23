import {  useState, useEffect } from 'react'
import { Contenedor } from '../Contenedor/contenedor' 
import { Izquierdo } from '../Izquierdo/izquierdo' 
import { Derecho } from '../Derecho/derecho' 
import { Modal } from '../Modal/Modal'
import { ContenidoModal } from '../Modal/ModalContenido'
import { ClimaContext, ClimaProvider } from '../../Contexto/index';


function App() {

  return (
    <>

    <ClimaProvider>
        <Contenedor>
          <ClimaContext.Consumer>
            {(context) => (
              <>
                <Izquierdo setOpenModal={context.setOpenModal} />
                <Derecho /> 
                {context.openModal && (
                  <Modal setOpenModal={context.setOpenModal}>
                    <ContenidoModal /> 
                  </Modal>
                )}
              </>
            )}
          </ClimaContext.Consumer>
        </Contenedor>
    </ClimaProvider>


    </>
  )
}

export default App
