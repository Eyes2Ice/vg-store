import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import { CartProvider } from "./Components/Cart/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Catalog />
    </CartProvider>
  );
}
