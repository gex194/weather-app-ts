const CitiesListItemComponent = ({
  weatherData,
}: {
  weatherData: CityWeather;
}) => {
  const current: CityCurrentWeatherData = weatherData.current;
  return (
    <div className="flex flex-auto flex-row gap-2 pt-2">
      <div className="text-left">
        <p className="text-2xl">Latitude: </p>
        <p className="text-xl" data-testid="current-latitude-value">
          {current.latitude}
        </p>
        <p className="text-2xl">Longitude: </p>
        <p className="text-xl" data-testid="current-longitude-value">
          {current.longitude}
        </p>
      </div>
      <div>
        <p className="text-2xl">Current Weather: </p>
        <h1 data-testid="current-temperature-value">
          {current.temperature2m} °C
        </h1>
      </div>
    </div>
  );
};

export default CitiesListItemComponent;
