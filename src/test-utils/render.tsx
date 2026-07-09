/* eslint-disable react-refresh/only-export-components */

import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/Components/Cart/CartProvider";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(
    <MantineProvider>
      <CartProvider>{ui}</CartProvider>
    </MantineProvider>,
  );
}

export * from "@testing-library/react";
