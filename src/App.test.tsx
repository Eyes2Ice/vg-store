import { screen, render } from "@/test-utils/render.tsx";
import App from "./App.tsx";
import { expect, test, describe, beforeEach } from "vitest";

beforeEach(() => {
  render(<App />);
});

describe("App компонент", function () {
  test("App должен корректно рендериться", () => {
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
