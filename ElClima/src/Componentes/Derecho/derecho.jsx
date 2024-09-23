import {  useContext,useState, useEffect } from 'react'
import { ClimaContext, ClimaProvider } from '../../Contexto/index';

function Derecho() {
    const { weather, currentTime } = useContext(ClimaContext); // Accede al contexto

    if (!weather) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="column column-2">
            <div className="container">
                <div className="fila fila-1">
                    <h1>{currentTime}</h1> 
                </div>

                <div className="fila fila-2">
                    <div className="contenedor">
                        <div className="fecha">
                            <h2>Fecha:</h2>
                            <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="contenedor">
                        <div className="temperatura">
                            <p>{(weather.main.temp - 273.15).toFixed(2)} °C</p>
                        </div>
                    </div>
                </div>

                <div className="fila fila-3">
                    <div className="contenedor">
                        <div className="ciudad">
                            <p>{weather.name}</p>
                        </div>
                    </div>

                    <div className="contenedor">
                        <div className="clima">
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>

                <div className="fila fila-4">
                    <div className="contenedor">
                        <div className="coordenadas">
                            <p>Latitud: {weather.coord.lat}</p>
                            <p>Longitud: {weather.coord.lon}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Derecho };
