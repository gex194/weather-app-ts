import { expect, test } from "vitest";
import CitiesListComponent from "../../components/CitiesList/CitiesListComponent";
import { render } from "@testing-library/react";

const testData: CityWeather[] = [
  {
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
  },
];

test("Render cities list component", () => {
  render(<CitiesListComponent cities={[]} />);
  expect(true).toBeTruthy();
});

test("Render no data text", () => {
  const component = render(<CitiesListComponent cities={[]} />);
  expect(component.getByText("Select cities above")).toBeTruthy();
});

test("Render cities list item if data is present", () => {
  const component = render(<CitiesListComponent cities={testData} />);
  expect(component.getByText("Latitude:")).toBeTruthy();
  expect(component.getByText("Longitude:")).toBeTruthy();
  expect(component.getByText("Current Weather:")).toBeTruthy();
});
