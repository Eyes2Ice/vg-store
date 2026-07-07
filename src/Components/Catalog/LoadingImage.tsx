import { useState } from "react";
import { Image, Box, Loader } from "@mantine/core";

interface LoadingImage {
  src: string;
  alt: string;
}

const LoadingImage = ({ src, alt }: LoadingImage) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box w={276} h={276} pos="relative">
      {!isLoaded && (
        <Box
          bg="var(--mantine-color-grayColor-1)"
          bdrs={8}
          w="100%"
          h="100%"
          display="flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Loader color="gray" size="sm" type="bars" />
        </Box>
      )}
      <Image
        src={src}
        w="100%"
        h="100%"
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
    </Box>
  );
};

export default LoadingImage;
