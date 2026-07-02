import { useEffect, useState } from "react";
import styles from "@/Components/Catalog/Catalog.module.css";
import ky from "ky";
import { Card, Image, Title, Flex } from "@mantine/core";

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
            </Card>
          );
        })}
      </Flex>
    </section>
  );
};

export default Catalog;
