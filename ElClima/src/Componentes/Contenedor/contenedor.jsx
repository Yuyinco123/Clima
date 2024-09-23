import React, { useEffect, useState } from 'react';
import '../../assets/css/stylos.scss'


function Contenedor(props) {
    return (
    <div className="container">
      {props.children}
    </div>
    );
}

export { Contenedor };
