import { createContext, useContext } from "react";
import { type ProductTypes } from "@/Components/Catalog/Product";

export interface CartItem extends ProductTypes {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: ProductTypes, quantity: number) => void;
  updateQuantity: (productID: number, newQuantity: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("useCart должен использоваться внутри CartProvider");

  return context;
};
