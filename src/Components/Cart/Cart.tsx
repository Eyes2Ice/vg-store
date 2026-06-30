import cartIcon from "@/assets/img/icons/cart.svg";
import styles from "@/Components/Cart/Cart.module.css";
import classNames from "classnames";

const Cart = () => {
  return (
    <button type="button" className={classNames(styles["cart-button"])}>
      Cart <img src={cartIcon} alt="Иконка корзины" />
    </button>
  );
};

export default Cart;
