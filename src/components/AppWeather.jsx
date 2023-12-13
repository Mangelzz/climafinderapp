import useWeather from "../hooks/useWeather";
import FormApp from "./FormApp";
import Result from "./Result";
import Spinner from "./Spinner";

const AppClima = () => {
  const { result, loading } = useWeather();
  return (
    <>
      <main className="two-columns">
        <FormApp />
        {loading ? <Spinner /> : result?.name && <Result />}
      </main>
    </>
  );
};
export default AppClima;
