import { Container } from "@mantine/core";
import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";

export default function App() {
  return (
    <>
      <Header />
      <Container size={"xl"} px={"lg"}>
        <Catalog />
      </Container>
    </>
  );
}
