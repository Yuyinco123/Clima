import {  useContext,useState, useEffect } from 'react'
import { ClimaContext, ClimaProvider } from '../../Contexto/index';
import '../../assets/css/stylos.scss';

function ContenidoModal() {
    const { searchTerm,
        setSearchTerm,
        filteredOptions,
        setFilteredOptions,
        selectedOption,
        handleChange,
        handleSelect,
        loading,
        error } = useContext(ClimaContext); // Accede al contexto

    return (
        <div className="contenedorModal">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar ciudad..."
                className="searchInput"
            />
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {filteredOptions.length > 0 && (
                <ul className="resultsList">
                    {filteredOptions.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {selectedOption && <p>Seleccionaste: {selectedOption}</p>} {/* Mostrar opción seleccionada */}
        </div>
    );
}

export { ContenidoModal };
