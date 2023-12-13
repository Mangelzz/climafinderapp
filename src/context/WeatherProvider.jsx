import { createContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const fetchApi = async (dataInfo) => {
    setLoading(true);
    try {
      const { city, country } = dataInfo;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      const { data } = await axios.get(url);
      const { lat, lon } = data[0];

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: weather } = await axios(urlWeather);
      setResult(weather);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "City not found",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        fetchApi,
        result,
        loading,
        setResult
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
