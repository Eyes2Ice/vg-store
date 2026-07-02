import { useEffect, useState } from "react";
import styles from "@/Components/Catalog/Catalog.module.css";
import ky from "ky";
import {
  Card,
  Image,
  Title,
  Flex,
  Group,
  Text,
  NumberFormatter,
  Button,
} from "@mantine/core";
import QuantityInput from "../QuantityInput/QuantityInput";
import greenCartIcon from "@/assets/img/icons/cart-green.svg";

interface Vegitable {
  id: number;
  name: string;
  price: number;
  image: string;
} // Типы пропов для продуктов

const Catalog = () => {
  const [vegitablesList, setVegitablesList] = useState<Vegitable[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ky(
          "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
        ).json<Vegitable[]>();

        setVegitablesList(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(String(error));
        }
      }
    };
    getData();
  }, []); // Запрос продуктов

  return (
    <section>
      {/* Заголовок */}
      <Title
        order={1}
        mb={49}
        fw={600}
        size={32}
        className={styles.catalog__title}
      >
        Catalog
      </Title>
      {/* Каталог */}
      <Flex component="ul" rowGap={28} columnGap={24} wrap="wrap">
        {vegitablesList.map((vegitable) => {
          const [title, weight] = vegitable.name.split("-");

          return (
            <Card
              component="li"
              key={vegitable.id}
              w={302}
              py={16}
              pis={16}
              pie={10}
              className={styles.catalog__item}
              bdrs={24}
            >
              <Image
                src={vegitable.image}
                w={276}
                height={276}
                alt={vegitable.name}
              />
              <Group justify="space-between" mb={16}>
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
                <QuantityInput />
              </Group>
              <Group justify="space-between" wrap="nowrap">
                <NumberFormatter
                  prefix="$ "
                  value={vegitable.price}
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: 1.2,
                    color: "var(--mantine-color-grayColor-9)",
                  }}
                />
                <Button
                  bdrs={8}
                  py={10}
                  maw={214}
                  w={"100%"}
                  flex={1}
                  h={44}
                  px={43}
                  bg={"#e7faeb"}
                  fw={600}
                  fz={16}
                  lh={"150%"}
                  c={"#3b944e"}
                >
                  Add to cart <Image src={greenCartIcon} ml={10} />
                </Button>
              </Group>
            </Card>
          );
        })}
      </Flex>
    </section>
  );
};

export default Catalog;
