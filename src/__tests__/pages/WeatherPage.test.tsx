import { expect, test } from "vitest";
import WeatherPage from "../../pages/WeatherPage";
import { render } from "@testing-library/react";
import { observableCityList } from "../../store/ObservableCityList";

test("Render weather page", () => {
  render(<WeatherPage store={observableCityList} />);
  expect(true).toBeTruthy();
});
