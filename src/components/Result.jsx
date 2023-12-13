import useWeather from "../hooks/useWeather";

const Result = () => {
  const { result } = useWeather();
  const { name, main } = result;

  // Kelvin to Celsius
  const kelvin = 273.15;
  return (
    <div className="container weather">
      <h2>The climate in {name} is:</h2>
      <p>{parseInt(main.temp - kelvin)} &deg;C</p>
      <div className="temp_min_max">
        <p>Min: {parseInt(main.temp_min - kelvin)} &deg;C</p>
        <p>Max: {parseInt(main.temp_max - kelvin)} &deg;C</p>
      </div>
    </div>
  );
};
export default Result;
