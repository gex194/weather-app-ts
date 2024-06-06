import { Line } from "react-chartjs-2";
import { CityDailyWeatherData } from "../../interfaces/CityWeatherData/CityDailyWeatherData";

const CitiesListItemComponent = ({
  weatherData,
}: {
  weatherData: CityWeather;
}) => {
  const current: CityCurrentWeatherData = weatherData.current;
  const hourly: CityHourlyWeatherData = weatherData.hourly;
  const daily: CityDailyWeatherData = weatherData.daily;
  console.log(hourly);
  return (
    <div className="flex flex-auto flex-row gap-2 pt-2">
      <div className="text-left">
        <div className="mb-4">
          <p className="text-2xl">Latitude: </p>
          <p className="text-xl" data-testid="current-latitude-value">
            {current.latitude}
          </p>
          <p className="text-2xl">Longitude: </p>
          <p className="text-xl" data-testid="current-longitude-value">
            {current.longitude}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">Current Weather: </p>
          <h1 data-testid="current-temperature-value">
            {current.temperature2m} °C
          </h1>
        </div>
      </div>
      <div className=" w-full">
        <p className="text-2xl">Weekly Temperature Forecast (Daily):</p>
        <Line
          options={{
            responsive: true,
          }}
          data={{
            labels: daily.time,
            datasets: [
              {
                label: "Max temperature",
                data: daily.temperature2mMax,
                borderColor: "rgb(75,192,192)",
                borderWidth: 1,
              },
              {
                label: "Min temperature",
                data: daily.temperature2mMin,
                borderColor: "rgb(225,25,10)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CitiesListItemComponent;
