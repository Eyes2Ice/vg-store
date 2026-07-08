import { screen, render } from "@/test-utils/render.tsx";
import App from "./App.tsx";
import { expect, it, describe, beforeEach } from "vitest";

beforeEach(() => {
  render(<App />);
});

describe("App компонент", function () {
  it("должен рендерить App", () => {
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
