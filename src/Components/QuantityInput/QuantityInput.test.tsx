import { screen, render } from "@/test-utils/render";
import { expect, test, describe, beforeEach } from "vitest";
import App from "@/App";

beforeEach(() => {
  render(<App />);
});

describe("Тесты для регуляторов количества товаров", () => {
  test("Начальное состояние кнопки уменьшения количества товара в карточке должно быть неактивным, а значение поля ввода содержать единицу", async () => {
    const quantityInputs = await screen.findAllByTestId("quantity-input");
    const decrementButtons = await screen.findAllByTestId("action-decrement");

    quantityInputs.forEach((quantityInput) => {
      expect(quantityInput).toHaveValue("1");
    });

    decrementButtons.forEach((decrementButton) => {
      expect(decrementButton).toHaveAttribute("disabled");
    });
  });
});
