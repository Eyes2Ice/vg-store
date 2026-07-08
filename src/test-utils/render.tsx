/* eslint-disable react-refresh/only-export-components */

import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<MantineProvider>{ui}</MantineProvider>);
}

export * from "@testing-library/react";
