import { fetchWeatherApi } from "openmeteo";

class WeatherApi {
  static commonParams: Object = {
    current: ["temperature_2m", "relative_humidity_2m", "weather_code"],
    hourly: "temperature_2m",
    daily: ["temperature_2m_max", "temperature_2m_min"],
  };
  static url = "https://api.open-meteo.com/v1/forecast";

  static async getCitiesWeather(citiesCords: CitiesCords) {
    const params = {
      latitude: citiesCords.latitude,
      longitude: citiesCords.longitude,
      ...this.commonParams,
    };
    let result: CityWeather[] = [];

    let responses = await fetchWeatherApi(this.url, params);
    responses.forEach((response) => {
      result.push(this.deconstructResponse(response));
    });
    return result;
  }

  private static deconstructResponse(response: any) {
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;

    const weatherData: CityWeather = {
      current: {
        latitude: latitude.toFixed(4),
        longitude: longitude.toFixed(4),
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: Math.round(current.variables(0)!.value()),
        relativeHumidity2m: current.variables(1)!.value(),
        isDay: current.variables(2)!.value(),
        rain: current.variables(3)!.value(),
        showers: current.variables(4)!.value(),
        snowfall: current.variables(5)!.value(),
        weatherCode: current.variables(6)!.value(),
      },
      hourly: {
        time: this.range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
      },
      daily: {
        time: this.range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        temperature2mMin: daily.variables(1)!.valuesArray()!,
      },
    };

    return weatherData;
  }

  private static range(start: number, stop: number, step: number) {
    return Array.from(
      { length: (stop - start) / step },
      (_, i) => start + i * step
    );
  }
}

export default WeatherApi;
