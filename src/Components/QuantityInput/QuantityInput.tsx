import {
  Group,
  ActionIcon,
  NumberInput,
  type NumberInputHandlers,
} from "@mantine/core";
import { useRef } from "react";

interface QuantityInputProps {
  quantity: string | number;
  setQuantity: (value: string | number) => void;
}

const QuantityInput = ({ quantity, setQuantity }: QuantityInputProps) => {
  const handlersRef = useRef<NumberInputHandlers>(null);

  return (
    <Group gap={0}>
      <ActionIcon
        data-testid="action-decrement"
        size={30}
        bd={"none"}
        bg={"var(--mantine-color-grayColor-3)"}
        variant="default"
        onClick={() => handlersRef.current?.decrement()}
        disabled={quantity === 1}
      >
        <svg
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="2"
            width="2"
            height="12"
            transform="rotate(-90 0 2)"
            fill="#212529"
            style={{ opacity: quantity === 1 ? 0.3 : 1 }}
          />
        </svg>
      </ActionIcon>

      <NumberInput
        data-testid="quantity-input"
        variant="unstyled"
        value={quantity}
        onChange={(value) => setQuantity(value ? value : 1)}
        handlersRef={handlersRef}
        min={1}
        bd={"none"}
        hideControls
        w={30}
        h={30}
        styles={{
          input: { textAlign: "center", minHeight: 0, height: 30 },
        }}
      />

      <ActionIcon
        data-testid="action-increment"
        size={30}
        bd={"none"}
        bg={"var(--mantine-color-grayColor-3)"}
        variant="default"
        onClick={() => handlersRef.current?.increment()}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z" fill="#212529" />
        </svg>
      </ActionIcon>
    </Group>
  );
};

export default QuantityInput;
