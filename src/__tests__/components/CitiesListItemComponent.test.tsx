import { expect, test } from "vitest";
import CitiesListItemComponent from "../../components/CitiesList/CitiesListItemComponent";
import { render } from "@testing-library/react";

const testData: CityWeather = {
  current: {
    latitude: 0,
    longitude: 0,
    time: new Date(),
    temperature2m: 0,
    relativeHumidity2m: 0,
    isDay: true,
    rain: 0,
    showers: 0,
    snowfall: 0,
    weatherCode: 0,
  },
  hourly: {
    time: [],
    temperature2m: [],
    relativeHumidity2m: [],
  },
  daily: {
    time: [],
    temperature2mMax: [],
    temperature2mMin: [],
  },
};

test("Render cities list item component", () => {
  render(<CitiesListItemComponent weatherData={testData} />);
  expect(true).toBeTruthy();
});

test("Render cities list item if data is present", () => {
  const component = render(<CitiesListItemComponent weatherData={testData} />);
  expect(component.getByText("Latitude:")).toBeTruthy();
  expect(component.getByText("Longitude:")).toBeTruthy();
  expect(component.getByText("Current Weather:")).toBeTruthy();
});

test("Render cities list item city weather data", () => {
  const { current } = testData;
  const component = render(<CitiesListItemComponent weatherData={testData} />);
  expect(component.getByTestId("current-latitude-value").innerText).toContain(
    current.latitude.toString()
  );
  expect(component.getByTestId("current-longitude-value").innerText).toContain(
    current.longitude.toString()
  );
  expect(
    component.getByTestId("current-temperature-value").innerText
  ).toContain(current.temperature2m.toString());
});
