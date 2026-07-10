import { useListState } from "@mantine/hooks";
import { CartContext, type CartItem } from "@/Components/Cart/cartContext";
import { type ProductTypes } from "../Catalog/Product";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, handlers] = useListState<CartItem>([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const updateQuantity = (productId: number, newQuantity: number) => {
    handlers.setState((currentCart) => {
      if (newQuantity <= 0) {
        return currentCart.filter((item) => item.id !== productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      );
    });
  };

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
    <CartContext.Provider
      value={{ cart, totalItems, totalPrice, addToCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
