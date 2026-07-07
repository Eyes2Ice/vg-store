import { useEffect, useState } from "react";
import ky from "ky";
import { Container, Title, Flex, Box, Loader } from "@mantine/core";

import Product, { type ProductTypes } from "./Product";

const Catalog = () => {
  const [productsList, setProductsList] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ky(
          "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
        ).json<ProductTypes[]>();

        setProductsList(data);
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
    <Box component="section" py={119}>
      <Container size={"xl"} px={"lg"}>
        {/* Заголовок */}
        <Title order={1} mb={49} fw={600} size={32} lh="125%">
          Catalog
        </Title>
        {/* Лоадер */}
        {productsList.length === 0 && (
          <Box
            h="100vh"
            display="flex"
            pt={150}
            style={{ justifyContent: "center" }}
          >
            <Loader color="gray" size="xl"></Loader>
          </Box>
        )}
        {/* Каталог */}
        <Flex component="ul" rowGap={28} columnGap={24} wrap="wrap">
          {productsList.map((product) => {
            const [title, weight] = product.name.split("-");
            return (
              <Product
                key={product.id}
                {...product}
                title={title}
                weight={weight}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Catalog;
