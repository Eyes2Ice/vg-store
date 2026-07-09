import { screen, render } from "@/test-utils/render";
import { expect, test, describe, beforeEach } from "vitest";
import Catalog from "./Catalog";

beforeEach(() => {
  render(<Catalog />);
});

describe("Тесты для каталога товаров", () => {
  test("Товары должны рендериться после обращения к API", async () => {
    const productCards = await screen.findAllByTestId("product-card");
    expect(productCards.length).toBeGreaterThan(0);
  });
});
