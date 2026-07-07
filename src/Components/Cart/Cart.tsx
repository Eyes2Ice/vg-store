import cartIcon from "@/assets/img/icons/cart.svg";
import emptyCartIcon from "@/assets/img/icons/cart-empty.svg";
import { Button, Image, Popover, Text } from "@mantine/core";
import { useContext } from "react";
import { CartContext } from "@/cartContext";

const Cart = () => {
  const cartData = useContext(CartContext);

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          type="button"
          h={44}
          px={40}
          py={10}
          bg="var(--mantine-color-greenColor-6)"
          bdrs={8}
          fw={600}
          fz={16}
          lh="150%"
        >
          {cartData?.totalItems !== 0 && cartData?.totalItems}
          Cart <Image src={cartIcon} alt="Иконка корзины" ml={12} />
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        maw={301}
        w="100%"
        p={24}
        display="flex"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <Image src={emptyCartIcon} w={117} h={106} mb={24} />
        <Text fz={16} lh={1.5} c="var(--mantine-color-grayColor-6)">
          You cart is empty!
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Cart;
