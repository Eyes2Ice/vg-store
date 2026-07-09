import {
  Card,
  Group,
  Text,
  NumberFormatter,
  Button,
  Image,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";

import { useState } from "react";
import { useCart } from "@/Components/Cart/cartContext";
import LoadingImage from "./LoadingImage";
import greenCartIcon from "@/assets/img/icons/cart-green.svg";
import QuantityInput from "../QuantityInput/QuantityInput";

export interface ProductTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  title: string;
  weight: string;
}

const Product = (product: ProductTypes) => {
  const [quantity, setQuantity] = useState<string | number>(1);

  const cartData = useCart();

  const { hovered, ref } = useHover();

  return (
    <Card
      component="li"
      key={product.id}
      w={302}
      py={16}
      pis={16}
      pie={10}
      bdrs={24}
      data-testid="product-card"
    >
      <LoadingImage src={product.image} alt={product.name} />
      <Group justify="space-between" mb={16}>
        <Group gap={12}>
          <Text
            component="h3"
            c="var(--mantine-color-grayColor-9)"
            fw={600}
            fz={18}
            lh="155%"
          >
            {product.title}
          </Text>
          <Text
            c="var(--mantine-color-grayColor-6)"
            ff={"Open Sans, sans-serif"}
            fw={600}
            fz={14}
            lh="143%"
          >
            {product.weight}
          </Text>
        </Group>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </Group>
      <Group justify="space-between" wrap="nowrap">
        <NumberFormatter
          data-testid="product-price"
          prefix="$ "
          value={product.price}
          style={{
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 1.2,
            color: "var(--mantine-color-grayColor-9)",
          }}
        />
        <Button
          data-testid="product-button"
          ref={ref}
          bdrs={8}
          py={10}
          maw={214}
          w={"100%"}
          flex={1}
          h={44}
          px={43}
          bg={hovered ? "#d6f0dc" : "#e7faeb"}
          fw={600}
          fz={16}
          lh={"150%"}
          c={"#3b944e"}
          onClick={() => cartData?.addToCart(product, Number(quantity))}
        >
          Add to cart <Image src={greenCartIcon} ml={10} />
        </Button>
      </Group>
    </Card>
  );
};

export default Product;
