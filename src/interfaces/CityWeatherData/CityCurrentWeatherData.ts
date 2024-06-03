interface CityCurrentWeatherData {
    latitude: number,
    longitude: number,
    time: Date,
    temperature2m: number,
    relativeHumidity2m: number,
    isDay: Boolean,
    rain: number,
    showers: number,
    snowfall: number,
    weatherCode: number,
}