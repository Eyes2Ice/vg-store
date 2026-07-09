import { screen, render } from "@/test-utils/render";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach } from "vitest";
import Header from "./Header";

beforeEach(() => {
  render(<Header />);
});

describe("Тесты шапки", () => {
  test("При клике по кнопке корзины должно открываться модальное окно", async () => {
    const user = userEvent.setup();
    const openCartButton = screen.getByTestId("cart-button");

    await user.click(openCartButton);

    const cartModal = await screen.findByTestId("cart-modal");

    expect(cartModal).toBeInTheDocument();
  });

  test("Визуализация модального окна должна зависеть от состояния корзины. В случае отсутствия товаров в корзине, модальное окно открывается, но с соответствующим уведомлением", async () => {
    const user = userEvent.setup();
    const openCartButton = screen.getByTestId("cart-button");

    await user.click(openCartButton);

    const cartModal = await screen.findByTestId("cart-modal");

    expect(cartModal).toBeInTheDocument();
    expect(cartModal).toHaveTextContent("You cart is empty!");
  });
});
