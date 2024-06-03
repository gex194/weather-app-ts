import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

test("Render main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
