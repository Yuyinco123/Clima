import { createContext, useState, useEffect } from 'react'

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {

  // Crear state para el clima y la opción de modal
  const [openModal, setOpenModal] = useState(false);

  // invocar y usar la api del clima
  const [weather, setWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [city, setCity] = useState('Caracas');

  useEffect(() => {
    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3bf5734f90eb75b3a03bf5377eaa0b7`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchWeather();
}, [city]); // Ejecutar la llamada a la API cada vez que cambie la ciudad


  //usar la hora
  useEffect(() => {
      const intervalId = setInterval(() => {
          const now = new Date();
          const hours = now.getHours();
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = hours % 12 || 12; // Convertir a formato 12 horas

          setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${ampm}`);
      }, 1000);

      return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  //Busqueda de la ciudad y actulizar informacion con la ciudad seleccionada
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const apiKey = 'a3bf5734f90eb75b3a03bf5377eaa0b7'; // Asegúrate de poner tu clave de API aquí

    const handleChange = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${apiKey}`);
                const data = await response.json();

                if (data.list) {
                    const cities = data.list.map(city => city.name); // Obtiene solo los nombres de las ciudades
                    setFilteredOptions(cities);
                }
            } catch (error) {
                setError('Error al buscar ciudades.');
            } finally {
                setLoading(false);
            }
        } else {
            setFilteredOptions([]);
        }
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setSearchTerm(option); // Actualiza el input con la opción seleccionada
        setFilteredOptions([]); // Oculta la lista de resultados
        setCity(option);
    };



  return (
    <ClimaContext.Provider value={{ 
      openModal, 
      setOpenModal,
      weather,
      setWeather,
      currentTime,
      setCurrentTime,
      city,
      setCity,
      searchTerm,
      setSearchTerm,
      filteredOptions,
      setFilteredOptions,
      selectedOption,
      handleChange,
      handleSelect,
      loading,
      error
    }}>
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaContext, ClimaProvider };