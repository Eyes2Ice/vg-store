import { useListState } from "@mantine/hooks";
import { CartContext, type CartItem } from "@/cartContext";
import { type ProductTypes } from "../Catalog/Product";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, handlers] = useListState<CartItem>([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product: ProductTypes, quantity: number) => {
    handlers.setState((currentCart) => {
      if (currentCart.find((item) => item.id === product.id)) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
