import Cart from "@/Components/Cart/Cart";
import { Badge } from "@mantine/core";
import styles from "@/Components/Header/Header.module.css";
import classNames from "classnames";

const Header = () => {
  return (
    <header className="header">
      <div className={styles.header__inner}>
        <a href="/" className={classNames(styles.logo, styles.header__logo)}>
          Vegetable
          <Badge
            color="var(--mantine-color-greenColor-6)"
            className={styles.logo__badge}
          >
            SHOP
          </Badge>
        </a>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
