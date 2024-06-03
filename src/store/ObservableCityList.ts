import { makeObservable, observable, computed, action } from "mobx";
import { CitiesList } from "../data/Cities";
import WeatherApi from "../api/WeatherApi";

class ObservableCityList implements IObservableCityList {
  cities: CityListItem[] = CitiesList;
  selectedCities: CityListItem[] = [];
  selectedCitiesWeatherData: CityWeather[] = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      cities: observable,
      selectedCities: observable,
      selectedCitiesWeatherData: observable,
      pendingRequests: observable,
      citiesCount: computed,
      setSelectedCities: action,
      setSelectedCitiesWeatherData: action,
    });
  }

  get citiesCount() {
    return this.cities.length;
  }

  get citiesCords() {
    let result: CitiesCords = {
      latitude: this.selectedCities.map((city) => city.latitude),
      longitude: this.selectedCities.map((city) => city.longitude),
    };
    return result;
  }

  setSelectedCities(cities: CityListItem[]) {
    this.selectedCities = [...cities];
    WeatherApi.getCitiesWeather(this.citiesCords).then((response) => {
      this.setSelectedCitiesWeatherData(response);
    });
  }

  setSelectedCitiesWeatherData(weatherData: CityWeather[]) {
    this.selectedCitiesWeatherData = weatherData;
  }
}

export const observableCityList = new ObservableCityList();
