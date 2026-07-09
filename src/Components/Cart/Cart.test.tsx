import { screen, render } from "@/test-utils/render";
import userEvent from "@testing-library/user-event";
import App from "@/App.tsx";
import { expect, test, describe, beforeEach } from "vitest";

beforeEach(() => {
  render(<App />);
});

describe("Тестирование корзины", () => {
  test('При первом нажатии по кнопке добавления товара в корзину в кнопке "Cart" в шапке должен появляться счётчик добавленного количества товаров, а значение счётчика становиться равным единице', async () => {
    const user = userEvent.setup();
    const productButtons = await screen.findAllByTestId("product-button");

    await user.click(productButtons[0]);

    const counter = screen.getByTestId("total-products-counter");

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("1");
  });

  test("Локальное управление количеством в карточке товара должно корректно передаваться в глобальную корзину", async () => {
    const user = userEvent.setup();
    const productButtons = await screen.findAllByTestId("product-button");
    const incrementButtons = await screen.findAllByTestId("action-increment");

    await user.tripleClick(incrementButtons[0]);
    await user.click(productButtons[0]);

    const counter = screen.getByTestId("total-products-counter");
    expect(counter).toHaveTextContent("4");
  });

  test("Корзина должна правильно считать общее количество разных товаров", async () => {
    const user = userEvent.setup();
    const productButtons = await screen.findAllByTestId("product-button");
    const incrementButtons = await screen.findAllByTestId("action-increment");

    await user.click(productButtons[0]);
    await user.tripleClick(incrementButtons[1]);
    await user.click(productButtons[1]);

    const counter = screen.getByTestId("total-products-counter");
    expect(counter).toHaveTextContent("5");
  });

  test("Общая сумма добавленных в корзину товаров должна меняться и правильно считаться", async () => {
    const user = userEvent.setup();
    const productPrices = await screen.findAllByTestId("product-price");
    const productButtons = await screen.findAllByTestId("product-button");
    const openCartButton = screen.getByTestId("cart-button");

    expect(productPrices[0]).toHaveTextContent("120");
    expect(productPrices[1]).toHaveTextContent("60");

    await user.click(productButtons[0]);
    await user.click(productButtons[1]);

    await user.click(openCartButton);

    const cartModal = await screen.findByTestId("cart-modal");
    expect(cartModal).toBeInTheDocument();

    const totalPrice = screen.getByTestId("total-price");

    expect(totalPrice).toHaveTextContent("180");
  });
});
