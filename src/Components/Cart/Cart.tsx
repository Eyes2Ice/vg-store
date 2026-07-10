import cartIcon from "@/assets/img/icons/cart.svg";
import emptyCartIcon from "@/assets/img/icons/cart-empty.svg";
import {
  Button,
  Image,
  Popover,
  Text,
  Box,
  Group,
  Stack,
  NumberFormatter,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useCart } from "@/Components/Cart/cartContext";
import QuantityInput from "../QuantityInput/QuantityInput";

const Cart = () => {
  const { cart, totalItems, totalPrice, updateQuantity } = useCart();
  const { hovered, ref } = useHover();
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          data-testid="cart-button"
          ref={ref}
          type="button"
          h={44}
          px={40}
          py={10}
          bg={hovered ? "#3b944e" : "var(--mantine-color-greenColor-6)"}
          bdrs={8}
          fw={600}
          fz={16}
          lh="150%"
        >
          {totalItems !== 0 && (
            <Box
              data-testid="total-products-counter"
              display="flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              w={20}
              h={20}
              py={3}
              px={9}
              mr={10}
              bdrs={36}
              bg="var(--mantine-color-grayColor-0)"
              fw={600}
              fz={23}
              lh="143%"
              c="var(--mantine-color-grayColor-9)"
            >
              {totalItems}
            </Box>
          )}
          Cart <Image src={cartIcon} alt="Иконка корзины" ml={12} />
        </Button>
      </Popover.Target>
      {/* Пустая корзина */}
      {cart.length === 0 && (
        <Popover.Dropdown
          data-testid="cart-modal"
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
      )}
      {/* Корзина с товарами */}
      {cart.length > 0 && (
        <Popover.Dropdown
          data-testid="cart-modal"
          maw={444}
          w="100%"
          p={24}
          display="flex"
          style={{ flexDirection: "column", gap: 12 }}
        >
          <Group component="ul">
            {cart.map((product, index) => {
              const [title, weight] = product.name.split("-");
              return (
                <Group
                  component="li"
                  key={product.id}
                  gap={12}
                  wrap="nowrap"
                  w="100%"
                >
                  <Image w={64} h={64} src={product.image} />
                  <Stack
                    gap={4}
                    flex={1}
                    pb={18}
                    style={
                      index !== cart.length - 1
                        ? {
                            borderBottom:
                              "1px solid var(--mantine-color-grayColor-3)",
                          }
                        : {}
                    }
                  >
                    <Group gap={12}>
                      <Text
                        component="h3"
                        c="var(--mantine-color-grayColor-9)"
                        fw={600}
                        fz={18}
                        lh="155%"
                      >
                        {title}
                      </Text>
                      <Text
                        c="var(--mantine-color-grayColor-6)"
                        ff={"Open Sans, sans-serif"}
                        fw={600}
                        fz={14}
                        lh="143%"
                      >
                        {weight}
                      </Text>
                    </Group>
                    <Group justify="space-between" wrap="nowrap" w="100%">
                      <NumberFormatter
                        prefix="$ "
                        value={product.price}
                        style={{
                          fontWeight: 600,
                          fontSize: 20,
                          lineHeight: 1.2,
                          color: "var(--mantine-color-grayColor-9)",
                        }}
                      />
                      <QuantityInput
                        quantity={product.quantity}
                        setQuantity={(newQuantity) =>
                          updateQuantity(product.id, Number(newQuantity))
                        }
                        disabledDecrement={false}
                      />
                    </Group>
                  </Stack>
                </Group>
              );
            })}
          </Group>
          <Group
            component="p"
            justify="space-between"
            pt={12}
            style={{
              borderTop: "1px solid var(--mantine-color-grayColor-3)",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: 1.2,
              color: "var(--mantine-color-grayColor-9)",
            }}
          >
            Total{" "}
            <NumberFormatter
              data-testid="total-price"
              prefix="$ "
              value={totalPrice}
            ></NumberFormatter>
          </Group>
        </Popover.Dropdown>
      )}
    </Popover>
  );
};

export default Cart;
