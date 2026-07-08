import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@/styles/reset.css";
import "@/styles/global.css";
import App from "./App.tsx";

import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";

const greenColor: MantineColorsTuple = [
  "#eafbee",
  "#dbf2e0",
  "#b9e1c2",
  "#94d0a1",
  "#74c186",
  "#60b874",
  "#54b46a",
  "#449e59",
  "#398d4d",
  "#2a7a3f",
];

const grayColor: MantineColorsTuple = [
  "#fff",
  "#f3f5fa",
  "#e9ecef",
  "#dee2e6",
  "#ced4da",
  "#ced4da",
  "#868e96",
  "#495057",
  "#343a40",
  "#212529",
];

export const theme = createTheme({
  colors: {
    greenColor,
    grayColor,
  },

  fontFamily: "Inter, sans-serif",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
