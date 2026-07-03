import Cart from "@/Components/Cart/Cart";
import { Badge, Box, Group } from "@mantine/core";

const Header = () => {
  return (
    <Box
      component="header"
      bg="var(--mantine-color-grayColor-0)"
      pos="fixed"
      w="100%"
      style={{ zIndex: 2 }}
    >
      <Group justify="space-between" py={7.5} px={20}>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: 0.9,
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          Vegetable
          <Badge
            px={12}
            pt={4}
            pb={5}
            fz={20}
            fw={500}
            h={33}
            color="var(--mantine-color-greenColor-6)"
            style={{ cursor: "pointer" }}
          >
            SHOP
          </Badge>
        </a>
        <Cart />
      </Group>
    </Box>
  );
};

export default Header;
