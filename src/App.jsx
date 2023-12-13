import AppClima from "./components/AppWeather";
import { WeatherProvider } from "./context/WeatherProvider";

const App = () => {
  return (
    <WeatherProvider>
      <header>
        <h1>Weather Finder</h1>
      </header>
      <AppClima />
    </WeatherProvider>
  );
};
export default App;
