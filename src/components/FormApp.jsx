import useWeather from "../hooks/useWeather";

const FormApp = () => {
  const { search, searchData, fetchApi, setResult } = useWeather();
  const { city, country } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    fetchApi(search);
    setResult({});
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={searchData}
            value={city}
          />
        </div>

        <div className="item">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            onChange={searchData}
            value={country}
          >
            <option value="">-- Select a country --</option>
            <option value="US">United States</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="MX">Mexico</option>
            <option value="ES">Spain</option>
            <option value="PE">Peru</option>
            <option value="VE">Venezuela</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
export default FormApp;
