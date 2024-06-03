interface IObservableCityList {
  cities: CityListItem[];
  selectedCities: CityListItem[];
  selectedCitiesWeatherData: CityWeather[];
  pendingRequests: number;
  setSelectedCities(cities: CityListItem[]): void;
  setSelectedCitiesWeatherData(weatherData: CityWeather[]): void;
}
